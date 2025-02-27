import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { SignalService } from './signal.service';

@Component({
  selector: 'app-signal-tutorial',
  imports: [CommonModule, ChildComponent],
  templateUrl: './signal-tutorial.component.html',
  styleUrl: './signal-tutorial.component.scss',
})
export class SignalTutorialComponent {
  count = signal(0);
  constructor(private _signalService: SignalService) {}

  updateCount(): void {
    this.count.update((value) => value + 1);
    this._signalService.count = this.count();
  }
}
