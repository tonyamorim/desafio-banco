import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

type EntityArrayResponseType = HttpResponse<any[]>;


@Injectable()
export class ContaService{
      public resourceUrl = 'api/conta';
    constructor(public http: HttpClient) {
    }

    listarTodos(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.baseUrl}/${this.resourceUrl}`);
    }

    cadastrar(entidade: any): Observable<any> {
        return this.http.post<any>( `${environment.baseUrl}/${this.resourceUrl}`, entidade );
    }

    alterar(entidade: any): Observable<any> {
        return this.http.put<any>( `${environment.baseUrl}/${this.resourceUrl}`, entidade );
    }

    consultarPorId(id): Observable<any> {
        return this.http.get<any>( `${environment.baseUrl}/${this.resourceUrl}/${id}` );
    }

    excluir(id) {
        return this.http.delete<any>( `${environment.baseUrl}/${this.resourceUrl}/${id}`, {observe: 'response'} );
    }
}
