import { Injectable, inject } from '@angular/core';
import { Location } from './location';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  url = 'http://localhost:3000/locations';

  RemoveItem(item: Item, location: Location) {

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
    const index = myIndexOf(item, location.items);
    if (index !== -1) {
      location.items.splice(index, 1);
    }
    
    }  

    //чтобы доставать список локаций где-нибудь еще (например, в gallery)
    async goGetLocations(): Promise<Location[]> {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

  constructor() { 

  }
}
