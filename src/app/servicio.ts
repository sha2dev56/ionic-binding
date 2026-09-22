import { Service } from '@angular/core';
import { Usuario } from './usuario';

@Service()
export class Servicio {

    private users: Usuario[]= [
        {id:1, name: "Luis", email: "luis@gmail.com", active: true},
        {id:2, name: "Maria", email: "maria@gmail.com", active: false},
        {id:3, name: "Pablo", email: "pablo@gmail.com", active: true},

    ];
async getUsuarios(): Promise<Usuario[]>{//promise va dando los usuarios uno detras de otro

    return new Promise(resolve=>{setTimeout(()=>{resolve(this.users);},1000);});

} 

}
