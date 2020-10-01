package com.desafio.bancoapi.service.impl;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.model.Deposito;
import com.desafio.bancoapi.model.Saque;
import com.desafio.bancoapi.model.Tranferencia;
import com.desafio.bancoapi.service.DepositoService;
import com.desafio.bancoapi.service.SaqueService;
import com.desafio.bancoapi.service.TranferenciaService;
import com.desafio.bancoapi.util.NegocioException;
import com.desafio.bancoapi.util.VerificadorUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.desafio.bancoapi.config.Constants.*;

@Service
public class TranferenciaServiceImpl implements TranferenciaService {

    @Autowired
    DepositoService depositoService;

    @Autowired
    SaqueService saqueService;

    @Override
    public Tranferencia cadastrar(Tranferencia tranferencia) {
        regrasNegocioCadastrar(tranferencia);

        Conta contaOrigem = tranferencia.getContaOrigem();
        Conta contaDestino = tranferencia.getContaDestino();

        sacar(tranferencia, contaOrigem);
        depositar(tranferencia, contaDestino);

        return tranferencia;
    }

    private void regrasNegocioCadastrar(Tranferencia tranferencia) {
        lancarExcecaoCasoDadosInconsistente(tranferencia);
        lancarExcecaoCasoSaqueMaiorQueLimite(tranferencia);
        lancarExcecaoCasoSaqueMaiorQueSaldoDaContaOrigem(tranferencia);
    }

    private void lancarExcecaoCasoSaqueMaiorQueSaldoDaContaOrigem(Tranferencia tranferencia) {
        if (tranferencia.getValor() > tranferencia.getContaOrigem().getSaldo()) {
            throw new NegocioException(MENSAGEM_SALDO_INSUFICIENTE);
        }
    }

    private void lancarExcecaoCasoDadosInconsistente(Tranferencia tranferencia) {
        if (VerificadorUtil.estaNuloOuVazio(tranferencia)) {
            throw new NegocioException(MENSAGEM_ERRO_INCONSISTENCIA);
        }
    }

    private void lancarExcecaoCasoSaqueMaiorQueLimite(Tranferencia tranferencia) {
        if (tranferencia.getValor() > VALOR_LIMITE_TRANFERENCIA) {
            throw new NegocioException(MENSAGEM_VALOR_MAIOR_QUE_LIMITE);
        }
    }

    private void depositar(Tranferencia tranferencia, Conta contaDestino) {
        Deposito deposito = new Deposito();
        deposito.setConta(contaDestino);
        deposito.setValor(tranferencia.getValor());
        depositoService.cadastrar(deposito);
    }

    private void sacar(Tranferencia tranferencia, Conta contaOrigem) {
        Saque saque = new Saque();
        saque.setConta(contaOrigem);
        saque.setValor(tranferencia.getValor());
        saqueService.cadastrar(saque);
    }
}
