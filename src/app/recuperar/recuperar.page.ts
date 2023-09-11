import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  public txtMessage = "";
  rut = "";
  password = "";

  limpiarInputs(formulario: any){
    formulario.reset();
  }

  cambiarPassword(){
    let data = JSON.parse(localStorage.getItem("usersStorage")!) || [];
    console.log(data);
     
    const index = data.findIndex((item: { rut: string; })=> item.rut == this.rut);
    
    console.log(index);
    if (index == -1){
      this.txtMessage = "El rut ingresado no ha sido encontrado"
      this.alertError()
    }else{
      if (data[index].password == this.password){
        this.txtMessage = "La contraseña ingresada ya esta siendo utilizada por el usuario"
        this.alertError()
      }else{
        data[index].password = this.password;
        localStorage.setItem("usersStorage",JSON.stringify(data));
        this.router.navigate(['/login'])
      }
    }
  }; 
  
  async alertError() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: this.txtMessage,
      buttons: ['Cerrar'],
    });
    await alert.present();
  };
}
