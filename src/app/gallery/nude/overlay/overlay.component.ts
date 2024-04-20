import { AfterContentInit, Component, DoCheck, Inject, inject} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from '../../top-menu/bag/item/item.component';
import { DiaryComponent } from '../../top-menu/bag/item/diary/diary.component';

import { Girl } from '../../../services/girl';
import { GirlsService } from '../../../services/girls.service';

import { Item } from '../../../services/item';
import { ItemsService } from '../../../services/items.service';

import { NotesService } from '../../../services/notes.service';
import { KazumaService } from '../../../services/kazuma.service';

import { MatDialogContent, MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [MatDialogContent, CommonModule, ItemComponent],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {

  close() {
    this.dialogRef.close(this.girl);
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));    //пауза для асинхронных функций
  }

  //импортируем сервисы, функциями которых будем пользоваться
  notesService: NotesService = inject(NotesService); //для записей в дневник
  itemsService: ItemsService = inject(ItemsService); //для добавления предметов в сумку
  kazumaService: KazumaService = inject(KazumaService); //для изменения статов Кацумы и их отображения
  girlService: GirlsService = inject(GirlsService); //чтобы убирать предметы из списка взаимодействия после взаимодействия

  itemsList!: Item[]; //надо, чтобы вытаскивать из общего списка нужные предметы
  kazumaStats = this.kazumaService.kazumaStats //статы Кацумы, чтоб компонент знал

  showtest = false;  //начало показа анимации

  //------------------------------

  timeoutHandler: any;

  mouseup() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  mousedown() {
    this.timeoutHandler = setTimeout(() => { 
      
      this.AllInOne(this.girl.note, this.itemsList[this.girl.panties_id])  //вызываем функцию, если нажато достаточное количество времени

      this.timeoutHandler = null; 
    }, 800);
  }

  //------------------------------

  async AllInOne(note: string, item: Item){

    if (this.girl.img != this.girl.img_after){  //если еще не украл, тогда можно кастовать

      if ((this.kazumaStats.mana != 0) || (this.kazumaService.kazumaStats.img == "panties")){  //кастуем, если есть мана или напялил трусы Мегумин

        if (this.kazumaService.kazumaStats.img != "panties"){
          this.kazumaService.Mana(-1);    //затраты на каст
        }
        
        this.notesService.AddNote(this.girl.name + " -> Steal");   //добавляем записи в дневник
        this.notesService.AddNote(this.girl.note)
        this.kazumaService.newMessage = true;

        this.showtest = true;  //начинаем показ анимации
        await this.sleep(3000);  //пауза, чтобы картинка не менялась слишком рано
        this.girlService.ChangeImg(this.girl, this.girl.img_after)   //изменяем картинку девчонки

        this.itemsService.AddItem(item); //добавляем предмет в сумку
        this.kazumaService.PantiesPlus();           //изменяем статы Кацумы

        if (this.kazumaService.kazumaStats.panties == 8){
          this.kazumaService.ChangeImg("respect");              //меняем портрет Кацумы, если добился успеха
        }

        // ---

        if ((!this.girl.distracted) && (this.girl.name !== "Sylvia")){
          this.kazumaService.Health(-1);                        //пощечина, если не отвлек или если это не Сильвия
          this.notesService.AddNote("Slap!")
  
          if (this.kazumaService.kazumaStats.img == "panties"){   //дополнительные эффекты, если Кацума напялил трусы Мегумин
            this.kazumaService.Health(-1);
            if (!this.notesService.notesWritten.includes("Another slap! God, it hurts. Probably putting on Megumin's panties wasn't the best idea.")){
              this.notesService.AddNote("Another slap! God, it hurts. Probably putting on Megumin's panties wasn't the best idea.");
            }
            else{
              this.notesService.AddNote("Another slap!");
            }
          }
        }
  
        // if ( (this.notesService.notesWritten.includes("Slap!")) && (!this.notesService.notesWritten.includes("Could I try and distract the girls? I am too young to die (again)."))){   //добавляем запись о том, что стоило бы поискать отвлечение
        //   this.notesService.AddNote("Could I try and distract the girls? I am too young to die (again).");   //не повторяем запись, если она уже есть
        // }

      }
      else {
        if (!this.notesService.notesWritten.includes( "I need mana to start casting. A potion? Or is there another way?")){
          this.notesService.AddNote("I need mana to start casting. A potion? Or is there another way?");
          this.kazumaService.newMessage = true;
        } //не повторяем запись, если она уже есть
      }
    }

  }

  //------------------------------

  Give(item: Item){
    if (this.girl.distracted){
      if (!this.notesService.notesWritten.includes(this.girl.name + " is already distracted. I'll find a better use for " + item.name)){
        this.notesService.AddNote(this.girl.name + " is already distracted. I'll find a better use for " + item.name);
        this.kazumaService.newMessage = true;
      } //не повторяем запись, если она уже есть
    }
    else {
      this.itemsService.RemoveItem(item);
      // this.girlService.RemoveItem(item, this.girl);     //убираем предмет из сумки и из списка используемых
      this.girlService.RemoveItemFromAll(item); 

      for (let usable of item.usable){
        if (usable.name == this.girl.name){
          if(usable.distraction == true){
            this.girl.distracted = true;        //если предмет отвлекает девчонку, делаем ее отвлеченной
            this.girlService.ChangeImg(this.girl, usable.img)       //и изменяем портрет
          }


          this.notesService.AddNote(item.name + " -> " + this.girl.name)  //отображаем запись при использовании предмета
          this.notesService.AddNote(usable.note)
          this.kazumaService.newMessage = true;
        }
      }          
    }
  }

  //------------------------------

  openDiary(){

    //создаем и открываем диалог
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    dialogConfig.autoFocus = false;

    this.dialog.open(DiaryComponent, dialogConfig)
  }

  //------------------------------

  //передаем данные в этот диалог с помощью MAT_DIALOG_DATA
  //работает как Input, но только для диалогов
  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OverlayComponent>, @Inject(MAT_DIALOG_DATA) public girl: Girl ) {

      //нужно, чтобы данные передавались обратно в родительский компонент по щелчку на backdrop
      this.dialogRef.beforeClosed().subscribe(() => this.dialogRef.close(this.girl));

      //нужно, чтобы компонент знал, какие вообще предметы бывают
      this.itemsService.goGetItems().then((itemsList: Item[]) => {
        this.itemsList = itemsList;
        console.log(itemsList)
      });

  }

}
