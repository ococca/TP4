import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-container-person',
  templateUrl: './container-person.component.html',
  styleUrls: ['./container-person.component.css']
})
export class ContainerPersonComponent implements OnInit {

  persons: any = [];

  constructor(private personService: PersonService) { }

  async ngOnInit() {
    this.persons = await this.personService.getPerson();
  }

  async receivedPerson(newPerson){
    await this.personService.postPerson(newPerson);
  }

}
