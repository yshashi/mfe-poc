import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public events = new BehaviorSubject<SharedEvent | null>(null);

  emit(event: SharedEvent) {
    this.events.next(event);
  }

  on(eventName: string) {
    return this.events.asObservable().pipe(
      filter((event: SharedEvent | null) => event?.name === eventName),
      map((event: SharedEvent | null) => event?.value)
    );
  }
}

export type SharedEvent = { name: string; value: any };
