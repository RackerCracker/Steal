import { Injectable } from '@angular/core';
import { Kazuma } from './kazuma';

@Injectable({
  providedIn: 'root'
})
export class KazumaService {
   
  url = 'http://localhost:3000/kazuma';

  async goGetStats(): Promise<Kazuma[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  kazumaStats: Kazuma = {
    "health": 10,
    "mana": 10,
    "panties": 0,
    "img": "basic",
    "new_note": false,
    "notes": [
        "I am too young to die (again). Better find some potion.",
        "Could I try and distract the girls? I am too young to die (again).",
        "Ouch! That hurt. Could I try and distract the girls?"
    ]
};

  newMessage = false;

  Health(change: number){
    this.kazumaStats.health = this.kazumaStats.health + change;
    if (this.kazumaStats.health <= 0){
      this.kazumaStats.health = 0;
    }
  }

  Mana(change: number){
    this.kazumaStats.mana = this.kazumaStats.mana + change;
    if (this.kazumaStats.mana <= 0){
      this.kazumaStats.mana = 0;
    }
  }

  PantiesPlus(){
    this.kazumaStats.panties = this.kazumaStats.panties + 1;
  }

  ChangeImg(img: string){
    this.kazumaStats.img = img
  }

  constructor() { 

    // this.goGetStats().then((stats: Kazuma[]) => {
    //   this.kazumaStats = stats[0];
    //   console.log(this.kazumaStats)
    // });

  }
}
