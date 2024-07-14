import { Injectable } from '@angular/core';
import { DataItem } from './data.model';
import { UntypedFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  public name:string = "subramanian";
  constructor() { }

  public data: DataItem[] = [];
  private currentId = 0;

  create(value: DataItem): number {
    //const newItem: DataItem = { id: this.currentId++, value };
    this.data.push(value);
    return this.data.length;
  }

  read(): DataItem[] {
    return this.data;
  }

  update(id: number, newValue: string): DataItem | undefined {
    return undefined
    //const item = this.data.find(d => d.id === id);
    //if (item) {
      //item.value = newValue;
    //}
    //return item;
  
  }

  delete(id: number): boolean {
    //const index = this.data.findIndex(d => d.id === id);
    //if (index !== -1) {
    //  this.data.splice(index, 1);
    //  return true;
   // }
    return false;
  }


}
