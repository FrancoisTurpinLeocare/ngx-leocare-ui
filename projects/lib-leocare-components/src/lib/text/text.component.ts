import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import {
  ETextAlign,
  ETextColor,
  ETextFamily,
  ETextSize,
  TEXT_ALIGN_CONFIG,
  TEXT_COLOR_CONFIG,
  TEXT_FAMILY_CONFIG,
  TEXT_SIZE_CONFIG,
} from "./text.config";

@Component({
  selector: "leo-text",
  templateUrl: "./text.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() text: string = "";
  @Input() size: ETextSize = ETextSize.M;
  @Input() color: ETextColor = ETextColor.GREY_25;
  @Input() family: ETextFamily = ETextFamily.STEVEN;
  @Input() align: ETextAlign = ETextAlign.LEFT;
  @Input() smSize?: ETextSize;

  TEXT_SIZE_CONFIG = TEXT_SIZE_CONFIG;
  TEXT_ALIGN_CONFIG = TEXT_ALIGN_CONFIG;
  TEXT_FAMILY_CONFIG = TEXT_FAMILY_CONFIG;
  TEXT_COLOR_CONFIG = TEXT_COLOR_CONFIG;
}
