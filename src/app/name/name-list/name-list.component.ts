import { Component } from '@angular/core';
import { NameService } from '../service/name.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],
})
export class NameListComponent {
  listOfNames: string[];
  editingIndex: number = -1;
  // isEditClicked = false;

  constructor(private nameService: NameService) {
    this.listOfNames = this.nameService.$name;
  }

  onEditName(idx: number) {
    this.editingIndex = idx;
    // this.isEditClicked = true;
    console.log('pressed edit: ' + idx);
  }

  onDeleteName(idx: number) {
    this.nameService.deleteName(idx);
  }

  saveEditedName(editedName: string) {
    if (this.editingIndex >= 0) {
      this.nameService.editName(this.editingIndex, editedName);
      this.editingIndex = -1; // Reset the editing index
    }
  }
}
