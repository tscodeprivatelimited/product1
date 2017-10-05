import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RESTService {

  constructor(private http:Http) { }

  doGet(url:string,params:Array<object>){
     let headers =  new Headers();
    //headers.append("Content-Type", "text/xml");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true"); 
    headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    headers.append("Content-Type", "application/json,application/x-www-form-urlencoded");
    headers.append("Access-Control-Request-Headers", "Content-type,X-Requested-With,Origin,accept");
    
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
    headers.append('Access-Control-Allow-Origin','*');
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
