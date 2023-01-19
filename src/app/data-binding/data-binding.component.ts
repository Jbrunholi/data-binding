import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
[x: string]: any;

  url: string = 'http://jbrunholi.training';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/500/400/?1';

  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  getValor() {
    return 1
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {

  }

  ngOnInit() {
  }

}
