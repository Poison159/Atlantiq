import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IEvent } from './event';
import { IService } from './service';

@Injectable()
export class EventsService {
    private _eventsUrl          = 'https://webwithaccounts.conveyor.cloud/api/Events';
    private _servicesUrl        = 'https://atlantiq.conveyor.cloud/api/Services';
    private _localserviceUrl    = 'http://192.168.0.120:45457/api/Services';
    private _localeventsUrl     = 'http://192.168.0.189:45459/api/Events';

    constructor(private _http: HttpClient){}

    getEvents(): Observable<IEvent[]> {
        console.log('getting indawo from the server');
        return this._http.get<IEvent[]>(this._localeventsUrl);
    }
    getServices(): Observable<IService[]> {
        console.log('getting services from the server');
        return this._http.get<IService[]>(this._localserviceUrl);
    }
}