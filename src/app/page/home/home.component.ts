import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
// import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   show: boolean = true; // Cambia a false para no mostrar el modal

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      src: 'assets/img/imagen1.jpg',
      alt: 'Primera imagen',
      title: 'Imagen 1',
      description: 'Descripción de la primera imagen'
    },
    {
      src: 'assets/img/imagen2.jpg',
      alt: 'Segunda imagen',
      title: 'Imagen 2',
      description: 'Descripción de la segunda imagen'
    },
    {
      src: 'assets/img/imagen3.jpg',
      alt: 'Tercera imagen',
      title: 'Imagen 3',
      description: 'Descripción de la tercera imagen'
    }
  ];



	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	// @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;

	// togglePaused() {
	// 	if (this.paused) {
	// 		this.carousel?.cycle();
	// 	} else {
	// 		this.carousel?.pause();
	// 	}
	// 	this.paused = !this.paused;
	// }

	// onSlide(slideEvent: NgbSlideEvent) {
	// 	if (
	// 		this.unpauseOnArrow &&
	// 		slideEvent.paused &&
	// 		(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
	// 	) {
	// 		this.togglePaused();
	// 	}
	// 	if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
	// 		this.togglePaused();
	// 	}
	// }


  closeModal(): void {
    this.show = false;
  }

  // Opcional: cerrar con la tecla ESC
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.show) {
      this.closeModal();
    }
  }
}
