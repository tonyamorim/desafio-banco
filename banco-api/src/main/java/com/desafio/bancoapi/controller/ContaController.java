package com.desafio.bancoapi.controller;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.service.ContaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.desafio.bancoapi.util.Constants.URL_API;
import static com.desafio.bancoapi.util.Constants.URL_CONTA;
import static com.desafio.bancoapi.util.HeaderUtil.criarAlertaCadastradoComSucesso;
import static com.desafio.bancoapi.util.HeaderUtil.criarAlertaExclusaoComSucesso;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping(URL_API)
public class ContaController {

    @Autowired
    private ContaService service;

    @PostMapping(URL_CONTA)
    public ResponseEntity<Conta> cadastrar(@RequestBody Conta conta) throws Exception {
        service.cadastrar(conta);
        return ok().headers(criarAlertaCadastradoComSucesso()).body(conta);
    }

    @PutMapping(URL_CONTA)
    public ResponseEntity<Conta> alterar(@RequestBody Conta conta) throws Exception {
        service.alterar(conta);
        return ok().headers(criarAlertaCadastradoComSucesso()).body(conta);
    }

    @DeleteMapping(URL_CONTA)
    public ResponseEntity<Void> excluir(@RequestBody Conta conta) throws Exception {
        service.excluir(conta);
        return ok().headers(criarAlertaExclusaoComSucesso()).build();
    }

    @GetMapping(URL_CONTA)
    public List<Conta> listar() {
        return service.consultarTodos();
    }
}
