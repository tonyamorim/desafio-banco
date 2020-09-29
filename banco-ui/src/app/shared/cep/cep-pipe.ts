import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
    name: 'cep'
})
export class CepPipe implements PipeTransform{
    transform(value: string): string {
        if(!isNullOrUndefined(value) && value.length == 8){
            return value.substr(0, 2) + '.' +
                value.substr(2, 3) + '-' +
                value.substr(5, 3) ;
        }else{
            return value;
        }

    }
}
