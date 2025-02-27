import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  private _count = signal(0);
  readonly count$ = toObservable(this._count);
  constructor() {}

  get count(): number {
    return this._count();
  }

  set count(value: number) {
    this._count.set(value);
  }
}
