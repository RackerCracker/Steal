import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Item } from '../../../../services/item';

import { DiaryComponent } from './diary/diary.component';
import { OtherItemComponent } from './other-item/other-item.component';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() item!: Item;

  openDiary(){

    //создаем и открываем диалог
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = "diary-dialog";

    this.dialog.open(DiaryComponent, dialogConfig)
  }

  openItem(){
    
    //создаем и открываем диалог
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.width = '340px';  //360
    dialogConfig.height = '476px'; //530
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = "other-item-dialog";
    dialogConfig.data = this.item;
    dialogConfig.closeOnNavigation = true;

    this.dialog.open(OtherItemComponent, dialogConfig)
  }

  constructor(private dialog: MatDialog){

  }

  

}
