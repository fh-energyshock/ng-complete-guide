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
  firstName = signal('Manuel');
  firstNameLowerCase: Signal<string> = signal('');
  showDate = signal(false);
  isDateExpired = signal(false);
  showDateDuration = computed(() => this.showDate() && !this.isDateExpired());
  timestamp: WritableSignal<Date | null> = signal(null);
  showCurrentTimestamp = computed(() => this.timestamp());
  count = signal(0);

  ngOnInit(): void {
    // A computed is a signal that produces its value based on other signals.
    // A computed signal is read-only; it does not have a set or an update method.
    this.firstNameLowerCase = computed(() => this.firstName().toLowerCase());
    console.log(this.firstNameLowerCase());
    this.firstName.set('Manu');
    console.log(this.firstNameLowerCase());

    // Writable signals provide an API for updating their values directly.
    console.log('The count is: ', this.count());
    this.count.update((value) => {
      return (value += 1);
    });
    console.log('The count is: ', this.count());
  }

  activateDate(): void {
    this.timestamp.set(new Date());
    this.showDate.set(true);
  }

  deactivateDate(): void {
    this.showDate.set(false);
  }
}
