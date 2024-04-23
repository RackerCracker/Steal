import { Injectable } from '@angular/core';
import { Item, Effect  } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
   
  // url = 'http://localhost:3000/items';

  // async goGetItems(): Promise<Item[]> {
  //   const data = await fetch(this.url);
  //   return await data.json() ?? [];
  // }

  itemsList: Item[] = [
    {
        "id": 0,
        "name": "Rare potion",
        "img": "assets/items/rare.png",
        "description": "Who knows what it does?",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [
            {
                "name": "Wiz",
                "note": "Looks like Wiz took a keen interest in this potion. Good thing I saved it for her!",
                "img":"wiz/distracted.jpg",
                "distraction": true
            }
        ],
        "effects": [
            {
                "name": "Drink",
                "health": -10,
                "mana": 0,
                "note": "It was a potion for permanent impotence. Oh boy."
            }
        ],
        "note": "I found a rare potion. What do I do with it?",
        "position": "position: absolute; right: 10px; bottom: 350px;"
    },
    {
        "id": 1,
        "name": "Healing potion",
        "img": "assets/items/health.png",
        "description": "Best treatment after a slap",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [
            {
                "name": "Wiz",
                "note": "Could a healing potion impress Wiz? Nope. She sees them every day.",
                "img":"wiz/before.jpg",
                "distraction": false
            }

        ],
        "effects": [
            {
                "name": "Drink",
                "health": 1,
                "mana": 0,
                "note": ""
            }
        ],
        "note": "",
        "position": "position: absolute; left: 20px; bottom: 290px;"
    },
    {
        "id": 2,
        "name": "Mana potion",
        "img": "assets/items/mana.png",
        "description": "Easy way to cast spells",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [
            {
                "name": "Megumin",
                "note": "I gave Megumin a mana potion. Guess what? She made another EXPLOSION!",
                "img":"/megumin/distracted2.jpeg",
                "distraction": true
            },
            {
                "name": "Wiz",
                "note": "A 'Thank you' in exchange for a mana potion. Wow.",
                "img":"wiz/before.jpg",
                "distraction": false
            }
        ],
        "effects": [
            {
                "name": "Drink",
                "health": 0,
                "mana": 1,
                "note": ""
            }
        ],
        "note": "",
        "position": "position: absolute; right: 10px; bottom: 350px;"
    },
    {   
        "id": 3,
        "name": "Megumin's panties",
        "img": "assets/items/panties.jpg",
        "description": "A place to feel at home",
        "color": "border: 2px dashed rgb(194, 65, 68);",
        "usable": [],
        "effects": [
            {
                "name": "Smell",
                "health": 1,
                "mana": 0,
                "note": "Soft, but delicate. Feels you with warmth and comfort."
                
            },
            {
                "name": "Put on",
                "health": 0,
                "mana": 0,
                "note": "I feel a burst of energy! Now I need no mana to cast. Girls won't be so glad, though."
            }
        ],
        "note": "",
        "position": ""
    },
    {
        "id": 4,
        "name": "Aqua's panties",
        "img": "assets/items/panties.jpg",
        "description": "Never knew they exist",
        "color": "border: 2px dashed rgb(39, 65, 126);",
        "usable": [],
        "effects": [
            {
                "name": "Smell",
                "health": 0,
                "mana": 1,
                "note": "A-a-h. A breath of an ocean. So invigorating."
            }
        ],
        "note": "",
        "position": ""
    },
    {
        "id": 5,
        "name": "Darkness's panties",
        "img": "assets/items/panties.jpg",
        "description": "Chain mail everywhere. Sure.",
        "color": "border: 2px dashed rgb(202, 143, 43);",
        "usable": [],
        "effects": [
            {
                "name": "Smell",
                "health": 0,
                "mana": 0,
                "note": "Do you know what an armory lube tastes like? I do."
            },
            {
                "name": "Put on",
                "health": 1,
                "mana": 0,
                "note": "A man gotta protect himself. Doesn't sit as tight as on Darkness, though."
            }
        ],
        "note": "",
        "position": ""
    },
    {
        "id": 6,
        "name": "Yun-Yun's panties",
        "img": "assets/items/panties.jpg",
        "description": "Decorated with a red ribbon",
        "color": "border: 2px dashed rgb(49, 47, 59);",
        "usable": [],
        "effects": [
            {
                "name": "Smell",
                "health": 0,
                "mana": 1,
                "note": "A strong base with some sweet notes. Exhilarating!"
            }
        ],
        "note": "",
        "position": ""
    },
    {
        "id": 7,
        "name": "Sylvia's panties",
        "img": "assets/items/panties.jpg",
        "description": "Red. Dark. Huge.",
        "color": "border: 2px dashed rgb(165, 46, 75);",
        "usable": [],
        "effects": [
            {
                "name": "Smell",
                "health": -3,
                "mana": 0,
                "note": "This is not a female bouquet! Why on earth would I do that?"
            }
        ],
        "note": "",
        "position": ""
    },
    {
        "id": 8,
        "name": "Wiz's panties",
        "img": "assets/items/panties.jpg",
        "usable": [],
        "description": "Stolen from a dead body",
        "color": "border: 2px dashed rgb(73, 53, 90);",
        "effects": [
            {
                "name": "Smell",
                "health": 0,
                "mana": 1,
                "note":  "A delicate fragrance of an alchemic shop. 4/5."
            }
        ],
        "note": "",
        "position": ""

    },
    {
        "id": 9,
        "name": "Eris's panties",
        "img": "assets/items/panties.jpg",
        "description": "From the hands of the god herself. Almost.",
        "color": "border: 2px dashed rgb(93, 92, 145);",
        "usable": [],
        "effects": [
            {
                "name": "Smell",
                "health": 0,
                "mana": 1,
                "note": "Each breath takes me closer to a god."
            }
        ],
        "note": "",
        "position": ""
    },
    {
        "id": 10,
        "name": "Kris's panties",
        "img": "assets/items/panties.jpg",
        "description": "Stolen from a thief",
        "color": "border: 2px dashed rgb(106, 147, 103);",
        "usable": [],
        "effects": [
            {
                "name": "Smell",
                "health": 1,
                "mana": 0,
                "note": "A *taste* of victory, HA-HA-HA."
            }
        ],
        "note": "",
        "position": ""
    },
    {
        "id": 11,
        "name": "Wine",
        "img": "assets/items/wine.jpg",
        "description": "Aqua's favorite",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [
            {
                "name": "Aqua",
                "note": "Every time Aqua drops down drunk, is that a waterfall?",
                "img":"aqua/distracted1.jpeg",
                "distraction": true
            },
            {
                "name": "Sylvia",
                "note": "A whole bottle in a single gulp. Not your best guess, Kazuma.",
                "img": "sylvia/before.jpg",
                "distraction": false
            }
        ],
        "effects": [
            {
                "name": "Drink",
                "health": -1,
                "mana": 1,
                "note": "They say, they do mana potions out of it. It works! I guess, that's why Aqua always drunk."
            }
        ],
        "note": "Somebody threw out a bottle of excellent wine! Or they just put it there to chill. Doesn't really matter.",
        "position": "position: absolute; right: 100px; bottom: 100px;"
        
    },
    {
        "id": 12,
        "name": "Chomusuke",
        "img": "assets/items/chomusuke.png",
        "description": "Kawaii little demon. Nya!",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [{
            "name": "Megumin",
            "note": "Megumin doesn't look happy. Okay. At least her hands are busy.",
            "img": "megumin/distracted1.jpg",
            "distraction": true
        },
        {
            "name": "Yun-Yun",
            "note": "Yun-Yun adores the little kitty. Time to act!",
            "img": "yunyun/distracted1.jpg",
            "distraction": true
        }
        ],
        "effects": [
            {
                "name": "Pet",
                "health": 0,
                "mana": 0,
                "note": "I've pet a kitty. What a nice day it is!"
            }
        ],
        "note": "I found Chomusuke! Megumin would be glad to have him back.",
        "position": "position: absolute; right: 80px; bottom: 5px;"
    },
    {
        "id": 13,
        "name": "Cabbage",
        "img": "assets/items/cabbage.jpg",
        "description": "Live fast. Die young",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [
            {
                "name": "Darkness",
                "note": "A cabbage flew right into Darkness! Did she just like it?",
                "img": "darkness/distracted1.png",
                "distraction": true
            },
            {
                "name": "Aqua",
                "note": "Seems like Aqua made some new friends. Makes sense, they are 90% water.",
                "img":"aqua/distracted2.jpg",
                "distraction": true
            }       
        ],
        "effects": [
            {
                "name": "Eat",
                "health": 1,
                "mana": 0,
                "note": "Couldn't I find a better use for a flying cabbage? It tastes good, though."
            }
        ],
        "note": "A flying cabbage. I wonder what Darkness would think about it.",
        "position": "position: absolute; right: 170px; bottom: 240px;"
    },
    {
        "id": 14,
        "name": "Golden apples",
        "img": "assets/items/apples.png",
        "description": "Almost as precious as myself",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [
            {
                "name": "Kris",
                "note": "What better way is to distract a thief than with gold? Good boy, Kazuma. Good boy.",
                "img": "kris/distracted1.png",
                "distraction": true
            },
            {
                "name": "Sylvia",
                "note": "I tried to bribe Sylvia with golden apples. Could it work? Not in this universe.",
                "img": "sylvia/before.jpg",
                "distraction": false
            }       
        ],
        "effects": [
            {
                "name": "Eat",
                "health": -1,
                "mana": 0,
                "note": "Oh boy. They are golden. I just broke my tooth."
            }
        ],
        "note": "Apples! Made of gold! Am I able to sell it and just buy what I want?",
        "position": "position: absolute; left: 230px; top: 70px;"
    },
    {
        "id": 15,
        "name": "Snow sprite",
        "img": "assets/items/snow.png",
        "description": "A friendly little creature",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [
            {
                "name": "Eris",
                "note": "Eris seemed quite lonely between the worlds. Now she has a company!",
                "img": "eris/distracted1.jpg",
                "distraction": true
            }
        ],
        "effects": [
            {
                "name": "Drain",
                "health": 0,
                "mana": 1,
                "note": "Probably an evil thing to do, but who cares with such things at stake?"
            }
        ],
        "note": "I found a little snow sprite. Who could've guessed it can survive in the middle of the summer?",
        "position": "position: absolute; left: 195px; bottom: 195px;"
    },
    {
        "id": 16,
        "name": "Dirty mug",
        "img": "assets/items/mug.png",
        "description": "Do I even need it?",
        "color": "border: 2px dashed rgb(91,91,91)",
        "usable": [

        ],
        "effects": [
            {
                "name": "Look in",
                "health": 0,
                "mana": 0,
                "note": "I looked into the dirty mug. It looked into me. A revelation."
            }
        ],
        "note": "Good old RPG Kazuma. Takes everything that is not nailed down.",
        "position": "position: absolute; right: 350px; bottom: 55px;"
    }
    ]

  //список предметов, который в сумке
  //задаем дневник, потому что он там уже
  itemsInBag: Item[] = [
    {
      "id": 255,
      "name": "Diary",
      "img": "./assets/items/diary.png",
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


