import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})
export class GenderFormComponent implements OnInit {

  @Output() newGenre = new EventEmitter();

  //Propiedades como variables globales
  nombre = '';

  constructor() { }

  ngOnInit() {
  }


  sendGender() {
    this.newGenre.emit(this.nombre);
    // alert('garudo genero' + this.nombre);
  }

}
