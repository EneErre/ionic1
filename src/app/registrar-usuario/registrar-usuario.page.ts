import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  constructor(private alertController: AlertController, private router: Router) {   
    
  }

  

  
  
  
  public alertButtons = ['OK'];

  ngOnInit() {
  }

  user = {
    rut: "",
    nombre:"",
    apellido:"",    
    password: ""
  }


  limpiarInputs(formulario: any){
    formulario.reset();
  }

    

  registrarUsuario(){
    let data = JSON.parse(localStorage.getItem("usersStorage")!) || [];
    console.log(data);
     
    const index = data.findIndex((item: { rut: string; })=> item.rut == this.user.rut);
    
    console.log(index);
    if (index == -1){
      data.push(this.user);
      localStorage.setItem("usersStorage", JSON.stringify(data));
      this.router.navigate(['/login'])
    }else{
      console.log("Usuario registrado"); 
      this.presentAlert();
    }
  };    

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Usuario registrado',
      message: 'El rut de este usuario ya ha sido registrado',
      buttons: ['Cerrar'],
    });
    await alert.present();
  };

}
