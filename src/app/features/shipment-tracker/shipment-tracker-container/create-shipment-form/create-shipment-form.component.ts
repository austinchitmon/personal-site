import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  signal,
  untracked
} from '@angular/core';
import {
  form,
  FormField,
  required
} from '@angular/forms/signals';
import { ButtonModule } from '@openng/optimus-ui/button';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Message } from '@openng/optimus-ui/message';
import { Select } from '@openng/optimus-ui/select';
import { Carrier } from '../../../../shared/api/shipment-tracker/shipment.model';
import { PendingValidationDirective } from '../../../../shared/forms/pending-validation.directive';

export interface CreateShipmentRequest {
  trackingNumber: string;
  carrierId: number;
}

interface CreateShipmentFormModel {
  trackingNumber: string;
  carrierId: number | null;
}

const EMPTY_FORM_MODEL: CreateShipmentFormModel = { trackingNumber: '', carrierId: null };

@Component({
  selector: 'app-create-shipment-form',
  imports: [FormField, PendingValidationDirective, InputText, Select, ButtonModule, Message],
  templateUrl: './create-shipment-form.component.html',
  styleUrl: './create-shipment-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateShipmentFormComponent {
  public carriers = input<Carrier[]>([]);
  public submitting = input<boolean>(false);
  public errorMessage = input<string | null>(null);

  public create = output<CreateShipmentRequest>();

  protected readonly model = signal<CreateShipmentFormModel>({ ...EMPTY_FORM_MODEL });
  protected readonly shipmentForm = form(this.model, (path) => {
    required(path.trackingNumber, { message: 'Tracking number is required.' });
    required(path.carrierId, { message: 'Select a carrier.' });
  });

  constructor() {
    // Reset the form once a submit finishes without leaving an error behind (i.e. it succeeded).
    // `dirty` is read untracked so typing doesn't itself retrigger this effect.
    effect(() => {
      const submitting = this.submitting();
      const errorMessage = this.errorMessage();
      if (!submitting && !errorMessage && untracked(() => this.shipmentForm().dirty())) {
        this.shipmentForm().reset({ ...EMPTY_FORM_MODEL });
      }
    });
  }

  protected onSubmit(event: Event): void {
    event.preventDefault();

    if (this.shipmentForm().invalid() || this.submitting()) {
      return;
    }

    const { trackingNumber, carrierId } = this.model();
    this.create.emit({ trackingNumber: trackingNumber.trim(), carrierId: carrierId as number });
  }
}
