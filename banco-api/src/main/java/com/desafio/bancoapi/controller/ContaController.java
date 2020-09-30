package com.desafio.bancoapi.controller;

import com.desafio.bancoapi.model.Conta;
import com.desafio.bancoapi.service.ContaService;
import com.desafio.bancoapi.util.NegocioException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.desafio.bancoapi.config.Constants.URL_API;
import static com.desafio.bancoapi.config.Constants.URL_CONTA;
import static com.desafio.bancoapi.util.HeaderUtil.criarAlertaCadastradoComSucesso;
import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin("*")
@RestController
@RequestMapping(URL_API)
public class ContaController {

    @Autowired
    private ContaService service;

    @PostMapping(URL_CONTA)
    public ResponseEntity<Conta> cadastrar(@RequestBody Conta conta) throws NegocioException {
        service.cadastrar(conta);
        return ok().headers(criarAlertaCadastradoComSucesso()).body(conta);
    }
    @GetMapping(URL_CONTA)
    public List<Conta> listar() {
        return service.consultarTodos();
    }
}
