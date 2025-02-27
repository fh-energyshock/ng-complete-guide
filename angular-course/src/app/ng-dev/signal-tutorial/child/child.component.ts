import {
  Component,
  effect,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'signal-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() count: WritableSignal<number> = signal(0);
  // The effect can be created in the constructor or as a field which provides a descriptive name
  private loggingEffect = effect(() => {
    console.log(`The count is: ${this.count()}`);
  });

  constructor() {
    effect(() => {
      console.log(`The constructor count is: ${this.count()}`);
    });
  }
}
