import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { EButtonType } from "../button/button.config";
import { EIconColor, EIconSize } from "../icon/icon.config";
import {
  ETextAlign,
  ETextColor,
  ETextFamily,
  ETextSize,
} from "../text/text.config";
import { EPopupIconName, EPopupState } from "./popup.config";

@Component({
  selector: "leo-popup",
  templateUrl: "./popup.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent {
  @Input() popupTitle: string = "Title";
  @Input() cancelLabel: string = "Annuler";
  @Input() confirmLabel: string = "Valider";
  @Output() cancelEvent: EventEmitter<EPopupState> =
    new EventEmitter<EPopupState>();
  @Output() validateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  eIconColor = EIconColor;
  eTextColor = ETextColor;

  eTextSize = ETextSize;
  eTextFamily = ETextFamily;
  eTextAlign = ETextAlign;

  eIconSize = EIconSize;

  eButtonType = EButtonType;

  ePopupIconName = EPopupIconName;
  ePopupState = EPopupState;

  cancel(): void {
    this.cancelEvent.emit(this.ePopupState.CLOSE);
  }

  validate(): void {
    this.validateEvent.emit();
  }
}
