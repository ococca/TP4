import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-container-gender',
  templateUrl: './container-gender.component.html',
  styleUrls: ['./container-gender.component.css']
})
export class ContainerGenderComponent implements OnInit {

  genre: any = [];

  constructor(private genreService : GenreService) { }

  async ngOnInit() {
    this.genre = await this.genreService.genreList();
  }

  async genreReceived(newGender){
    const respone = await this.genreService.genrePost(newGender);
    return respone;
  }

}
