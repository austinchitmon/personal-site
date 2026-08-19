import { HttpErrorResponse } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable
} from '@angular/core';
import {
  catchError,
  finalize,
  of
} from 'rxjs';
import { ShipmentTrackerApiService } from '../../../shared/api/shipment-tracker/shipment-tracker-api.service';
import { ShipmentTrackerStore } from './shipment-tracker.store';

const DUPLICATE_TRACKING_ERROR = "You're already tracking this package.";
const GENERIC_CREATE_ERROR = 'Something went wrong adding this shipment. Please try again.';

@Injectable()
export class ShipmentTrackerFacade {
  private readonly store = inject(ShipmentTrackerStore);
  private readonly api = inject(ShipmentTrackerApiService);

  public shipments = computed(() => this.store.shipments());
  public carriers = computed(() => this.store.carriers());
  public creating = computed(() => this.store.creating());
  public createError = computed(() => this.store.createError());
  public deletingIds = computed(() => this.store.deletingIds());

  public loadInitialData(): void {
    this.api.getCarriers().pipe(
      catchError(() => of<never[]>([]))
    ).subscribe((carriers) => this.store.setCarriers(carriers));

    this.refresh();
  }

  public refresh(): void {
    this.api.getShipments().pipe(
      catchError(() => of<never[]>([]))
    ).subscribe((shipments) => this.store.setShipments(shipments));
  }

  public createShipment(trackingNumber: string, carrierId: number): void {
    this.store.setCreating(true);
    this.store.setCreateError(null);

    this.api.createShipment(trackingNumber, carrierId).pipe(
      catchError((err: HttpErrorResponse) => {
        this.store.setCreateError(err.status === 409 ? DUPLICATE_TRACKING_ERROR : GENERIC_CREATE_ERROR);
        return of(null);
      }),
      finalize(() => this.store.setCreating(false))
    ).subscribe((shipment) => {
      if (shipment) {
        this.store.addShipment(shipment);
      }
    });
  }

  public deleteShipment(id: string): void {
    this.store.setDeletingId(id);

    this.api.deleteShipment(id).pipe(
      catchError((err: HttpErrorResponse) => {
        // A 404 here just means it's already gone (not ours, or already deleted) - treat as success.
        if (err.status === 404) {
          return of(null);
        }
        throw err;
      }),
      finalize(() => this.store.clearDeletingId(id))
    ).subscribe({
      next: () => this.store.removeShipment(id),
      error: (err) => console.error('Failed to delete shipment', err)
    });
  }
}
