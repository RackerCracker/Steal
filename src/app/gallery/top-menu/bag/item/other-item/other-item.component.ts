import { Component, Inject, inject} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Item, Effect } from '../../../../../services/item';
import { ItemsService } from '../../../../../services/items.service';

import { Kazuma } from '../../../../../services/kazuma';
import { KazumaService } from '../../../../../services/kazuma.service';

import { NotesService } from '../../../../../services/notes.service';
import { GirlsService } from '../../../../../services/girls.service';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";





@Component({
  selector: 'app-other-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other-item.component.html',
  styleUrl: './other-item.component.css'
})
export class OtherItemComponent {

  item!: Item;

  itemsService: ItemsService = inject(ItemsService); //для того, чтобы убирать предметы из сумки и эффекты из предметов
  kazumaService: KazumaService = inject(KazumaService); //для изменения статов Кацумы и их отображения
  notesService: NotesService = inject(NotesService); //для изменения статов Кацумы и их отображения
  girlsService: GirlsService = inject(GirlsService); //чтобы убирать использованные предметы из девчонок

  kazumaStats: Kazuma = this.kazumaService.kazumaStats;

  close() {
    this.dialogRef.close();
  }

  RemoveItem(item: Item){
    this.itemsService.RemoveItem(item);
  }

  UseEffect(effect: Effect, item: Item){
    this.kazumaService.Health(effect.health)
    this.kazumaService.Mana(effect.mana)
    this.itemsService.RemoveEffect(effect, item)

    if (effect.note){                                         //если есть записка, записываем ее
      this.notesService.AddNote(item.name + " -> " + effect.name)
      this.notesService.AddNote(effect.note)
      this.kazumaService.newMessage = true;
    }

    if ((item.name == "Megumin's panties") && (effect.name == "Put on")){    //если надел трусы Мегумин, меняем картинку
      this.kazumaService.ChangeImg("panties")
    }

    if ((item.name == "Sylvia's panties") && (effect.name == "Smell")){    //если нюхнул трусы Сильвии, меняем картинку
      this.kazumaService.ChangeImg("shocked")
      if (this.notesService.notesWritten.includes("Megumin wears black silk. Pleasant to look, pleasant to touch.")){
        this.notesService.AddNote("I am in dread. Megumin's no longer helpful.") //если до этого надел трусы Мегумин
      }
    }

    if ((item.effects.length == 0)&&(item.name !== "Chomusuke")&&(item.name !== "Golden apples")){  //убираем всех, кроме кота и яблок
      this.girlsService.RemoveItemFromAll(item)
      this.RemoveItem(item);
      this.dialogRef.close();
    }
  }

  constructor( 
    private dialogRef: MatDialogRef<OtherItemComponent>,
    @Inject(MAT_DIALOG_DATA) item: Item
    ) {

    this.item = item;
  }


}
