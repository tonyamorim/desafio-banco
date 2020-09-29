import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable()
export class FaturamentoPeriodoViewService {

    private resourceUrl = 'api/faturamento-periodo';

    constructor(private http: HttpClient) {
    }

    consultarPorParametros(parametroConsulta: any): Observable<EntityArrayResponseType> {
        return this.http.post<any[]>( `${environment.baseUrl}/${this.resourceUrl}/consultarPorAno`, parametroConsulta, {
            observe: 'response'
        } );
    }

    consultarGraficoPorParametros(parametroConsulta: any): Observable<any> {
        return this.http.post<any>(`${environment.baseUrl}/${this.resourceUrl}/consultarGraficoPorAno`, parametroConsulta);
    }
}
