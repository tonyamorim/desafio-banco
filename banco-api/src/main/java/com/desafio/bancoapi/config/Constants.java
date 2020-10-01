package com.desafio.bancoapi.config;

public final class Constants {

    public static final String URL_API = "/api";
    public static final String URL_CONTA = "/conta";
    public static final String URL_DEPOSITO = "/deposito";
    public static final String URL_SAQUE = "/saque";
    public static final String URL_TRANFERENCIA = "/tranferencia";

    public static final String CADASTRADO_COM_SUCESSO = "Cadastro realizado com sucesso.";
    public static final String ALTERADO_COM_SUCESSO = "Alteração realizada com sucesso.";
    public static final String EXCLUSAO_COM_SUCESSO = "Exclusão realizada com sucesso.";

    public static final String DEPOSITO_COM_SUCESSO = "Depósito realizado com sucesso!";
    public static final String SAQUE_COM_SUCESSO = "Saque realizado com sucesso!";
    public static final String TRANFERENCIA_COM_SUCESSO = "Tranferência realizada com sucesso!";
    public static final String MENSAGEM_VALOR_MENOR_QUE_LIMITE = "Saldo insuficiente para abertura de nova conta.";
    public static final Double VALOR_LIMITE_ABERTURA = 50.0;
    public static final String MENSAGEM_CPF_OBRIGATORIO = "É necessário informar um cpf para abertura de nova conta.";
    public static final String MENSAGEM_CPF_INVALIDO = "CPF informado para criação de conta está inválido.";
    public static final String MENSAGEM_VALOR_MAIOR_QUE_LIMITE = "Operação de transferência tem um limite máximo de 500 por operação.";
    public static final Double VALOR_LIMITE_TRANFERENCIA = 500.0;
    public static final String MENSAGEM_ERRO_INCONSISTENCIA = "Operação não pode ser concluída";
    public static final String MENSAGEM_SALDO_INSUFICIENTE = "Saldo insuficiente para a operação.";

}