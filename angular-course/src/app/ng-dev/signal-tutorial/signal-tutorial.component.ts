import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signal-tutorial',
  imports: [CommonModule],
  templateUrl: './signal-tutorial.component.html',
  styleUrl: './signal-tutorial.component.scss',
})
export class SignalTutorialComponent implements OnInit {
  // Only the signals actually read during the derivation are tracked. For example, in this computed the count signal is only read if the showCount signal is true
  showCount = signal(false);
  count = signal(0);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  ngOnInit(): void {}

  updateCount(): void {
    this.showCount.set(true);
    this.count.update((value) => value + 1);
  }
}
