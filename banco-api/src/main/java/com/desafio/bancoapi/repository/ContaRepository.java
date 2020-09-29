package com.desafio.bancoapi.repository;

import com.desafio.bancoapi.model.Conta;

import java.util.List;

public interface ContaRepository {
    void cadastrar(Conta conta);
    void alterar(Conta conta);
    void excluir(Conta conta);
    List<Conta> consultarTodas();
}
