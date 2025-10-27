import { Component, OnInit } from '@angular/core';
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

  constructor(private notasService: NotasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID recibido:', this.id);
    this.notasService.getNota(this.id).subscribe(nota => {
      console.log('Nota obtenida:', nota);
      this.nota = nota;
      this.prepararGaleria();
      // Aquí puedes asignar la nota a una variable para usarla en el template
    });
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

  abrirImagen(index: number): void {
    // this.lightbox.open(this.albums, index);
  }

  cerrar(): void {
    // this.lightbox.close();
  }
}