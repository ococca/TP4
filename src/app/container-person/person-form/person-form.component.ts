import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Output() newPerson = new EventEmitter();

  person = {
    nombre: '',
    apellido: '',
    alias: '',
    email: '',
    celu: ''

  }

  constructor() { }

  ngOnInit() {
  }


  sendPerson() {
    this.newPerson.emit(this.person);
  }
}
