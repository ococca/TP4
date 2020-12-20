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
  // ----------------------------------------------------

  async bookListID(libroID) {
    try {
      let response = await this.http.get(this.url + '/libro/' + libroID).toPromise();
      return [response];
    }
    catch (e) {
      console.log(e);
      return;
    }
  }
  // ---------------------------------------------------
  async sendBook(newBook) {
    try {

      const body = {
        nombre: newBook.nombre,
        descripcion: newBook.descripcion,
        autor: newBook.autor,
        genero: newBook.gender_id,
        prestadoA: newBook.person_id
      }

      const response = await this.http.post(this.url + "/c", body).toPromise();
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }

  async borrarLibro(id_libro) {
    try {
      await this.http.delete(this.url + '/libro/' + id_libro, { responseType: 'text' }).toPromise();
      return true;
    }
    catch (e) {
      console.log(e);
      return false;
    }
  }





}
