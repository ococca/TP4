import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = "http://apibooksutntp3.herokuapp.com";


  constructor(private http: HttpClient) { }

  async getPerson() {
    try {
      const response = await this.http.get(this.url + "/persona").toPromise();
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }

  async postPerson(newPerson) {
    try {
      const paquete = {
        nombre: newPerson.nombre,
        apellido: newPerson.apellido,
        alias: newPerson.alias,
        email: newPerson.email,
        celu: newPerson.celu
      }

      const response = await this.http.post(this.url + "/persona", paquete).toPromise();
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }
}
