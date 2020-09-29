package com.desafio.bancoapi.service.impl;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.repository.ContaRepository;
import com.desafio.bancoapi.service.ContaService;
import com.desafio.bancoapi.util.VerificadorCPFUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class ContaServiceImpl implements ContaService {

    private static final String MENSAGEM_VALOR_MENOR_QUE_LIMITE = "Saldo insuficiente para abertura de nova conta.";
    private static final Double VALOR_LIMITE = 50.0;
    private static final String MENSAGEM_CPF_OBRIGATORIO = "É necessário informar um cpf para abertura de nova conta.";
    private static final String MENSAGEM_CPF_INVALIDO = "PF informado para criação de conta está inválido.";
    @Autowired
    ContaRepository repository;

    @Override
    public Conta cadastrar(Conta conta) throws Exception {
        regrasNegocioCadastrar(conta);
        gerarNumeroDeConta(conta);
        repository.cadastrar(conta);
        return conta;
    }

    @Override
    public void excluir(Conta conta) {
        repository.excluir(conta);
    }

    @Override
    public void alterar(Conta conta) {
        repository.alterar(conta);
    }

    public List<Conta> consultarTodos() {
        return repository.consultarTodas();
    }

    private void gerarNumeroDeConta(Conta conta) {
        Random aleatorio = new Random();
        int valor = aleatorio.nextInt();
        conta.setNumero(valor);
    }

    private void regrasNegocioCadastrar(Conta conta) throws Exception {
        lancarExcecaoCasoBalancoMenorQueLimite(conta);
        lancarExececaoCasoCPFVazio(conta);
        lancarExececaoCasaoCPFInvalido(conta);
    }

    private void lancarExececaoCasaoCPFInvalido(Conta conta) throws Exception {
        if (!VerificadorCPFUtil.cpfEstaValido(conta.getCpf())) {
            throw new Exception(MENSAGEM_CPF_INVALIDO);
        }
    }

    private void lancarExececaoCasoCPFVazio(Conta conta) throws Exception {
        if (conta.getCpf() == null || conta.getCpf().isEmpty()) {
            throw new Exception(MENSAGEM_CPF_OBRIGATORIO);
        }
    }

    private void lancarExcecaoCasoBalancoMenorQueLimite(Conta conta) throws Exception {
        if (conta.getSaldo() < VALOR_LIMITE) {
            throw new Exception(MENSAGEM_VALOR_MENOR_QUE_LIMITE);
        }
    }
}
