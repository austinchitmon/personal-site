import {
  inject,
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import {
  Carrier,
  Shipment
} from './shipment.model';

@Injectable({ providedIn: 'root' })
export class ShipmentTrackerApiService {
  api = inject(ApiService);
  readonly base = environment.apiBase;

  getCarriers(): Observable<Carrier[]> {
    return this.api.get<Carrier[]>(`${this.base}/carriers`);
  }

  getShipments(): Observable<Shipment[]> {
    return this.api.get<Shipment[]>(`${this.base}/shipment-tracker/shipment`);
  }

  createShipment(trackingNumber: string, carrierId: number): Observable<Shipment> {
    return this.api.post<{ trackingNumber: string; carrierId: number }, Shipment>(
      `${this.base}/shipment-tracker/shipment`,
      { trackingNumber, carrierId }
    );
  }

  deleteShipment(id: string): Observable<void> {
    return this.api.delete<void>(`${this.base}/shipment-tracker/shipment/${id}`);
  }
}
