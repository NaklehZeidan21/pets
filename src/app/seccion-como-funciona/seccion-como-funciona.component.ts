import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-como-funciona',
  templateUrl: './seccion-como-funciona.component.html',
  styleUrls: ['./seccion-como-funciona.component.css']
})
export class SeccionComoFuncionaComponent {
  cardsComoFunciona = [
    { text: 'Crea Una Cuenta', opacity: '0.67', pasos:  '1' },
    { text: 'Solicita Un Paseo', opacity: '0.67', pasos:  "2" },
    { text: 'Tu Mascota Contenta',  opacity: '0.67', pasos: "3" }
  ];
}
