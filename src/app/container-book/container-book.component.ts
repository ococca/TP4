import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { BookService } from '../book.service';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-container-book',
  templateUrl: './container-book.component.html',
  styleUrls: ['./container-book.component.css']
})
export class ContainerBookComponent implements OnInit {

  genders: any = [];
  books: any = [];
  persons: any = [];
  libros: any;

  book = {
    _id: '',
    nombre: '',
    descripcion: '',
    genero: '',
    personaA: ''
  }

  constructor(private genreService: GenreService, private personService: PersonService, private bookService: BookService) {

  }

  async ngOnInit() {

    this.genders = await this.genreService.genreList();

    this.books = await this.bookService.bookList();

    this.persons = await this.personService.getPerson();

    this.libros = this.books.map((book) => {


      const genero = this.genders.find((item) => {
        return item._id == book.gender_id;
      });

      const persona = this.persons.find((element) => {
        return element._id == book.person_id;
      });

      console.log('genero: ', genero);
      console.log('persona: ', persona);

      const newBook = {
        nombre: book.nombre,
        descripcion: book.descripcion,
        autor: book.autor,
        genero: genero,
        prestadoA: persona
      }

      return newBook;

    });
  }

  async receivedBook(newBook) {
    const response = await this.bookService.sendBook(newBook);
    return response;
  }


}
