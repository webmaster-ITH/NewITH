import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  id: number = 0;
  nota: any;
  albums: any[] = [];
  imagenSeleccionada: any = null;
  indiceActual: number = 0;

  constructor(private notasService: NotasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID recibido:', this.id);
    this.notasService.getNota(this.id).subscribe(nota => {
      console.log('Nota obtenida:', nota);
      this.nota = nota;
      this.prepararGaleria();
    });
  }

  ngOnDestroy(): void {
    // Limpieza al destruir el componente
    this.imagenSeleccionada = null;
  }

  // Escuchar eventos del teclado
  @HostListener('window:keydown', ['$event'])
  manejarTeclado(event: KeyboardEvent): void {
    if (!this.imagenSeleccionada) return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.imagenAnterior();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.imagenSiguiente();
        break;
      case 'Escape':
        event.preventDefault();
        this.cerrarImagen();
        break;
    }
  }

  prepararGaleria(): void {
    if (this.nota && this.nota.imagen) {
      this.albums = this.nota.imagen.map((imagen: any) => ({
        src: imagen.url,
        caption: imagen.descripcion,
        thumb: imagen.url
      }));
    }
  }

  abrirImagenEnIndice(index: number): void {
    this.indiceActual = index;
    this.imagenSeleccionada = this.nota.imagen[index];
  }

  imagenAnterior(): void {
    if (this.indiceActual > 0) {
      this.indiceActual--;
      this.imagenSeleccionada = this.nota.imagen[this.indiceActual];
    }
  }

  imagenSiguiente(): void {
    if (this.indiceActual < this.nota.imagen.length - 1) {
      this.indiceActual++;
      this.imagenSeleccionada = this.nota.imagen[this.indiceActual];
    }
  }

  cerrarImagen(): void {
    this.imagenSeleccionada = null;
  }

  abrirImagen(index: number): void {
    // Método existente - mantenerlo por compatibilidad
    this.abrirImagenEnIndice(index);
  }

  cerrar(): void {
    // Método existente - mantenerlo por compatibilidad
    this.cerrarImagen();
  }
}