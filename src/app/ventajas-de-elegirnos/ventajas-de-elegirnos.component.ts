import { Component } from '@angular/core';

@Component({
  selector: 'app-ventajas-de-elegirnos',
  templateUrl: './ventajas-de-elegirnos.component.html',
  styleUrls: ['./ventajas-de-elegirnos.component.css']
})
export class VentajasDeElegirnosComponent {
  cardVentajas = [
    { title: 'Seguro', description: 'Durante el paseo tu mascota estará asegurada.' },
    { title: 'Cobertura', description: 'Tenemos mas de 20,000 aliados en Ecuador.' },
    { title: 'Control', description: 'Podrás ver la ruta del paseo y notificaciones.' },
    { title: 'Velocidad', description: '5 minutos en recibir la confirmación de un servicio.' },

    // Add more card data objects as needed
  ];

}
