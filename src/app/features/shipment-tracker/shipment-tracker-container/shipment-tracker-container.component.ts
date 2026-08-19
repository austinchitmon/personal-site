import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { ConfirmationService } from '@openng/optimus-ui/api';
import { ButtonModule } from '@openng/optimus-ui/button';
import { Card } from '@openng/optimus-ui/card';
import { ConfirmDialog } from '@openng/optimus-ui/confirmdialog';
import { Tag } from '@openng/optimus-ui/tag';
import { Shipment } from '../../../shared/api/shipment-tracker/shipment.model';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';
import { CreateShipmentFormComponent, CreateShipmentRequest } from './create-shipment-form/create-shipment-form.component';
import { ShipmentTrackerFacade } from './shipment-tracker.facade';
import { ShipmentTrackerStore } from './shipment-tracker.store';

@Component({
  selector: 'app-shipment-tracker-container',
  providers: [ShipmentTrackerStore, ShipmentTrackerFacade, ConfirmationService],
  imports: [Card, Tag, ButtonModule, ConfirmDialog, CreateShipmentFormComponent, LoadingSpinnerComponent, DatePipe],
  templateUrl: './shipment-tracker-container.component.html',
  styleUrl: './shipment-tracker-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipmentTrackerContainerComponent implements OnInit {
  protected readonly facade = inject(ShipmentTrackerFacade);
  private readonly confirmationService = inject(ConfirmationService);

  ngOnInit(): void {
    this.facade.loadInitialData();
  }

  protected onCreate(request: CreateShipmentRequest): void {
    this.facade.createShipment(request.trackingNumber, request.carrierId);
  }

  protected confirmDelete(shipment: Shipment): void {
    this.confirmationService.confirm({
      header: 'Stop tracking this shipment?',
      message: `This removes ${shipment.trackingNumber} permanently - there's no undo.`,
      icon: 'pi pi-exclamation-triangle',
      acceptButtonProps: { severity: 'danger' },
      accept: () => this.facade.deleteShipment(shipment.id),
    });
  }

  protected statusSeverity(shipment: Shipment): 'success' | 'info' | 'secondary' {
    if (shipment.delivered) {
      return 'success';
    }
    return shipment.statusText ? 'info' : 'secondary';
  }
}
