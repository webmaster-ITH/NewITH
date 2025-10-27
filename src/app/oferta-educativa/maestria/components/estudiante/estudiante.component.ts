import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes = [
    { "Nombre": "GALAZ LOPEZ LUZ MARINA", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "BADUQUI DE LOERA DIANA ELVIRA", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "RAFFTA ALCALA ALEJANDRO", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "ORTEGA FELIX JOB GERARDO", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "LOPEZ GONZALEZ MARIO ANWAR", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "OLAJE LOPEZ YUDILIA", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "ACOSTA BELTRAN MANUEL DE JESUS", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "MARTINEZ RIVERA JOSE FABIAN", "Cohorte": "2019", "estado": "TITULADO" }
    ,
    { "Nombre": "ALEMAN PAREDES JESUS MANUEL", "Cohorte": "2019", "estado": "Pendiente" }
    ,
    { "Nombre": "AVILES REYES ERIK KAREM", "Cohorte": "2019", "estado": "Baja" }
    ,
    { "Nombre": "DUARTE MENDEZ MANUEL ANTONIO", "Cohorte": "2019", "estado": "Pendiente" }
    ,
    { "Nombre": "DUARTE VILLA ADRIAN HUMBERTO", "Cohorte": "2019", "estado": "Baja" }
    ,
    { "Nombre": "ORIGEL RAYAS JORGE JESUS", "Cohorte": "2019", "estado": "Pendiente" }
    ,
    { "Nombre": "PEREZ ABRIL DAVID ALEJANDRO", "Cohorte": "2019", "estado": "Baja" }
    ,
    { "Nombre": "SANTILLANEZ TELLEZ JULIA", "Cohorte": "2019", "estado": "Baja" }
    ,
    { "Nombre": "TORRES RUBIANO JULIO CESAR", "Cohorte": "2019", "estado": "Pendiente" }
    ,
    { "Nombre": "VAZQUEZ BUSTAMANTE CARMEN GUADALUPE", "Cohorte": "2019", "estado": "Pendiente" }
    ,
    { "Nombre": "CONS VALENZUELA LILIANA", "Cohorte": "2020", "estado": "TITULADO" }
    ,
    { "Nombre": "GARCIA GIL LUIS FERNANDO", "Cohorte": "2020", "estado": "TITULADO" }
    ,
    { "Nombre": "VAZQUEZ VALENZUELA JUANA IVET", "Cohorte": "2020", "estado": "TITULADO" }
    ,
    { "Nombre": "BARCELO MOLINA ANA MARLENNE", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "ESTRADA CONTRERAS DULCE VALERIA", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "FELIX MORENO MAYTHE ALEJANDRA", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "FIERROS ARRIQUIVES JOSE ALBERTO", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "LERMA VALENZUELA NORA ALICIA", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "LEYVA SALCIDO SAIRA GUADALUPE", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "LUNA COSSIO MARISOL", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "RAMIREZ CONTRERAS AMANDA", "Cohorte": "2020", "estado": "Pendiente" }
    ,
    { "Nombre": "MIRANDA MUÑOZ MARIA GUADALUPE", "Cohorte": "2021", "estado": "TITULADO" }
    ,
    { "Nombre": "ORDUÑO RIVERA TERESA MARGARITA", "Cohorte": "2021", "estado": "TITULADO" }
    ,
    { "Nombre": "BERNAL CRUZ IXTLALI XOCHITL", "Cohorte": "2021", "estado": "Pendiente" }
    ,
    { "Nombre": "JIMENEZ DOMINGUEZ AIDE DOLORES CAROLINA", "Cohorte": "2021", "estado": "Pendiente" }
    ,
    { "Nombre": "RAMOS FELIX EUNICE", "Cohorte": "2021", "estado": "Pendiente" }
    ,
    { "Nombre": "ANDUAGA VERDUGO ROSARIO EUGENIO", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "CORRAL CASTRO JORGE ARMANDO", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "GAMEZ RIOS CRUZLEN", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "GARCIA ROBLES PATRICIA", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "JARA SALAZAR JESUS DANIEL", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "MENDOZA ESPINOZA AURELIA", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "TZEL HOIL AMILCAR ARMANDO", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "VALENZUELA NOLAZCO MAYTE GUADALUPE", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "VALERIO AYALA ZENON ALFONSO", "Cohorte": "2022", "estado": "Pendiente" }
    ,
    { "Nombre": "VILLAESCUSA CARRILLO FRANCISCO ANTONIO", "Cohorte": "2022", "estado": "Baja" }
    ,
    { "Nombre": "CANIZALEZ MARTINEZ JORGE ALEJANDRO", "Cohorte": "2023", "estado": "Pendiente" }
    ,
    { "Nombre": "CORDOVA BARRAZA MARIA FERNANDA", "Cohorte": "2023", "estado": "Pendiente" }
    ,
    { "Nombre": "CRUZ MENDOZA MILAGROS ESPERANZA", "Cohorte": "2023", "estado": "Pendiente" }
    ,
    { "Nombre": "GONZALEZ ORDUÑO DIANA DANITZA", "Cohorte": "2023", "estado": "Pendiente" }
    ,
    { "Nombre": "LOPEZ DIAZ DANIEL OCTAVIO", "Cohorte": "2023", "estado": "Pendiente" }
    ,
    { "Nombre": "MONTAÑO CARMONA MAYRA LIZETH", "Cohorte": "2023", "estado": "Pendiente" }
    ,
    { "Nombre": "RUIZ IBARRA JUAN PABLO", "Cohorte": "2023", "estado": "Baja" }
    ,
    { "Nombre": "TAPIA CARRILLO FABIOLA", "Cohorte": "2023", "estado": "Pendiente" }
    ,
    { "Nombre": "ALCANTAR MENDOZA ANA ROSA", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "CASILLAS CARRILLO ROBERTO CARLOS", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "ESPINOZA MILLAN JOSE TRINIDAD", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "GARCIA BERRELLEZA GILBERTO ALONSO", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "MENDIVIL SERRANO JESUS ALEXIS", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "MENDOZA GALLEGOS IDALIA MARITZA", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "MILLAN HURTADO GUADALUPE YURIDIA", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "ORTEGA ALVAREZ ISSIEL", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "SAVE CAMARENA JOSE ALBERTO", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "VALDEZ BALDERRAMA FIDEL ROBERTO", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "VALENZUELA NIEBLAS JESUS ALBERTO", "Cohorte": "2024", "estado": "Pendiente" }
    ,
    { "Nombre": "VEGA GASTELUM ROSARIO CARMINA", "Cohorte": "2024", "estado": "Pendiente" }
    // Continúa agregando el resto de los estudiantes...
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
