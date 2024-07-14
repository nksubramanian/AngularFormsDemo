import { Injectable } from '@angular/core';
import { DataItem } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  public name:string = "subramanian";
  constructor() { }

  public data: DataItem[] = [];
  private currentId = 0;

  create(value: string): DataItem {
    const newItem: DataItem = { id: this.currentId++, value };
    this.data.push(newItem);
    return newItem;
  }

  read(): DataItem[] {
    return this.data;
  }

  update(id: number, newValue: string): DataItem | undefined {
    const item = this.data.find(d => d.id === id);
    if (item) {
      item.value = newValue;
    }
    return item;
  }

  delete(id: number): boolean {
    const index = this.data.findIndex(d => d.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;
  }


}
