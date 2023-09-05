import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NameInputComponent } from './name/name-input/name-input.component';
import { NameListComponent } from './name/name-list/name-list.component';
import { NameService } from './name/service/name.service';
import { FormsModule } from '@angular/forms';
import { NameEditComponent } from './name/name-edit/name-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NameInputComponent,
    NameListComponent,
    NameEditComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [NameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
