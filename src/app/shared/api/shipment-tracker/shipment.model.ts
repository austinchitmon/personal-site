export interface Carrier {
  id: number;
  code: string;
  displayName: string;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  carrier: Carrier;
  statusText: string | null;
  lastLocation: string | null;
  estimatedDelivery: string | null;
  delivered: boolean;
  lastCheckedAt: string;
  createdAt: string;
}
