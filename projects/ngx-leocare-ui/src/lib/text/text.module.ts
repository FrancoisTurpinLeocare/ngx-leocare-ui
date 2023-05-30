import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TextComponent } from "./text.component";

@NgModule({
  declarations: [TextComponent],
  exports: [TextComponent],
  imports: [CommonModule],
})
export class TextModule {}
