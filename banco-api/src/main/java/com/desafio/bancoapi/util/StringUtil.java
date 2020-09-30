package com.desafio.bancoapi.util;

import java.text.Normalizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtil {
    public StringUtil() {
    }

    public static String setarUpperCase(String campo) {
        return VerificadorUtil.naoEstaNulo(campo) ? campo.toUpperCase() : campo;
    }

    public static String setarValorAhEsquerdaAteCompletarAhQuantidadeDeCaracteres(String string, String valor, Integer quantidadeCaracteres) {
        StringBuilder retorno = new StringBuilder();

        while(retorno.length() + string.length() < quantidadeCaracteres) {
            retorno.append(valor);
        }

        retorno.append(string);
        return retorno.toString();
    }

    public static String formatarCpf(String cpfSemFormatacao) {
        String cpfComFormatacao = null;
        Pattern pattern = Pattern.compile("(\\d{3})(\\d{3})(\\d{3})(\\d{2})");
        Matcher matcher = pattern.matcher(cpfSemFormatacao);
        if (matcher.matches()) {
            cpfComFormatacao = matcher.replaceAll("$1.$2.$3-$4");
        }

        return cpfComFormatacao;
    }

    public static String formatarCnpj(String cnpjSemFormatacao) {
        String cpfComFormatacao = null;
        Pattern pattern = Pattern.compile("(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})");
        Matcher matcher = pattern.matcher(cnpjSemFormatacao);
        if (matcher.matches()) {
            cpfComFormatacao = matcher.replaceAll("$1.$2.$3./$4-$5");
        }

        return cpfComFormatacao;
    }

    public static String removerAcentos(String str) {
        str = Normalizer.normalize(str, Normalizer.Form.NFD);
        str = str.replaceAll("[^\\p{ASCII}]", "");
        return str;
    }

    public static String somenteNumero(String valor) {
        return VerificadorUtil.estaNuloOuVazio(valor) ? null : valor.replaceAll("[^0-9]+", "");
    }
}
