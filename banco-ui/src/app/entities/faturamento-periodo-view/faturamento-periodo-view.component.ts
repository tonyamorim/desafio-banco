import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FaturamentoPeriodoViewService} from "./faturamento-periodo-view.service";
import {HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'app-faturamento-periodo',
    templateUrl: './faturamento-periodo-view.component.html'
} )
export class FaturamentoPeriodoViewComponent implements OnInit {
    faCoffee = faCoffee;
    data: any;
    options: any;
    ano: number;
    @Output() valorUltimoFaturamento: EventEmitter<number> = new EventEmitter();
    @Output() valorMaiorFaturamento: EventEmitter<number> = new EventEmitter();
    @Output() valorMenorFaturamento: EventEmitter<number> = new EventEmitter();

    constructor(private servico: FaturamentoPeriodoViewService) {
    }

    ngOnInit() {
        this.ano = (new Date()).getFullYear();
        this.gerarGraficoBar();
    }

    public gerarGraficoBar() {
        let parametro: any = {"filtro": this.ano};
        this.tratarRetornoIhLancamentoMensagem(
            this.servico.consultarGraficoPorParametros( parametro )
        );
        this.options = {
            title: {
                display: true,
                text: 'FATURAMENTO ' + this.ano,
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };

    }

    private onSucesso(res: HttpResponse<any>) {
        this.data = res.body;
    }

    private tratarRetornoIhLancamentoMensagem(observable: Observable<any>) {
        observable.subscribe( (response: any) => {
            this.data = response;
            this.getValorUltimoFaturamento();
            this.getValorMaiorFaturamento();
            this.getValorMenorFaturamento();
        } )
    }

    public getValorUltimoFaturamento() {
        if (!this.data || !this.data.datasets) {
            return;
        }
        //let sets: any[] = this.data.datasets;
        let set: any = this.data.datasets[0];
        //sets.forEach( set => {
            set.data.forEach( valor => {
                if (valor > 0) {
                    this.valorUltimoFaturamento.emit(valor);
                }
            } )
        //} );
    }

    public getValorMaiorFaturamento() {
        if (!this.data || !this.data.datasets) {
            return;
        }
        //let sets: any[] = this.data.datasets;
        let set: any = this.data.datasets[0];
        let maior: number = 0;
        //sets.forEach( set => {
            set.data.forEach( valor => {
                if (valor > maior) {
                    maior = valor;
                }
            } )
        //} );
        this.valorMaiorFaturamento.emit(maior);
    }

    public getValorMenorFaturamento() {
        if (!this.data || !this.data.datasets) {
            return;
        }
        //let sets: any[] = this.data.datasets;
        let set: any = this.data.datasets[0];
        let menor: number = 999999999.99;
        //sets.forEach( set => {
            set.data.forEach( valor => {
                if (valor < menor && valor > 0) {
                    menor = valor;
                }
            } )
        //} );
        this.valorMenorFaturamento.emit(menor);
    }

}
