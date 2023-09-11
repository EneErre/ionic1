import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {

  
  constructor(private router: Router, private route: ActivatedRoute) {
    this.obtenerEstudiante(this.rut!);
    this.obtenerClase();
    
    
  }
  fecha = new Date()
 
  
  
  horaRegistro = `${this.fecha.getHours()}:${this.fecha.getMinutes()}`;


  ngOnInit() {
  }

  rut = this.route.snapshot.paramMap.get('usuario');

  user = {
    rut: "",
    nombre:"",
    apellido:""
  }


  clase = {
      nombreProfesor: "",
      sala: "",
      hora: "",
      dia: ""
  };

  obtenerEstudiante(rut: string){
    let datos = JSON.parse(localStorage.getItem('usersStorage')!);
    const index = datos.findIndex((item: { rut: string; })=> item.rut == rut);
    

    if (index >= 0){
    this.user = {
        rut: datos[index].rut,
        nombre: datos[index].nombre,
        apellido: datos[index].apellido
      }
    }
    
    
  }

  obtenerClase(){
    let datos = JSON.parse(localStorage.getItem('claseStorage')!);
    this.clase = {
      nombreProfesor: datos.nombreProfesor,
      sala: datos.sala,
      hora: datos.hora,
      dia: datos.dia
        
        
      }
    }
    
    
}

