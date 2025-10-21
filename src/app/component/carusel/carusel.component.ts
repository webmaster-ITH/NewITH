import { Component, OnInit } from '@angular/core';
export interface CarouselSlide {
  image: string;
  title: string;
  description: string;
  alt: string;
  link?: string;  // URL para redirección
  downloadUrl?: string;  // URL para descarga
  downloadFileName?: string;  // Nombre del archivo a descargar
  openInNewTab?: boolean;  // Si el link debe abrir en nueva pestaña
}

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
  currentSlide = 0;
  autoPlayInterval: any;

  slides: CarouselSlide[] = [
    {
      image: 'https://ith.mx/imagenes/Innovatec 2025 banner.jpg',
      link: 'https://ith.mx/Innovatec 2025/Innovatec 2025.html',
      alt: 'Innovatec 2025',
      title: 'Innovatec 2025',
      description: 'Evento Innovatec 2025',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-09-12 at 10.01.50_5b37535a.jpg',
      link: 'https://ith.mx/graduacion-2023-2025.html',
      alt: 'Graduación 2023-2025',
      title: 'Graduación',
      description: 'Ceremonia de graduación',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-09-09 at 12.18.32_2a648a40.jpg',
      link: 'https://ith.mx/convocatorias/index.html',
      alt: 'Convocatorias',
      title: 'Convocatorias',
      description: 'Consulta convocatorias recientes',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-09-09 at 11.51.34_1f426773.jpg',
      downloadUrl: 'https://ith.mx/documentos/CONVOCATORIA PERIODO SABATICO 1-2026.pdf',
      downloadFileName: 'CONVOCATORIA PERIODO SABATICO 1-2026.pdf',
      alt: 'Convocatoria Sabático',
      title: 'Convocatoria Sabático',
      description: 'Descarga la convocatoria del periodo sabático'
    },
    {
      image: 'https://ith.mx/imagenes/IMG-20250902-WA0004.jpg',
      link: '#',
      alt: '',
      title: '',
      description: '',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/IMG-20250902-WA0003.jpg',
      link: '#',
      alt: '',
      title: '',
      description: '',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/IMG-20250902-WA0005.jpg',
      link: '#',
      alt: '',
      title: '',
      description: '',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/IMG-20250902-WA0006.jpg',
      link: '#',
      alt: '',
      title: '',
      description: '',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/IMG-20250902-WA0007.jpg',
      link: '#',
      alt: '',
      title: '',
      description: '',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-08-22 at 13.29.21_7b6a840d.jpg',
      link: '#',
      alt: '',
      title: '',
      description: '',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-08-20 at 10.45.39_6ef7f739.jpg',
      link: '#',
      alt: '',
      title: '',
      description: '',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-08-19 at 16.33.39_8d0e4eb2.jpg',
      downloadUrl: 'https://ith.mx/documentos/Programa de Asesorias paras el Departamento de Ciencias Basicas.pdf',
      downloadFileName: 'Programa de Asesorias paras el Departamento de Ciencias Basicas.pdf',
      alt: 'Programa de Asesorías',
      title: 'Asesorías',
      description: 'Descarga el programa de asesorías'
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-08-08 at 11.52.01_e4efa1e1.jpg',
      link: 'https://ith.mx/pasos-nuevo-ingreso.html',
      alt: 'Pasos nuevo ingreso',
      title: 'Nuevo Ingreso',
      description: 'Conoce los pasos para nuevo ingreso',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-08-01 at 13.09.29_d0a7bfc1.jpg',
      link: 'https://ith.mx/reinscripciones.html',
      alt: 'Reinscripciones',
      title: 'Reinscripciones',
      description: 'Información sobre reinscripciones',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/3c27fe7f-6cc4-46a3-b5d9-256d1dd3c346.jpeg',
      alt: '',
      title: '',
      description: ''
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-06-23 at 3.09.33 PM.jpeg',
      link: 'https://ith.mx/convocatorias/index.html',
      alt: '',
      title: 'Convocatorias',
      description: 'Convocatorias recientes',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/e1d88a2f-75a5-4209-beac-a1286e27d6e5.jpeg',
      link: 'https://ith.mx/convocatorias/index.html',
      alt: '',
      title: 'Convocatorias',
      description: 'Convocatorias activas',
      openInNewTab: false
    },
    {
      image: 'https://ith.mx/imagenes/WhatsApp Image 2025-06-16 at 11.51.31 AM.jpeg',
      link: 'https://ith.mx/avisos-adicionales.html',
      alt: 'Avisos adicionales',
      title: 'Avisos adicionales',
      description: 'Consulta avisos recientes',
      openInNewTab: false
    },
    {
      image: '../../imagenes/WhatsApp Image 2025-06-10 at 11.58.17 AM.jpeg',
      link: '/convocatorias/index.html',
      alt: 'Convocatorias',
      title: 'Convocatorias',
      description: 'Consulta las convocatorias',
      openInNewTab: false
    },
    {
      image: '../../imagenes/WhatsApp Image 2025-04-08 at 1.45.56 PM.jpeg',
      alt: '',
      title: '',
      description: ''
    },
    {
      image: '../../imagenes/img convotaria 2025 proyecto de investigacion educativa.jpg',
      downloadUrl: '/documentos/COMUNICADO INVESTIGACION EDUCATIVA (1).pdf',
      downloadFileName: 'COMUNICADO INVESTIGACION EDUCATIVA (1).pdf',
      alt: 'Investigación educativa',
      title: 'Investigación educativa',
      description: 'Descarga el comunicado de investigación educativa'
    },
    {
      image: '../../imagenes/WhatsApp Image 2025-03-18 at 2.11.26 PM.jpeg',
      alt: '',
      title: '',
      description: ''
    },
    {
      image: '../../imagenes/WhatsApp Image 2025-03-04 at 3.22.27 PM.jpeg',
      link: '/convocatorias/index.html',
      alt: '',
      title: 'Convocatorias',
      description: 'Convocatorias activas',
      openInNewTab: false
    },
    {
      image: '../../imagenes/8Banner-Respeto_01.png',
      alt: 'Respeto 01',
      title: 'Respeto',
      description: 'Campaña de respeto'
    },
    {
      image: '../../imagenes/8Banner-Respeto_02.png',
      alt: 'Respeto 02',
      title: 'Respeto',
      description: 'Campaña de respeto'
    },
    {
      image: '../../imagenes/9Banner-Acoso_laboral_01 AVISO 9.png',
      alt: 'Acoso laboral 01',
      title: 'Acoso laboral',
      description: 'Aviso sobre acoso laboral'
    },
    {
      image: '../../imagenes/9Banner-Acoso_laboral_02.png',
      alt: 'Acoso laboral 02',
      title: 'Acoso laboral',
      description: 'Aviso sobre acoso laboral'
    },
    {
      image: '../../imagenes/10Banner-reflexion_01.png',
      alt: 'Reflexión 01',
      title: 'Reflexión',
      description: 'Mensaje de reflexión'
    },
    {
      image: '../../imagenes/10Banner-reflexion_02.png',
      alt: 'Reflexión 02',
      title: 'Reflexión',
      description: 'Mensaje de reflexión'
    },
    {
      image: '../../imagenes/WhatsApp Image 2025-02-20 at 12.57.02 PM.jpeg',
      downloadUrl: '/documentos/Este logo no solo conmemora los 50 anos del ITH.pdf',
      downloadFileName: 'Este logo no solo conmemora los 50 anos del ITH.pdf',
      alt: 'Logo 50 años ITH',
      title: '50 años del ITH',
      description: 'Descarga el comunicado conmemorativo'
    },
    {
      image: '../../imagenes/WhatsApp Image 2025-02-18 at 10.10.42 AM.jpeg',
      link: 'https://www.tecnm.mx/archivos/anexos/POSICIONAMIENTO_CERO_TOLERANCIA_ACTOS_CORRUPCION_FIRMADO.pdf?pdf=132512',
      alt: 'Cero tolerancia corrupción',
      title: 'Cero tolerancia',
      description: 'Posicionamiento institucional',
      openInNewTab: true
    },
    {
      image: '../../imagenes/WhatsApp Image 2025-02-11 at 5.10.17 PM.jpeg',
      link: '/convocatorias/index.html',
      alt: '',
      title: 'Convocatorias',
      description: 'Convocatorias recientes',
      openInNewTab: false
    },
    {
      image: '../../imagenes/475850167_1076620044267098_3884819740472580519_n.jpg',
      alt: '',
      title: '',
      description: ''
    },
    {
      image: '../../imagenes/WhatsApp Image 2024-11-15 at 12.41.44 PM.jpeg',
      downloadUrl: '/documentos/Derecho a licencia de paternidad.rar',
      downloadFileName: 'Derecho a licencia de paternidad.rar',
      alt: 'Licencia de paternidad',
      title: 'Licencia de paternidad',
      description: 'Descarga el documento de derecho a licencia'
    },
    {
      image: '../../imagenes/WhatsApp Image 2024-11-06 at 5.56.32 PM.jpeg',
      link: 'https://forms.office.com/r/pEHaLXDxgs',
      alt: 'Formulario Office',
      title: 'Formulario Office',
      description: 'Accede al formulario',
      openInNewTab: true
    },
    {
      image: '../../imagenes/WhatsApp Image 2024-06-05 at 5.04.38 PM.jpeg',
      alt: '',
      title: '',
      description: ''
    },
    {
      image: '../../imagenes/WhatsApp Image 2023-12-14 at 1.35.13 PM.jpeg',
      link: 'https://linktr.ee/TecnologicoNacionaldeMexico',
      alt: 'TecNM Linktree',
      title: 'TecNM Linktree',
      description: 'Explora los enlaces oficiales del TecNM',
      openInNewTab: true
    },
    {
      image: '../../imagenes/Egresados (2).png',
      link: 'https://hermosillo.tecnm.mx/EGRESADO%20LICENCIATURA%20Y%20POSGRADO.html',
      alt: 'Egresados',
      title: 'Egresados',
      description: 'Información para egresados',
      openInNewTab: true
    },
    {
      image: '../../imagenes/Empleadores 2.png',
      link: 'https://hermosillo.tecnm.mx/EMPLEADOR.html',
      alt: 'Empleadores',
      title: 'Empleadores',
      description: 'Información para empleadores',
      openInNewTab: true
    }
  ];


  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  moveSlide(direction: number) {
    this.currentSlide += direction;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.moveSlide(1);
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  getTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  onSlideClick(slide: CarouselSlide) {
    if (slide.downloadUrl) {
      this.downloadFile(slide.downloadUrl, slide.downloadFileName);
    } else if (slide.link) {
      this.navigateToLink(slide.link, slide.openInNewTab);
    }
  }

  downloadFile(url: string, fileName?: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'download';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  navigateToLink(url: string, openInNewTab?: boolean) {
    if (openInNewTab) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  }

  hasAction(slide: CarouselSlide): boolean {
    return !!(slide.link || slide.downloadUrl);
  }
}
