import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-notas-old',
  templateUrl: './notas-old.component.html',
  styleUrls: ['./notas-old.component.css']
})
export class NotasOldComponent implements OnInit {

   notas: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalNotas: number = 0;
  totalPages: number = 0;
  
  // Filtros
  searchTerm: string = '';
  searchDate: string = '';
  
  Math = Math; // Para usar Math.min en el template

  constructor(private notasService: NotasService, private router: Router) { }

  ngOnInit(): void {
    this.cargarNotas();
  }

  cargarNotas(): void {
    const params = {
      page: this.currentPage,
      pageSize: this.pageSize,
      search: this.searchTerm,
      date: this.searchDate
    };

    this.notasService.getNotasPaginada(params).subscribe(data => {
      if (Array.isArray(data)) {
        // Respuesta en formato array (sin paginación)
        this.notas = data;
        this.totalNotas = data.length;
        this.totalPages = 1;
      } else {
        // Respuesta con paginación
        this.notas = data.items;
        this.totalNotas = data.total;
        this.totalPages = Math.ceil(data.total / this.pageSize);
      }
      console.log('Notas cargadas:', this.notas);
    });
  }

  buscar(): void {
    this.currentPage = 1; // Resetear a la primera página al buscar
    this.cargarNotas();
  }

  limpiar(): void {
    this.searchTerm = '';
    this.searchDate = '';
    this.currentPage = 1;
    this.cargarNotas();
  }

  cambiarPagina(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.cargarNotas();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5; // Máximo de páginas visibles
    
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
      let end = Math.min(this.totalPages, start + maxVisible - 1);
      
      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  }

  verNota(id: number): void {
    this.router.navigate(['/noticia', id]);
  }
}
