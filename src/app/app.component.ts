import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAagular';
  duplicarNumero(x:number):number{
    return x*2;
  }

  alumno={
    matricula:21000521,
    nombre:'Aguiñon',
    fechaInscrito: new Date(),
    Pago: 2220,
  };
}
