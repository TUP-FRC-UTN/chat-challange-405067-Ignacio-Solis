import { Component, Input } from '@angular/core';
import { MensajeComponent } from "../mensaje/mensaje.component";
import { Mensaje } from '../../models/Mensaje';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  primerNombre : string = "Pepe"
  segundoNombre : string = "María"
  mostrarConversacion : boolean = false;
  mensajeRecibido : Mensaje = {
    usuario: "placeholder",
    contenido: "placeholder"
  }

  mensajes : Mensaje[] = []

  onMensajeEmitido(mensaje: Mensaje) {
    this.mostrarConversacion = true;
    this.mensajes.push(mensaje)
  }
}
