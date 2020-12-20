import { Component, OnInit, Input } from '@angular/core';

import { GenreService } from 'src/app/genre.service';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent implements OnInit {

  @Input() genre = [];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
  }

  genreBorrar(genderId) {
    this.genreService.genreBorrar(genderId);
    console.log('Borrar LIbro=', genderId);
    alert('!! Genero eliminado !!');
  }

}
