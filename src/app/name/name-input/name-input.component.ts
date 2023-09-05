import { Component } from '@angular/core';
import { NameService } from '../service/name.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
})
export class NameInputComponent {
  nameAdd: string = '';

  constructor(private nameService: NameService) {}

  onAddName() {
    if (this.nameAdd.trim() !== '') {
      this.nameService.addName(this.nameAdd);
      this.nameAdd = '';
    }
  }
}
