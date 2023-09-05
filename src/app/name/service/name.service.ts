import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  private names: string[] = [];

  /**
   * Getter $name
   * @return {string[] }
   */
  public get $name(): string[] {
    return this.names;
  }
  constructor() {}

  addName(newName: string) {
    this.names.push(newName);
  }

  editName(index: number, newName: string) {
    if (index >= 0 && index < this.names.length) {
      this.names[index] = newName;
    }
  }

  deleteName(index: number) {
    if (index >= 0 && index < this.names.length) {
      this.names.splice(index, 1);
    }
  }
}
