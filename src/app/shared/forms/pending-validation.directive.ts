import {
  computed,
  Directive,
  inject
} from '@angular/core';
import { FormField } from '@angular/forms/signals';

// Companion to Signal Forms' [formField]: Optimus UI's p-invalid styling isn't touched-gated,
// so a required field shows red immediately on load, before the user has interacted with it.
// Shares the [formField] selector so importing it is enough to opt a field into this - no extra
// template wiring needed. Toggles `pending-validation`, neutralized for p-invalid in styles.scss.
@Directive({
  // Intentionally reuses Signal Forms' [formField] selector so it co-activates on every [formField] usage.
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formField]',
  host: {
    '[class.pending-validation]': 'pendingValidation()',
  },
})
export class PendingValidationDirective {
  private readonly formField = inject(FormField, { self: true });

  protected readonly pendingValidation = computed(() => !this.formField.state().touched());
}
