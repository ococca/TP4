import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = "https://peaceful-bayou-46033.herokuapp.com";


  constructor(private http: HttpClient) { }

  async getPerson(){
    try{
      const response = await this.http.get(this.url+"/persona").toPromise();
      return response;
    }
    catch(e){
      console.log(e);
    }
  }

  async postPerson(newPerson){
    try{
      const paquete={
        nombre: newPerson.firstName,
        apellido: newPerson.lastName,
        email: newPerson.email,
        celu: newPerson.cellphone,
        alias: newPerson.alias
      }

      const response = await this.http.post(this.url+"/persona", paquete).toPromise();
      return response;
    }
    catch(e){
      console.log(e);
    }
  }
}
