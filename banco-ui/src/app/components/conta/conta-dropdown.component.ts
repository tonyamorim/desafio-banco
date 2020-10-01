import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ContaService} from "../../entities/conta/conta.service";

@Component( {
    selector: "conta-dropdown",
    template: `
        <p-dropdown
            [options]="contas"
            (onChange)="onchange()"
            [(ngModel)]="conta"
            optionLabel="numero"
            [placeholder]="placeholder"
            dataKey="valor"
            [showClear]="true"
            [autoWidth]="autoWidth"
            [style]="style"
            (onClear)="onClear()"
            [required]="required"
            [disabled]="disabled">


        </p-dropdown>
    `,
    styleUrls: []
} )
export class ContaDropdownComponent implements OnInit {

    @Output() value: EventEmitter<any> = new EventEmitter<any>();

    @Input() conta: any;
    @Input() contaOrigem: any;
    @Input() autoWidth: boolean = true;
    @Input() disabled = false;
    @Input() placeholder = "SELECIONE UMA CONTA";
    @Input() showClear = true;
    @Input() style = {'width': '100%'};
    @Input() required = false;
    @Output() onclear: EventEmitter<any> =  new EventEmitter<any>();

    @Input() contas: any[] = [];

    constructor(
        private service: ContaService) {
    }

    ngOnInit() {
        this.service.listarTodos().subscribe(res => {
            this.contas = res;
            this.removerContaOrigemDoDestino();
        })

    };

    private removerContaOrigemDoDestino() {
        let index = -1;
        let indexParaRemover = -1;
        this.contas.forEach(value => {
            index += 1;
            if (value.numero == this.contaOrigem.numero) {
                indexParaRemover = index;
            }
        })
        this.contas.splice(indexParaRemover, 1);
    }

    onchange() {
        this.value.emit( this.conta );
    }

    onClear() {
        this.onclear.emit();
    }

}
