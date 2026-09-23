import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Servicio } from '../servicio';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
})
export class GaleriaComponent  implements OnInit {
  public tituloSeccion: string = 'Galería de imágenes Dinámica';
  public descripcion: string = 'Esta imagen se carga desde el directorio de assets mediante Property Binding';
  public rutaImagenLocal: string = 'assets/foto1.jpg';

  users:Usuario[] = [];
  constructor(private usersService:Servicio) { }

  async ngOnInit() {
   this.users= await this.usersService.getUsuarios(); //await se usa para que te vaya dando los usuarios cuando los tenga, si no se usa, la pagina se puede bloquear hasta que cargue el metodo
  }

}
