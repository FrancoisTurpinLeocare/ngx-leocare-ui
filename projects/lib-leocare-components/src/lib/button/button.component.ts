import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import {
  BUTTON_ICON_COLOR_CONFIG,
  BUTTON_ICON_SIZE_CONFIG,
  BUTTON_SIZE_CONFIG,
  BUTTON_TYPE_CONFIG,
  EButtonSize,
  EButtonType,
} from "./button.config";

@Component({
  selector: "leo-button",
  templateUrl: "./button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() type: EButtonType = EButtonType.PRIMARY;
  @Input() size: EButtonSize = EButtonSize.MEDIUM;
  @Input() isDisable?: boolean = false;
  @Input() isLoading?: boolean = false;
  @Input() text?: string;
  @Input() iconPath?: string;

  public buttonTypeClasses: string = "";
  public buttonSizeClasses: string = "";
  public buttonIconSizeClasses: string = "";
  public buttonIconColorClasses: string = "";
  public EButtonSize = EButtonSize;

  public ngOnInit(): void {
    this.buttonTypeClasses = BUTTON_TYPE_CONFIG[this.type];
    this.buttonSizeClasses = !this.isIconButton
      ? BUTTON_SIZE_CONFIG[this.size]
      : "w-9 h-9";
    this.buttonIconSizeClasses = BUTTON_ICON_SIZE_CONFIG[this.size];
    this.buttonIconColorClasses = BUTTON_ICON_COLOR_CONFIG[this.type];
  }

  get isIconButton(): boolean {
    return (
      (this.text === undefined || this.text === "") &&
      (this.iconPath !== undefined || this.iconPath !== "")
    );
  }
}
