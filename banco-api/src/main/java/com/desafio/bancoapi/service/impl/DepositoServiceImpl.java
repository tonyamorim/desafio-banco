package com.desafio.bancoapi.service.impl;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.model.Deposito;
import com.desafio.bancoapi.service.ContaService;
import com.desafio.bancoapi.service.DepositoService;
import com.desafio.bancoapi.util.NegocioException;
import com.desafio.bancoapi.util.VerificadorUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.desafio.bancoapi.config.Constants.MENSAGEM_ERRO_INCONSISTENCIA;

@Service
public class DepositoServiceImpl implements DepositoService {

    @Autowired
    private ContaService contaService;

    @Override
    public Deposito cadastrar(Deposito deposito) {
        regrasNegocioCadastrar(deposito);
        Conta conta = depositarValorNaConta(deposito);
        contaService.alterar(conta);
        return deposito;
    }

    private void regrasNegocioCadastrar(Deposito deposito) {
        lancarExcecaoCasoDadosInconsistente(deposito);
    }

    private void lancarExcecaoCasoDadosInconsistente(Deposito deposito) {
        if (VerificadorUtil.estaNuloOuVazio(deposito)){
            throw new NegocioException(MENSAGEM_ERRO_INCONSISTENCIA);
        }
    }

    private Conta depositarValorNaConta(Deposito deposito) {
        Conta conta = deposito.getConta();
        conta.setSaldo(conta.getSaldo() + deposito.getValor());
        return conta;
    }
}
