import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-noticiaslist',
  templateUrl: './noticiaslist.component.html',
  styleUrls: ['./noticiaslist.component.css']
})
export class NoticiaslistComponent implements OnInit {
  notas: any[] = [];
  constructor(private notasService: NotasService, private router: Router) { }

  ngOnInit(): void {
    this.notasService.getNotas().subscribe(data => {
      console.log(data);
      this.notas = data;
    });
  }
  verNota(id: number): void {
    this.router.navigate(['/noticia', id]);
    // O también: this.router.navigate([`/noticia/${id}`]);
  }
}