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
      map(response =>
        response.notas
          .filter(nota => nota.activo === true)
          .sort((a, b) => {
            const ta = new Date(a.fecha).getTime() || 0;
            const tb = new Date(b.fecha).getTime() || 0;
            return tb - ta; // orden descendente por fecha (más reciente primero)
          })
      )
    );
  }
 getNotasPaginada(options?: any): Observable<any[] | { items: any[]; total: number; page: number; pageSize: number }> {
    return this.http.get<{ notas: any[] }>('assets/notas.json').pipe(
      map(response => {
        // base: activo false y orden descendente por fecha
        let notas = (response.notas || [])
          .filter((nota: any) => nota.activo === false)
          .sort((a: any, b: any) => {
            const ta = new Date(a.fecha).getTime() || 0;
            const tb = new Date(b.fecha).getTime() || 0;
            return tb - ta;
          });

        // sin opciones: devolver array (compatibilidad con getNota)
        if (!options) {
          return notas;
        }

        const page = Math.max(1, Number(options.page) || 1);
        const pageSize = Math.max(1, Math.min(10, Number(options.pageSize) || 10)); // máximo 10 por página
        const search = options.search ? String(options.search).trim().toLowerCase() : '';
        const date = options.date ? new Date(options.date) : null;

        // filtro por search (por nombre/titulo)
        if (search) {
          notas = notas.filter((n: any) => {
            const nombre = (n.nombre || n.titulo || n.title || '').toString().toLowerCase();
            return nombre.includes(search);
          });
        }

        // filtro por fecha (compara YYYY-MM-DD)
        if (date && !isNaN(date.getTime())) {
          const target = date.toISOString().slice(0, 10);
          notas = notas.filter((n: any) => {
            if (!n.fecha) return false;
            const f = new Date(n.fecha);
            if (isNaN(f.getTime())) return false;
            return f.toISOString().slice(0, 10) === target;
          });
        }

        const total = notas.length;
        const start = (page - 1) * pageSize;
        const items = notas.slice(start, start + pageSize);

        return { items, total, page, pageSize };
      })
    );
  }

  getNota(id: number): Observable<any> {
    return this.http.get<{ notas: any[] }>('assets/notas.json').pipe(
      map(response => (response.notas || []).find(nota => Number(nota.id) === Number(id)))
    );
  }
}