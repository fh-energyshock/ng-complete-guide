import { Component, computed, OnInit, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-tutorial',
  imports: [],
  templateUrl: './signal-tutorial.component.html',
  styleUrl: './signal-tutorial.component.scss',
})
export class SignalTutorialComponent implements OnInit {
  firstName = signal('Manuel');
  firstNameLowerCase: Signal<string> = signal('');

  ngOnInit(): void {
    this.firstNameLowerCase = computed(() => this.firstName().toLowerCase());
    console.log(this.firstNameLowerCase());
    this.firstName.set('Manu');
    console.log(this.firstNameLowerCase());
  }
}
