import { Component, Inject, inject} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryComponent } from '../../top-menu/bag/item/diary/diary.component';

import { Item } from '../../../services/item';
import { ItemsService } from '../../../services/items.service';

import { Location } from '../../../services/location';
import { LocationsService } from '../../../services/locations.service';

import { GirlsService } from '../../../services/girls.service';
import { NotesService } from '../../../services/notes.service';
import { KazumaService } from '../../../services/kazuma.service';

import { MatDialogContent, MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig} from '@angular/material/dialog';




@Component({
  selector: 'app-overlay-location',
  standalone: true,
  imports: [MatDialogContent, CommonModule],
  templateUrl: './overlay-location.component.html',
  styleUrl: './overlay-location.component.css'
})
export class OverlayLocationComponent {

  close() {
    this.dialogRef.close(this.location);
  }

  //импортируем сервисы, функциями которых будем пользоваться
  notesService: NotesService = inject(NotesService); //для записей в дневник
  itemsService: ItemsService = inject(ItemsService); //для добавления предметов в сумку
  kazumaService: KazumaService = inject(KazumaService); //для изменения статов Кацумы и их отображения
  locationsService: LocationsService = inject(LocationsService); //чтобы убирать предметы после взаимодействия
  girlsService: GirlsService = inject(GirlsService) //чтобы добавлять предмет в список используемых для девчонки

  kazumaStats = this.kazumaService.kazumaStats //статы Кацумы для отображения

  Collect(item: Item){

    if (item.note) { 
      this.kazumaService.newMessage = true;
      this.notesService.AddNote(item.note); //если у предмета существует запись, записать ее в дневник
    }

    this.itemsService.AddItem(item); //добавляем в рюкзак
    this.girlsService.AddItem(item); //добавляем предмет в списки используемых
    this.locationsService.RemoveItem(item, this.location); //удаляем из текущей локации
    // if(this.location.items.length == 0){
    //   this.notesService.AddNote("I'm pretty sure I found all I can in " + this.location.name); //если предметы закончились, делаем об этом запись 
    // }
   }

   //открываем дневник
   openDiary(){
 
     //создаем и открываем диалог
     const dialogConfig = new MatDialogConfig();
   
     dialogConfig.width = '900px';
     dialogConfig.height = '600px';
     dialogConfig.autoFocus = false;
 
     this.dialog.open(DiaryComponent, dialogConfig)
   }

   constructor(
    private dialog: MatDialog, 
    private dialogRef: MatDialogRef<OverlayLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public location: Location) {

    }

}
