import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CustomEventService<T> {
  constructor() {}

  emit(eventName: string, event: any) {
    const eventObject = new CustomEvent(eventName, {
      detail: event,
    });
    window.dispatchEvent(eventObject);
  }

  on(eventName: string): Observable<CustomEvent<T>> {
    return new Observable((observer) => {
      window.addEventListener(eventName, (event) => {
        observer.next(event as CustomEvent<T>);
      });
    });
  }

}

export interface CustomEvent<T> extends Event {
  detail: T;
}
