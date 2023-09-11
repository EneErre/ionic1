import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private alertController: AlertController) {   
    if (localStorage.getItem('usersStorage')!){
      console.log("Storage encontrado"); 
    }
    else{
      console.log("Storage no encontrado");
      
    }
  }

  ngOnInit() {
  }

  
  rut = "";
  password = "";

  iniciarSesion(){
      console.log("pene");
  
      
      let data = JSON.parse(localStorage.getItem("usersStorage")!) || [];
      console.log(data); 
       
      const index = data.findIndex((item: { rut: string, password: string; })=> item.rut == this.rut && item.password == this.password); 
      
      console.log(index);
       if (index == -1){
        console.log("Usuario no encontrado");
        this.presentAlert();
      }else{
        console.log("Usuario registrado"); 
        let datosUsuario = data[index];
        console.log(datosUsuario);
        this.router.navigate(['/lectorqr', {usuario: datosUsuario.rut}])
      } 
  }
  
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Usuario no encontrado',
      message: 'Credenciales ingresadas no coinciden, revise',
      buttons: ['Cerrar'],
    });
    await alert.present();
  }; 

}
