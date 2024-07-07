import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Subject } from 'rxjs';

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
