import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import {
  EIconColor,
  EIconSize,
  ICON_COLOR_CONFIG,
  ICON_SIZE_CONFIG,
} from "./icon.config";

@Component({
  selector: "leo-icon",
  templateUrl: "./icon.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input() name: string = "";
  @Input() size: EIconSize = EIconSize.SQUARE_20PX;
  @Input() color: EIconColor = EIconColor.GREY_40;
  @Input() isFill = false;

  public baseIconUrl = "./assets/img/icons/";
  public iconStyles: string = "";
  public iconSizeClasses: string = "";

  ngOnInit(): void {
    this.iconStyles = ICON_COLOR_CONFIG[this.color];
    this.iconSizeClasses = ICON_SIZE_CONFIG[this.size];
  }
}
