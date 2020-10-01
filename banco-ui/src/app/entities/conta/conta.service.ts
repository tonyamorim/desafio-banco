import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

type EntityArrayResponseType = HttpResponse<any[]>;


@Injectable()
export class ContaService {
    public url = 'api/conta';
    public urlDeposito = 'api/deposito';
    public urlSaque = 'api/saque';
    public urlTranferencia = 'api/tranferencia';

    constructor(public http: HttpClient) {
    }

    listarTodos(): Observable<any[]> {
        return this.http.get<any[]>( `${environment.baseUrl}/${this.url}` );
    }

    cadastrar(entidade: any): Observable<any> {
        return this.http.post<any>( `${environment.baseUrl}/${this.url}`, entidade );
    }

    alterar(entidade: any): Observable<any> {
        return this.http.put<any>( `${environment.baseUrl}/${this.url}`, entidade );
    }

    consultarPorId(id): Observable<any> {
        return this.http.get<any>( `${environment.baseUrl}/${this.url}/${id}` );
    }

    excluir(id) {
        return this.http.delete<any>( `${environment.baseUrl}/${this.url}/${id}`, {observe: 'response'} );
    }

    depositar(deposito: any) {
        return this.http.post<any>( `${environment.baseUrl}/${this.urlDeposito}`, deposito );
    }

    sacar(saque: any) {
        return this.http.post<any>( `${environment.baseUrl}/${this.urlSaque}`, saque );
    }

    tranferir(tranferencia: any) {
        return this.http.post<any>( `${environment.baseUrl}/${this.urlTranferencia}`, tranferencia );
    }
}
