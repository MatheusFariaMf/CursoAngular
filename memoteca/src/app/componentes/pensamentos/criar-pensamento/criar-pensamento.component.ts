import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular teste',
    autoria: 'Dev',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo Pensamento Criado");
  }

  cancelarPensamento(){
    alert("Pensamento Cancelado");
  }

}
