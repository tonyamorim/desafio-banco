export class Conta {
    constructor(
        public cpf?: string,
        public nome?: string,
        public numero?: number,
        public saldo?: number,
    ) {
    }
}

export class Deposito {
    constructor(
        public conta?: Conta,
        public valor?: number,
    ) {
    }
}

export class Saque {
    constructor(
        public conta?: Conta,
        public valor?: number,
    ) {
    }
}

export class Tranferencia {
    constructor(
        public contaOrigem?: Conta,
        public contaDestino?: Conta,
        public valor?: number,
    ) {
    }
}
