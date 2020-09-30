package com.desafio.bancoapi.util;

import org.springframework.util.StringUtils;

import java.util.List;

public class VerificadorUtil {
    public VerificadorUtil() {
    }

    public static Object selecionarValorCondicional(Boolean condicao, Object valorSeVerdade, Object valorSeFalso) {
        return condicao ? valorSeVerdade : valorSeFalso;
    }

    public static boolean estaNulo(Object objeto) {
        return objeto == null;
    }

    public static boolean naoEstaNulo(Object objeto) {
        return objeto != null;
    }

    public static boolean estaVazio(Object valor) {
        return StringUtils.isEmpty(valor.toString());
    }

    public static boolean naoEstaNuloOuVazio(Object objeto) {
        Boolean isNaoEstaNuloOuVazio = objeto != null && !StringUtils.isEmpty(objeto.toString());
        if (!(objeto instanceof List)) {
            return isNaoEstaNuloOuVazio;
        } else {
            return isNaoEstaNuloOuVazio && !((List)objeto).isEmpty();
        }
    }

    public static boolean estaNuloOuVazio(Object valor) {
        return estaNulo(valor) || estaVazio(valor);
    }

    public static void verificarNulo(Object objeto, String mensagemErro) {
        if (objeto == null) {
            throw new RuntimeException(mensagemErro);
        }
    }

    public static boolean isListaNulaOuVazia(List<? extends Object> lista) {
        return estaNulo(lista) || isListaVazia(lista);
    }

    public static boolean isListaVazia(List<? extends Object> lista) {
        return lista.isEmpty();
    }

    public static boolean isListaComElementos(List<? extends Object> lista) {
        return !isListaVazia(lista);
    }
}

