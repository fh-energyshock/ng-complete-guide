import { Component, effect } from '@angular/core';
import { SignalService } from '../signal.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'signal-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  count$: Observable<number>;
  private loggingEffect = effect(() => {
    console.log(`The count is: ${this._signalService.count}`);
  });

  constructor(private _signalService: SignalService) {
    this.count$ = this._signalService.count$;
    effect(() => {
      console.log(`The constructor count is: ${this._signalService.count}`);
    });
  }
}
