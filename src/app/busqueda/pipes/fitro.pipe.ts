import { Pipe, PipeTransform } from '@angular/core';
import {ReqRes} from '../request-response';
@Pipe({
  name: 'fitro'
})
export class FitroPipe implements PipeTransform {

  transform(resultados: ReqRes["results"], page:number =0): ReqRes["results"] {
    return resultados.slice(page,page+4);;
  }

}
