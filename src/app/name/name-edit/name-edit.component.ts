import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.css'],
})
export class NameEditComponent {
  @Input() nameToEdit: string;
  @Output() saveChanges = new EventEmitter<string>();
  editedName: string;
  isNameSaved = false;

  constructor() {}

  ngOnInit() {
    this.editedName = this.nameToEdit;
  }

  saveName() {
    this.saveChanges.emit(this.editedName);
    this.isNameSaved = true;
  }
}
