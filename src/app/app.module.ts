import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContainerGenderComponent } from './container-gender/container-gender.component';
import { ContainerPersonComponent } from './container-person/container-person.component';
import { ContainerBookComponent } from './container-book/container-book.component';
import { BookFormComponent } from './container-book/book-form/book-form.component';
import { BookListComponent } from './container-book/book-list/book-list.component';
import { GenderFormComponent } from './container-gender/gender-form/gender-form.component';
import { GenderListComponent } from './container-gender/gender-list/gender-list.component';
import { PersonFormComponent } from './container-person/person-form/person-form.component';
import { PersonListComponent } from './container-person/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerGenderComponent,
    ContainerPersonComponent,
    ContainerBookComponent,
    BookFormComponent,
    BookListComponent,
    GenderFormComponent,
    GenderListComponent,
    PersonFormComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
