import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ButtonModule } from '@openng/optimus-ui/button';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Message } from '@openng/optimus-ui/message';
import { Select } from '@openng/optimus-ui/select';
import { Carrier } from '../../../../shared/api/shipment-tracker/shipment.model';

export interface CreateShipmentRequest {
  trackingNumber: string;
  carrierId: number;
}

@Component({
  selector: 'app-create-shipment-form',
  imports: [ReactiveFormsModule, InputText, Select, ButtonModule, Message],
  templateUrl: './create-shipment-form.component.html',
  styleUrl: './create-shipment-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateShipmentFormComponent {
  public carriers = input<Carrier[]>([]);
  public submitting = input<boolean>(false);
  public errorMessage = input<string | null>(null);

  public create = output<CreateShipmentRequest>();

  protected readonly form = new FormGroup({
    trackingNumber: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    carrierId: new FormControl<number | null>(null, { validators: [Validators.required] }),
  });

  constructor() {
    // Reset the form once a submit finishes without leaving an error behind (i.e. it succeeded).
    effect(() => {
      if (!this.submitting() && !this.errorMessage() && this.form.dirty) {
        this.form.reset({ trackingNumber: '', carrierId: null });
      }
    });
  }

  protected onSubmit(): void {
    if (this.form.invalid || this.submitting()) {
      return;
    }

    const { trackingNumber, carrierId } = this.form.getRawValue();
    this.create.emit({ trackingNumber: trackingNumber.trim(), carrierId: carrierId as number });
  }
}
