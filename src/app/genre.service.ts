import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  url = "http://apibooksutntp3.herokuapp.com";


  constructor(private http: HttpClient) { }


  async genreList() {
    try {
      const response = await this.http.get(this.url + "/genero").toPromise();
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }

  async genrePost(newGenre) {
    try {

      const paquete = {
        nombre: newGenre.nombre
      }

      const response = await this.http.post(this.url + "/genero", paquete).toPromise();

      return response;
    }
    catch (e) {
      console.log(e);
    }
  }
}
