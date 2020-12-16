import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() genders = [];
  @Input() persons = [];

  @Output() newBook = new EventEmitter();

  book = {
    nombre: '',
    descripcion: '',
    gender_id: '',
    person_id: ''
  }

  constructor() { }

  ngOnInit() {
  }

  sendBook() {
    this.newBook.emit(this.book);
  }

}
