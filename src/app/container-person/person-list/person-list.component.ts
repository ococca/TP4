import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() persons = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }




  borrarPersona(personId) {
    this.personService.borrarPersona(personId);
    console.log('Borrar persona=', personId)
    alert('!! Persona eliminado !!');
  }


  onPreModPerson(personId) {
    // this.personService.borrarPersona(personId);
    console.log('Editar esta persona=', personId)
    // alert('!! Persona eliminado !!');
  }




}
