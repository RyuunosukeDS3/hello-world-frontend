import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private readonly http: HttpClient) {}

  getMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>('http://localhost:3000/hello');
  }
}
