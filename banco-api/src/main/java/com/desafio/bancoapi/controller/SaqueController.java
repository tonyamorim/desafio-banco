package com.desafio.bancoapi.controller;

import com.desafio.bancoapi.model.Saque;
import com.desafio.bancoapi.service.SaqueService;
import com.desafio.bancoapi.util.NegocioException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.desafio.bancoapi.config.Constants.URL_API;
import static com.desafio.bancoapi.config.Constants.URL_SAQUE;
import static com.desafio.bancoapi.util.HeaderUtil.criarAlertaSaqueComSucesso;
import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin("*")
@RestController
@RequestMapping(URL_API)
public class SaqueController {

    @Autowired
    private SaqueService service;

    @PostMapping(URL_SAQUE)
    public ResponseEntity<Saque> cadastrar(@RequestBody Saque saque) throws NegocioException {
        service.cadastrar(saque);
        return ok().headers(criarAlertaSaqueComSucesso()).body(saque);
    }

}
