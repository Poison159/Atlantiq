import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IEvent } from './event';

@Injectable()
export class EventsService {
    private _eventsUrl    = 'http://localhost:52374/api/Events';
    
    constructor(private _http: HttpClient){}
    getEvents(): Observable<IEvent[]> {
        console.log('getting indawo from the server');
        return this._http.get<IEvent[]>(this._eventsUrl);
    }
}