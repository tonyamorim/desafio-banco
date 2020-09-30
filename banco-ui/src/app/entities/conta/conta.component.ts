import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlertaService} from "../../shared/alert/alerta.service";
import {ContaService} from "./conta.service";
import {Conta, Deposito, Saque, Tranferencia} from "./conta.model";
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
    deposito: Deposito;
    saque: Saque;
    tranferencia: Tranferencia;
    displayDialogConta: boolean;
    displayDialogDeposito: boolean;
    displayDialogSaque: boolean;
    displayDialogTranferencia: boolean;

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

    prepararParaAdicionarDeposito(conta) {
        this.conta = conta;
        this.displayDialogDeposito = true;
        this.deposito = new Deposito();
        this.deposito.conta = conta;
    }

    prepararParaAdicionarSaque(conta) {
        this.conta = conta;
        this.displayDialogSaque = true;
        this.saque = new Saque();
    }

    prepararParaAdicionarTranferencia(conta) {
        this.conta = conta;
        this.displayDialogTranferencia = true;
        this.tranferencia = new Tranferencia();
    }

    adicionaConta() {
        if (this.novaConta()) {
            this.criarListaDeContasCasoEstajaVazia();
            this.cadastrar();
        }
        this.fecharDialogConta();
    }

    depositar() {
        this.subscribeDepositarResponse( this.contaService.depositar( this.deposito ) );
        this.fecharDialogDeposito();
    }

    adicionaSaque() {
        this.fecharDialogSaque();
    }

    adicionaTranferencia() {
        this.fecharDialogTranferencia();
    }

    fecharDialogConta() {
        this.displayDialogConta = false;
    }

    fecharDialogDeposito() {
        this.displayDialogDeposito = false;
    }

    fecharDialogSaque() {
        this.displayDialogSaque = false;
    }

    fecharDialogTranferencia() {
        this.displayDialogTranferencia = false;
    }

    private novaConta() {
        return (!this.conta.numero);
    }

    private criarListaDeContasCasoEstajaVazia() {
        if (this.contas == null) {
            this.contas = [];
        }
    }

    private cadastrar() {
        this.subscribeSalvarResponse( this.contaService.cadastrar( this.conta ) );
    }

    private subscribeSalvarResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.conta = res;
            this.consultarTodos();
        } );
    }

    private subscribeDepositarResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.deposito = res;
            this.alertaService.exibirInformacao("Depósito realizado com sucesso!")
            this.consultarTodos();
        } );
    }
}
