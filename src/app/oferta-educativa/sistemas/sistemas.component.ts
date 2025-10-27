import { Component, OnInit } from '@angular/core';

interface Persona {
  name: string;
  email?: string;
  puesto: string;
  telefono?: string;
  ext?: string;
  facebook?: string;
  instagram?: string;
  img?: string;
}

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})
export class SistemasComponent implements OnInit {

  data: Persona[] = [
    { name: "Claudia Sofía García Segura", email: "sistemas@hermosillo.tecnm.mx", puesto: "Jefa del Departamento de Sistemas y Computación", telefono: "6622606100", ext: "195" },
    { name: "Matilde Salazar Campoy", email: "matilde.salazarc@hermosillo.tecnm.mx", puesto: "Secretaria del departamento", telefono: "6622606100", ext: "135" },
    { name: "Gloria Guadalupe Federico Díaz", email: "coordinacion.sistemas@hermosillo.tecnm.mx", puesto: "Coordinador de la carrera de Sistemas y Computación", telefono: "(662) 260.6500", ext: "181", facebook: "coord sistemas ith" },
    { name: "Gloria Guadalupe Federico Díaz", email: "coordinacion.informatica@hermosillo.tecnm.mx", puesto: "Coordinador de la carrera Ingeniería Informática", telefono: "(662) 260.6500", ext: "181", facebook: "coord sistemas ith" },
    { name: "María Teresa Chew Lee", email: "maria.chewl@hermosillo.tecnm.mx", puesto: "Jefe de Laboratorio de Sistemas y Computación", telefono: "2606500", ext: "173" },
    { name: "María del Rosío Ramírez Adame", email: "residencias.infsis@hermosillo.tecnm.mx", puesto: "Coordinadora de Residencias Profesionales", facebook: "Residencias Sisinf" },
    { name: "Alfonso Cisneros Campoy", email: "ccomplementarios.sistemas@hermosillo.tecnm.mx", puesto: "Coordinador de Créditos Complementarios" },
    { name: "María Yolanda Huerta Castillo", email: "academia.sistemas@hermosillo.tecnm.mx", puesto: "Presidenta de academia" },
    { name: "María Teresa Chew Lee", email: "maria.chewl@hermosillo.tecnm.mx", puesto: "Secretaria de academia", telefono: "2606500", ext: "173" },

    // profes list
    { name: "Carlos Alfredo Arce Romo", email: "carlos.arcer@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Jesús Emilio Barajas Mariscal", email: "jesus.barajasm@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Alfonso Cisneros Campos", email: "alfonso.cisnerosc@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "María Teresa Chew Lee", email: "maria.chewl@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Rita Contreras Girón", email: "rita.contrerasg@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Julio César Flores López", email: "julio.floresl@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Claudia Sofía García Segura", email: "claudia.garcias@hermosillo.tecnm.mx", puesto: "Profesora" },
    { name: "Eduardo Gasca Figueroa", email: "eduardo.gascaf@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Jorge David Gutiérrez Cota", email: "jorge.gutierrezc@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "María Yolanda Huerta Castillo", email: "maria.huertac@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Francisco Gabriel Ibarra Lemas", email: "francisco.ibarral@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Eduardo Antonio Hinojosa Palafox", email: "eduardo.hinojosap@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Luis Carlos López Cruz", email: "luis.lopezc@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "José Madrid Martínez", email: "jose.madridm@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Alfonso Mendoza Robles", email: "alfonso.mendozar@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Ana Luisa Millán Castro", email: "ana.millanc@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Isidra Guadalupe Moctezuma Enríquez", email: "isidra.moztezumae@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Elmer Moreno Ruíz", email: "elmer.morenor@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Carlos Nava Avilés", email: "carlos.navaa@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Jesús Francisco Núñez Tánori", email: "jesus.nunezt@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Raymur Nuztas Alcantar", email: "raymur.nuztasa@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "María Del Rosío Ramírez Adame", email: "maria.ramireza@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Oscar Mario Rodríguez Elías", email: "oscar.rodrigueze@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Bettina Elisa Santa Cruz Welsh", email: "bettina.santac@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Margarita Sánchez Ozuna", email: "margarita.sanchezo@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Javier Sánchez Valles", email: "javier.sanchezv@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "María Trinidad Serna Encinas", email: "maria.sernae@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Patricia Sevilla Zazueta", email: "martha.sevillaz@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "Ana Alicia Valenzuela Huerta", email: "ana.valenzuelah@hermosillo.tecnm.mx", puesto: "Profesor" },
    { name: "María Jesús Velázquez Mendoza", email: "maria.velazquezm@hermosillo.tecnm.mx", puesto: "Profesor" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Función para generar iniciales a partir del nombre
  getInitials(name: string): string {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
  }

  // Función para enviar correo
  sendEmail(email?: string): void {
    if (email) {
      window.location.href = `mailto:${email}`;
    } else {
      alert('No hay email disponible.');
    }
  }

  // Función para copiar contacto
  copyContact(person: Persona, event: Event): void {
    const btn = event.target as HTMLButtonElement;
    const txt = `${person.name || ''}\n${person.puesto || ''}\nEmail: ${person.email || ''}\nTel: ${person.telefono || ''} ${person.ext ? 'ext. ' + person.ext : ''}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(txt).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copiado ✓';
        setTimeout(() => btn.textContent = originalText, 1200);
      }, () => alert('No fue posible copiar.'));
    } else {
      alert('No fue posible copiar.');
    }
  }
}