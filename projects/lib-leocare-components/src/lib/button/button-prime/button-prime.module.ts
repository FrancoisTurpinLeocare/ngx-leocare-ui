import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ButtonPrimeComponent } from "./button-prime.component";

@NgModule({
  declarations: [ButtonPrimeComponent],
  exports: [ButtonPrimeComponent],
  imports: [CommonModule, ButtonModule],
})
export class ButtonPrimeModule {}
