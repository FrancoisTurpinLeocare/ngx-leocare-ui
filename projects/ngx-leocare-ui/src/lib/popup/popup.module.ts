import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { IconModule } from "../icon/icon.module";
import { TextModule } from "../text/text.module";
import { PopupComponent } from "./popup.component";

@NgModule({
  declarations: [PopupComponent],
  exports: [PopupComponent],
  imports: [CommonModule, TextModule, IconModule, ButtonModule],
})
export class PopupModule {}
