package com.desafio.bancoapi.service;

import com.desafio.bancoapi.model.Conta;

import java.util.List;

public interface ContaService {
    Conta cadastrar(Conta conta) throws Exception;
    void alterar(Conta conta);
    void excluir(Conta conta);
    List<Conta> consultarTodos();
}
