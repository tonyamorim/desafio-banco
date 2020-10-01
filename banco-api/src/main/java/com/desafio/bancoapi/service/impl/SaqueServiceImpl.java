package com.desafio.bancoapi.service.impl;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.model.Saque;
import com.desafio.bancoapi.service.ContaService;
import com.desafio.bancoapi.service.SaqueService;
import com.desafio.bancoapi.util.NegocioException;
import com.desafio.bancoapi.util.VerificadorUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.desafio.bancoapi.config.Constants.MENSAGEM_ERRO_INCONSISTENCIA;
import static com.desafio.bancoapi.config.Constants.MENSAGEM_VALOR_MAIOR_QUE_LIMITE;
import static com.desafio.bancoapi.config.Constants.VALOR_LIMITE_TRANFERENCIA;

@Service
public class SaqueServiceImpl implements SaqueService {


    @Autowired
    private ContaService contaService;

    @Override
    public Saque cadastrar(Saque saque) {
        regrasNegocioCadastrar(saque);
        Conta conta = sacarValorDaConta(saque);
        contaService.alterar(conta);
        return saque;
    }

    private void regrasNegocioCadastrar(Saque saque) {
        lancarExcecaoCasoDadosInconsistente(saque);
        lancarExcecaoCasoSaqueMaiorQueLimite(saque);
    }

    private void lancarExcecaoCasoDadosInconsistente(Saque saque) {
        if (VerificadorUtil.estaNuloOuVazio(saque)){
            throw new NegocioException(MENSAGEM_ERRO_INCONSISTENCIA);
        }
    }

    private void lancarExcecaoCasoSaqueMaiorQueLimite(Saque saque) {
        if (saque.getValor() > VALOR_LIMITE_TRANFERENCIA) {
            throw new NegocioException(MENSAGEM_VALOR_MAIOR_QUE_LIMITE);
        }
    }

    private Conta sacarValorDaConta(Saque saque) {
        Conta conta = saque.getConta();
        conta.setSaldo(conta.getSaldo() - saque.getValor());
        return conta;
    }
}
