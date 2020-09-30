package com.desafio.bancoapi.controller;

import com.desafio.bancoapi.model.Tranferencia;
import com.desafio.bancoapi.service.TranferenciaService;
import com.desafio.bancoapi.util.NegocioException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.desafio.bancoapi.config.Constants.URL_API;
import static com.desafio.bancoapi.config.Constants.URL_TRANFERENCIA;
import static com.desafio.bancoapi.util.HeaderUtil.criarAlertaTranferenciaComSucesso;
import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin("*")
@RestController
@RequestMapping(URL_API)
public class TranferenciaController {

    @Autowired
    private TranferenciaService service;

    @PostMapping(URL_TRANFERENCIA)
    public ResponseEntity<Tranferencia> cadastrar(@RequestBody Tranferencia tranferencia) throws NegocioException {
        service.cadastrar(tranferencia);
        return ok().headers(criarAlertaTranferenciaComSucesso()).body(tranferencia);
    }

}
