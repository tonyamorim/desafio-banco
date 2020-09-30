package com.desafio.bancoapi.service.impl;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.model.Deposito;
import com.desafio.bancoapi.service.ContaService;
import com.desafio.bancoapi.service.DepositoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepositoServiceImpl implements DepositoService {

    @Autowired
    private ContaService contaService;

    @Override
    public Deposito cadastrar(Deposito deposito) {
        Conta conta = atualizarSaldoDaConta(deposito);
        contaService.alterar(conta);
        return deposito;
    }

    private Conta atualizarSaldoDaConta(Deposito deposito) {
        Conta conta = deposito.getConta();
        conta.setSaldo(conta.getSaldo() + deposito.getValor());
        return conta;
    }
}
