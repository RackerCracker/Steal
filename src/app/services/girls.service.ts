import { Injectable } from '@angular/core';
import { Girl } from './girl';
import { Item, Usable } from './item';

@Injectable({
  providedIn: 'root'
})
export class GirlsService {
   
  url = 'http://localhost:3000/girls';

  girlsList: Girl[] = [
    {
        "id": 0,
        "name": "Darkness",
        "img_after": "./assets/darkness/after.png",
        "img": "./assets/darkness/before.jpg",
        "distracted": false,
        "panties_id": 5,
        "items": [],
        "note" : "Here I hold the last bastion of Darkness. Can you call me a Champion of Light?"
    },
    {
        "id": 1,
        "name": "Megumin",
        "img_after": "./assets/megumin/after.jpg",
        "img": "./assets/megumin/before.jpg",
        "distracted": false,
        "panties_id": 3,
        "items": [],
        "note": "Megumin wears black silk. Pleasant to look, pleasant to touch."
    },
    {   
        "id": 2,
        "name": "Aqua",
        "img_after": "./assets/aqua/after.jpg",
        "img": "./assets/aqua/before.jpg",
        "distracted": false,
        "panties_id": 4,
        "items": [],
        "note": "Can I call them wet if they were in close contact with Water?"
    },
    {
        "id": 3,
        "name": "Yun-Yun",
        "img_after": "./assets/yunyun/after.jpg",
        "img": "./assets/yunyun/before.jpg",
        "distracted": false,
        "panties_id": 6,
        "items": [],
        "note": "Who would've think Yun-Yun's are black and stretchy? Me."
    },
    {
        "id": 4,
        "name": "Kris",
        "img_after": "./assets/kris/after.jpg",
        "img": "./assets/kris/before.jpg",
        "distracted": false,
        "panties_id": 10,
        "items": [],
        "note": "Who is a Master Thief now?"
    },
    {   
        "id": 5,
        "name": "Eris",
        "img_after": "./assets/eris/after.jpg",
        "img": "./assets/eris/before.png",
        "distracted": false,
        "panties_id": 9,
        "items": [],
        "note": "Eris's are pure white! Not a single spot. What a pity."
    },
    {   
        "id": 6,
        "name": "Sylvia",
        "img_after": "./assets/sylvia/after.jpg",
        "img": "./assets/sylvia/before.PNG",
        "distracted": false,
        "panties_id": 7,
        "items": [],
        "note": "I expected more... resistance from Sylvia. Did she just let me have it? What if I asked?"

    },
    {   
        "id": 7,
        "name": "Wiz",
        "img_after": "./assets/wiz/after.jpg",
        "img": "./assets/wiz/before.jpg",
        "distracted": false,
        "panties_id": 8,
        "items": [],
        "note": "A cloth from a dead body. I guess, it is Kazuma The Marauder now."
    }
]

ChangeImg(girl: Girl, img: string){
  girl.img = img;
}

  //в конкретную бабу добавляем предмет
  AddItem(item: Item) {                //берем предмет
    for (let usable of item.usable){        //узнаем, каким бабам можно его присвоить
      for (let girl of this.girlsList){     //перебираем всех баб, пока не находим нужных
        if (usable.name == girl.name){
          girl.items.push(item);
        }
      }
    }
   
  }

  //из конкретной бабы убираем предмет, из ее списка
  RemoveItem(item: Item, girl: Girl) {

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
    const index = myIndexOf(item, girl.items);
    if (index !== -1) {
      console.log("I deleted" + item.name + "from list of location's objects")
      girl.items.splice(index, 1);
    }
    }  

  //из всех девчонок убираем предмет для использования
  RemoveItemFromAll(item: Item) {
    for (let girl of this.girlsList){
      this.RemoveItem(item, girl) 
    } 
  }

    //чтобы доставать список баб
    async goGetGirls(): Promise<Girl[]> {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

  constructor() {
  
    // //достаем список девчонок и привязываем его к местным переменным
    // this.goGetGirls().then((girlsList: Girl[]) => {
    //   this.girlsList = girlsList;
    // });

  }
}
