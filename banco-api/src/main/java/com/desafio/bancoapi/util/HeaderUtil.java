package com.desafio.bancoapi.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;

import static com.desafio.bancoapi.config.Constants.*;


public final class HeaderUtil {

    private static final Logger log = LoggerFactory.getLogger(HeaderUtil.class);

    private HeaderUtil() {
    }

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-sacApp-alert", message);
        headers.add("X-sacApp-params", param);
        return headers;
    }

    public static HttpHeaders criarAlertaCadastradoComSucesso() {
        return createAlert(CADASTRADO_COM_SUCESSO, "");
    }

    public static HttpHeaders criarAlertaAlteradoComSucesso() {
        return createAlert(ALTERADO_COM_SUCESSO, "");
    }

    public static HttpHeaders criarAlertaExclusaoComSucesso() {
        return createAlert(EXCLUSAO_COM_SUCESSO, "");
    }

    public static HttpHeaders criarAlertaDepositoComSucesso() {
        return createAlert(DEPOSITO_COM_SUCESSO, "");
    }

    public static HttpHeaders criarAlertaSaqueComSucesso() {
        return createAlert(SAQUE_COM_SUCESSO, "");
    }

    public static HttpHeaders criarAlertaTranferenciaComSucesso() {
        return createAlert(TRANFERENCIA_COM_SUCESSO, "");
    }

    public static HttpHeaders criarAviso(String mensagem) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-sacApp-aviso", mensagem);
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert("A " + entityName + " foi criada com sucesso.  ", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert("A " + entityName + " foi alterada com sucesso. ", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert("O " + entityName + " foi excluido com sucesso. ", param);
    }

    public static HttpHeaders createFailureAlert(String entityName, String defaultMessage) {
        log.error("Entity processing failed, {}", defaultMessage);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-sacApp-error", defaultMessage);
        headers.add("X-sacApp-params", entityName);
        return headers;
    }
}
