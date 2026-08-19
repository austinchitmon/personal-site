import {
  Injectable,
  Signal,
  signal
} from '@angular/core';
import {
  Carrier,
  Shipment
} from '../../../shared/api/shipment-tracker/shipment.model';

@Injectable()
export class ShipmentTrackerStore {
  public readonly shipments: Signal<Shipment[] | undefined>;
  public readonly carriers: Signal<Carrier[]>;
  public readonly creating: Signal<boolean>;
  public readonly createError: Signal<string | null>;
  public readonly deletingIds: Signal<ReadonlySet<string>>;

  readonly #shipments = signal<Shipment[] | undefined>(undefined);
  readonly #carriers = signal<Carrier[]>([]);
  readonly #creating = signal<boolean>(false);
  readonly #createError = signal<string | null>(null);
  readonly #deletingIds = signal<ReadonlySet<string>>(new Set());

  constructor() {
    this.shipments = this.#shipments.asReadonly();
    this.carriers = this.#carriers.asReadonly();
    this.creating = this.#creating.asReadonly();
    this.createError = this.#createError.asReadonly();
    this.deletingIds = this.#deletingIds.asReadonly();
  }

  public setShipments(shipments: Shipment[]): void {
    this.#shipments.set(shipments);
  }

  public addShipment(shipment: Shipment): void {
    this.#shipments.update((shipments) => [shipment, ...(shipments ?? [])]);
  }

  public removeShipment(id: string): void {
    this.#shipments.update((shipments) => shipments?.filter((shipment) => shipment.id !== id));
  }

  public setCarriers(carriers: Carrier[]): void {
    this.#carriers.set(carriers);
  }

  public setCreating(creating: boolean): void {
    this.#creating.set(creating);
  }

  public setCreateError(message: string | null): void {
    this.#createError.set(message);
  }

  public setDeletingId(id: string): void {
    this.#deletingIds.update((ids) => new Set([...ids, id]));
  }

  public clearDeletingId(id: string): void {
    this.#deletingIds.update((ids) => {
      const next = new Set(ids);
      next.delete(id);
      return next;
    });
  }
}
