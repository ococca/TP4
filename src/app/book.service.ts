import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = "http://apibooksutntp3.herokuapp.com";


  constructor(private http: HttpClient) { }

  async bookList() {
    try {
      const response = await this.http.get(this.url + "/libro").toPromise();
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }

  async sendBook(newBook) {
    try {
      const body = {
        nombre: newBook.nombre,
        descripcion: newBook.descripcion,
        autor: newBook.autor,
        genero: newBook.gender_id,
        persona: newBook.person_id
      }

      const response = await this.http.post(this.url + "/libro", body).toPromise();
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }

}
