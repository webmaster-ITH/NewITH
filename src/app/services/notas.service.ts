import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

   constructor(private http: HttpClient) { }

  getNotas(): Observable<any[]> {
    return this.http.get<{notas: any[]}>('assets/notas.json').pipe(
      map(response => response.notas)
    );
  }

  getNota(id: number): Observable<any> {
    return this.getNotas().pipe(
      map(notas => notas.find(nota => nota.id === id))
    );
  }
}