import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Dog } from '../model/dog';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = 'http://localhost:3000/api/dog'
  constructor(private http: HttpClient) {}
  /** GET heroes from the server */

getDogs(): Observable<Dog[]> {
  return this.http.get<Dog[]>(this.baseUrl,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  })


  .pipe(catchError(this.handleError));
}
private handleError(errorResponse: HttpErrorResponse) {

  if (errorResponse.error instanceof ErrorEvent) {
    console.error('Client Side Error :', errorResponse.error.message);
  } else {
    console.error('Server Side Error :', errorResponse);
  }
  return throwError(()=> 'There is a problem with the service. We are notified & working on it. Please try again later.');
}

save(dog: Dog): Observable<Dog> {

  console.log("clicou")

  return this.http.post<Dog>(this.baseUrl, dog, {

    /**@SaveDog */

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
}

}
