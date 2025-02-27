import { Component, effect } from '@angular/core';
import { SignalService } from '../signal.service';

@Component({
  selector: 'signal-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  private loggingEffect = effect(() => {
    console.log(`The count is: ${this._signalService.count}`);
  });

  constructor(private _signalService: SignalService) {
    effect(() => {
      console.log(`The constructor count is: ${this._signalService.count}`);
    });
  }
}
