import { Injectable, inject } from '@angular/core';
import { Location } from './location';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locationsList: Location[] = [
    {   
        "id": 0,
        "name": "Grassland",
        "img": "assets/locations/loc1.jpg",
        "items": [
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
                "id": 13,
                "name": "Cabbage",
                "img": "assets/items/cabbage.jpg",
                "description": "Live fast. Die young",
                "color": "border: 2px dashed rgb(91,91,91)",
                "usable": [
                    {
                        "name": "Darkness",
                        "note": "A cabbage flew right into Darkness! Wait. Did she just like it?",
                        "img": "darkness/distracted1.jpg",
                        "distraction": true
                    },
                    {
                        "name": "Aqua",
                        "note": "Seems like Aqua made some new friends. Makes sense, they are 90% water.",
                        "img": "aqua/distracted2.jpg",
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
                "position": "position: absolute; left: 240px; top: 60px;"
            }
        ]
    },
    {   
        "id": 1, 
        "name": "Lane",
        "img": "assets/locations/loc5.png",
        "items": [
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
                        "img": "eris/distracted1.png",
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
    },
    {   
        "id": 2,
        "name": "Bridge",
        "img": "assets/locations/loc3.jpg",
        "items": [
            {
                "id": 11,
                "name": "Wine",
                "img": "assets/items/wine.jpg",
                "description": "Aqua's favorite",
                "color": "border: 2px dashed rgb(91,91,91)",
                "usable": [
                    {
                        "name": "Aqua",
                        "note": "Now Aqua's asleep, and no one can stop me!",
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
                        "note": "They say, they do mana potions out of it. It works! I guess, that's why Aqua is always drunk."
                    }
                ],
                "note": "Somebody threw out a bottle of excellent wine! Or they just put it there to chill. Doesn't really matter.",
                "position": "position: absolute; left: 245px; bottom: 80px;"
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
                        "img":"megumin/distracted2.jpeg",
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
                "position": "position: absolute; right: 45px; bottom: 255px;"
            }
        ]
    },
    {   
        "id": 3,
        "name": "Street",
        "img": "assets/locations/loc4.jpg",
        "items": [
            {
                "id": 0,
                "name": "Rare potion",
                "img": "assets/items/rare.png",
                "description": "Who knows what it does?",
                "color": "border: 2px dashed rgb(91,91,91)",
                "usable": [
                    {
                        "name": "Wiz",
                        "note": "Looks like Wiz took a keen interest in this potion. Good thing I saved it!",
                        "img":"wiz/distracted.png",
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
                "position": "position: absolute; right: 80px; bottom: 5px;"
            },
            {
                "id": 12,
                "name": "Chomusuke",
                "img": "assets/items/chomusuke.png",
                "description": "Kawaii little demon. Nya!",
                "color": "border: 2px dashed rgb(91,91,91)",
                "usable": [{
                    "name": "Megumin",
                    "note": "Megumin doesn't seem to be really happy. Well, at least her hands are busy.",
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
                "note": "Look who I found. Chomusuke! It's time to bring him home.",
                "position": "position: absolute; right: 140px; top:25px;"
            }
        ]
    }
]

//------------------------------

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

  constructor() {}

}
