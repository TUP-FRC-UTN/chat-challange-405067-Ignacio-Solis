import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { Mensaje } from '../../models/Mensaje';
@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {
  @Input() nombreUsuario : string = ""
  @Output() mensajeEmitter = new EventEmitter<Mensaje>();

  mensaje : string = "";

  enviarMensaje() {
    this.mensajeEmitter.emit({
      usuario: this.nombreUsuario,
      contenido: this.mensaje
    });
  }
}
