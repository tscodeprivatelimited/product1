import { Injectable } from '@angular/core';

@Injectable()
export class userDetials {
userName:String ="";
password:String=""; 
constructor() { }
setUserName(userName){
    this.userName=userName;
}
setPassword(pwd){
    this.password=pwd;
}
getUserName(){
    return this.userName;
}
getPassword(){
    return this.password;
}

}