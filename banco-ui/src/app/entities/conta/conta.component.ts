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
        if (!this.conta) {
            this.inicializarConta();
        }
    }

    prepararParaAdicionarDeposito(conta) {
        this.conta = conta;
        this.deposito = new Deposito();
        this.deposito.conta = conta;
        this.displayDialogDeposito = true;
    }

    prepararParaAdicionarSaque(conta) {
        this.conta = conta;
        this.saque = new Saque();
        this.saque.conta = conta;
        this.displayDialogSaque = true;
    }

    prepararParaAdicionarTranferencia(conta) {
        this.conta = conta;
        this.tranferencia = new Tranferencia();
        this.tranferencia.contaOrigem = conta;
        this.displayDialogTranferencia = true;
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

    sacar() {
        this.subscribeSacarResponse( this.contaService.sacar( this.saque ) );
        this.fecharDialogSaque();
    }

    tranferir() {
        this.subscribeTranferirResponse( this.contaService.tranferir( this.tranferencia ) );
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
            this.inicializarConta();
            this.consultarTodos();
        } );
    }

    private inicializarConta() {
        this.conta = new Conta();
    }

    private subscribeDepositarResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.deposito = res;
            this.alertaService.exibirInformacao("Depósito realizado com sucesso!")
            this.inicializarConta();
            this.consultarTodos();
        } );
    }

    private subscribeSacarResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.saque = res;
            this.alertaService.exibirInformacao("Saque realizado com sucesso!")
            this.inicializarConta();
            this.consultarTodos();
        } );
    }

    private subscribeTranferirResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.tranferencia = res;
            this.alertaService.exibirInformacao("Tranferência realizado com sucesso!")
            this.inicializarConta();
            this.consultarTodos();
        } );
    }

    setContaDestino(conta) {
        this.tranferencia.contaDestino = conta;
    }

    removeContaDestino() {
        this.tranferencia.contaDestino = null
    }
}
