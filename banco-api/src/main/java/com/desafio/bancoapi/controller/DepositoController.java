package com.desafio.bancoapi.controller;

import com.desafio.bancoapi.model.Deposito;
import com.desafio.bancoapi.service.DepositoService;
import com.desafio.bancoapi.util.NegocioException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.desafio.bancoapi.config.Constants.URL_API;
import static com.desafio.bancoapi.config.Constants.URL_DEPOSITO;
import static com.desafio.bancoapi.util.HeaderUtil.criarAlertaDepositoComSucesso;
import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin("*")
@RestController
@RequestMapping(URL_API)
public class DepositoController {

    @Autowired
    private DepositoService service;

    @PostMapping(URL_DEPOSITO)
    public ResponseEntity<Deposito> cadastrar(@RequestBody Deposito deposito) throws NegocioException {
        service.cadastrar(deposito);
        return ok().headers(criarAlertaDepositoComSucesso()).body(deposito);
    }

}
