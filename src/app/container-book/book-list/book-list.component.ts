import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { GenreService } from 'src/app/genre.service';
import { PersonService } from 'src/app/person.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books = [];
  @Input() genders;
  @Input() persons;

  bookID = '';
  nombre = '';
  generoID = '';
  personID = '';


  book: any = [{
    _id: '',
    nombre: '',
    descripcion: '',
    genero: '',
    persona: '',
  }]
  constructor(
    private genreService: GenreService,
    private personService: PersonService,
    private bookService: BookService) { }

  ngOnInit() {

    
  }




  borrarLibro(libroId) {
    // this.bookService.borrarLibro(libroId);
    console.log('Borrar libro=', libroId)
    // alert('!! Libro eliminado !!');
  }

}
