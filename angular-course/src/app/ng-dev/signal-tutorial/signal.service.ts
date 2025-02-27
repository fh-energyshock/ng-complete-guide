import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  private _count = signal(0);
  constructor() {}

  get count(): number {
    return this._count();
  }

  set count(value: number) {
    this._count.set(value);
  }
}
