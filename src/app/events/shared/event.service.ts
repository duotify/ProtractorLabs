import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {

  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`${environment.host}/api/events`)
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${environment.host}/api/events/` + id)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(event, file: File) {
    const fd = new FormData();
    // tslint:disable-next-line:forin
    for (const key in event) {
        if (typeof(event[key]) === typeof({})) {
        // tslint:disable-next-line:forin
        for (const subkey in event[key]) {
          fd.append(`${key}.${subkey}`, event[key][subkey]);
        }
      } else {
        fd.append(key, event[key]);
      }
    }

    fd.append('image', file, file.name);
    fd.append('date', event.date);
    return this.http.post<IEvent>(`${environment.host}/api/events`, fd)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  saveSession(event) {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<IEvent>(`${environment.host}/api/events/${event.id}`, event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(`${environment.host}/api/events/search?search=` + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
