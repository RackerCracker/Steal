import { Injectable } from '@angular/core';
import { Item, Effect  } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
   
  url = 'http://localhost:3000/items';

  async goGetItems(): Promise<Item[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  //список предметов, который в сумке
  //задаем дневник, потому что он там уже
  itemsInBag: Item[] = [
    {
      "id": 255,
      "name": "Diary",
      "img": "/assets/items/diary.png",
      "description": "Hope no one will see it",
      "color": "border: 2px dashed rgb(91,91,91);",
      "usable": [],
      "effects": [],
      "note":"",
      "position": ""
    }
  ];

  AddItem(item: Item) {
    this.itemsInBag.push(item);
  }

  RemoveItem(item: Item) {

    //отдельная функция выделения индекса нужного объекта, потому что стандартная с объектами не работает
    function myIndexOf(object: Item, arr: Item[]) {    
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].name == object.name) {
              return i;
          }
      }
      return -1;
    }

    //ищем индекс нужного элемента, потому делаем контрольный в голову
    const index = myIndexOf(item, this.itemsInBag);
    if (index !== -1) {
      console.log("I deleted" + item.name + "from bag")
      this.itemsInBag.splice(index, 1);
    }
    
  }

  RemoveEffect(effect: Effect, item: Item) {

    function myIndexOf(object: Effect, arr: Effect[]) {    
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].name == object.name) {
              return i;
          }
      }
      return -1;
    }

    const index = myIndexOf(effect, item.effects);
    if (index !== -1) {
      console.log("I deleted" + item.name + "from list of effects")
      item.effects.splice(index, 1);
    }

  }

  constructor() { }
}


