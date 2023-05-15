import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { EInputType } from "./input.config";

@Component({
  selector: "leo-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() identifier: string = "";
  @Input() label: string = "";
  @Input() name: string = "";
  @Input() type: EInputType = EInputType.TEXT;
  @Input() placeholder: string = "";
  @Input() isDisabled: boolean = false;
  @Input() isValid: boolean = false;
  @Input() isInvalid: boolean = false;
  @Input() isRequired: boolean = false;

  public EInputType = EInputType;
}
