import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlertaService} from "../../shared/alert/alerta.service";
import {ContaService} from "./conta.service";
import {Conta} from "./conta.model";
import {Observable} from "rxjs";

@Component( {
    selector: 'app-conta',
    templateUrl: './conta.component.html'
} )
export class ContaComponent implements OnInit {

    codigo: string;
    contas: any[];
    error: any;
    success: any;
    conta: Conta;
    displayDialogConta: boolean;

    constructor(
        private contaService: ContaService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertaService,
    ) {
    }

    ngOnInit() {
        this.consultarTodos();
    }

    private consultarTodos() {
        this.contaService.listarTodos().subscribe(
            res => this.contas = res
        )
    }

    private onErro(mensagem: string) {
        this.alertaService.exibirErro( mensagem );
    }

    excluir(conta) {
        this.alertaService.exibirConfirmacao( "EXCLUIR CONTA", "Deseja realmente excluir?", "error" ).then( (resultado) => {
            if (resultado.value) {
                this.contaService.excluir( conta.codigo ).subscribe( (response) => {
                    this.consultarTodos();
                }, (error) => {
                    this.alertaService.exibirErro( error.json().message );
                } );
            }
        } );
    }

    private onError(error) {
        this.alertaService.exibirErroPorStatus( error.status );
    }


    prepararParaAdicionarConta() {
        this.displayDialogConta = true;
        this.conta = new Conta();
    }

    adicionaConta() {
        if (this.novaConta()) {
            this.criarListaDeContasCasoEstajaVazia();
            this.adicionaContaNaLista();
        }
        this.fecharDialogConta();

    }

    fecharDialogConta() {
        this.displayDialogConta = false;
    }


    private novaConta() {
        return (!this.conta.numero);
    }

    private criarListaDeContasCasoEstajaVazia() {
        if (this.contas == null) {
            this.contas = [];
        }
    }

    private adicionaContaNaLista() {
        this.subscribeToSaveResponse( this.contaService.cadastrar( this.conta ) );

    }

    private subscribeToSaveResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.conta = res;
            this.consultarTodos();
        } );
    }
}
