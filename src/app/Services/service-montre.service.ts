import { Injectable } from '@angular/core';
import { Observable , interval} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceMontreService {

  private time: Observable<Date>;

  constructor() { 
    this.time = interval(1000).pipe(map(() => new Date()));
  }

  getCurrentTimer() {
    return this.time;
  }

}
