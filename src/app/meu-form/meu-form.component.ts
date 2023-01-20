import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent {

  nome: string = 'Jonathan';

  pessoa: any = {
    nome: 'Giovanna',
    idade: 30
  }

}
