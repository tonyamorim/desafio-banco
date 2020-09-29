import {Component, OnInit, Output} from '@angular/core';

@Component( {
    templateUrl: './dashboard.component.html'
} )
export class DashboardComponent implements OnInit {

    valorUltimoFaturamento: number;
    valorMaiorFaturamento: number;
    valorMenorFaturamento: number;
    constructor() {
    }

    ngOnInit() {

    }

    onChangevalorUltimoFaturamento(valor) {
        this.valorUltimoFaturamento = valor;
    }

    onChangevalorMaiorFaturamento(valor) {
        this.valorMaiorFaturamento = valor;
    }

    onChangevalorMenorFaturamento(valor) {
        this.valorMenorFaturamento = valor;
    }
}
