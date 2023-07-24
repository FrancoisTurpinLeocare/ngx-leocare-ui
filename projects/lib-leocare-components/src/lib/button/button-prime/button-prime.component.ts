import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "leo-button-prime",
  templateUrl: "./button-prime.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPrimeComponent {
  @Input() label: string = "Button";
  @Input() classes: string = "";
  @Input() icon: string = "";
  @Input() iconPos: string = "";
  @Input() loading: boolean = false;
  @Input() loadingIcon: string = "";
}
