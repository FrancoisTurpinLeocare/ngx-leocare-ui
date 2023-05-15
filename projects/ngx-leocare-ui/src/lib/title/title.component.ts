import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import {
  ATOM_TITLE_ALIGN_CONFIG,
  ATOM_TITLE_COLOR_CONFIG,
  ATOM_TITLE_DISPLAY_CONFIG,
  ATOM_TITLE_DISPLAY_CONFIG_BY_DEFAULT,
  EAtomTitleAlignConfig,
  EAtomTitleColorConfig,
  EAtomTitleDisplayConfig,
  EAtomTitleLevel,
} from "./title.config";

export type AtomTitle = {
  alignConfig?: EAtomTitleAlignConfig;
  text: string;
  level: EAtomTitleLevel;
  displayConfig?: EAtomTitleDisplayConfig;
  colorConfig?: EAtomTitleColorConfig;
};

@Component({
  selector: "leo-title",
  templateUrl: "./title.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent implements OnInit {
  @Input() level: EAtomTitleLevel = EAtomTitleLevel.H1;
  @Input() text: string = "";
  @Input() alignConfig: EAtomTitleAlignConfig =
    EAtomTitleAlignConfig.ALIGN_LEFT;
  @Input() displayConfig: EAtomTitleDisplayConfig =
    EAtomTitleDisplayConfig.DISPLAY_H1;
  @Input() colorConfig: EAtomTitleColorConfig = EAtomTitleColorConfig.GREY_25;

  eAtomTitleLevel = EAtomTitleLevel;
  eAtomTitleAlignConfig = EAtomTitleAlignConfig;
  eAtomTitleDisplayConfig = EAtomTitleDisplayConfig;
  eAtomTitleColorConfig = EAtomTitleColorConfig;

  atomTitleAlignConfig = ATOM_TITLE_ALIGN_CONFIG;
  atomTitleDisplayConfig = ATOM_TITLE_DISPLAY_CONFIG;
  atomTitleColorConfig = ATOM_TITLE_COLOR_CONFIG;
  atomTitleDisplayConfigByDefault = ATOM_TITLE_DISPLAY_CONFIG_BY_DEFAULT;

  ngOnInit() {
    this.setDisplayConfigByDefault();
    this.setAlignConfigByDefault();
    this.setColorConfigByDefault();
  }

  private setDisplayConfigByDefault(): void {
    this.displayConfig =
      this.displayConfig ?? ATOM_TITLE_DISPLAY_CONFIG_BY_DEFAULT[this.level];
  }

  private setAlignConfigByDefault(): void {
    this.alignConfig =
      this.alignConfig ?? this.eAtomTitleAlignConfig.ALIGN_CENTERED;
  }

  private setColorConfigByDefault(): void {
    this.colorConfig = this.colorConfig ?? this.eAtomTitleColorConfig.GREY_25;
  }
}
