import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RESTService {

  constructor(private http:Http) { }

  doGet(url:string){
    return this.http.get(url).
              map(
                (response) => {
                  return response.json()
                },
                (error) => {return error}
              )
  }

  doPost(url:string,params:object){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url,params,options).
              map(
                (response) => {
                   return response.json()
                },
                (error) => {return error}
              )
  }

  doDelete(url:string,id)
  {
     return this.http.delete(url,id).map(
                (response) => {
                   return response.json()
                },
                (error) => {return error}
              )

  }


}
