package com.desafio.bancoapi.repository.impl;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.repository.ContaRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ContaRepositoryImpl implements ContaRepository {
    private List<Conta> contas = new ArrayList<>();
    @Override
    public void cadastrar(Conta conta) {
        contas.add(conta);
    }

    @Override
    public void alterar(Conta conta) {
        excluir(conta);
        cadastrar(conta);
    }

    @Override
    public void excluir(Conta conta) {
        contas.remove(conta);
    }

    @Override
    public List<Conta> consultarTodas() {
        return contas;
    }
}
