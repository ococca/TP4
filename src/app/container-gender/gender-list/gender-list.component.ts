import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent implements OnInit {

  @Input() genre = [];

  constructor() { }

  ngOnInit() {
  }

}
