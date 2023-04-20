import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from 'src/models/log';

@Injectable({
    providedIn: 'root'
  })

export class LogService {
    url = 'http://127.0.0.1:3002/log';

    constructor(private http: HttpClient) { }

    getLogs(): Observable<Log[]> {
        return this.http.get<Log[]>(this.url + '/get/all');
    }
    
    addLog(log: Log): Observable<any>{
        return this.http.post(this.url + '/add', log);
    }

    deleteLog(id: String): Observable<any> {
        return this.http.delete(this.url + '/delete/' + id);
    }

    updateLog(id: String, log: Log): Observable<any> {
        return this.http.post(this.url + '/update/' + id, log)
    }
    
}

