import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KazumaService } from '../../services/kazuma.service';
import { NotesService } from '../../services/notes.service';

import { DiaryComponent } from '../top-menu/bag/item/diary/diary.component';

import {MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-endgame',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './endgame.component.html',
  styleUrl: './endgame.component.css'
})
export class EndgameComponent {

  close() {
    this.dialogRef.close();
    this.dialog.closeAll();
  }

  notesService: NotesService = inject(NotesService); //для чтения последней записи в дневнике
  lastMessage = this.notesService.notesWritten.slice(-1);

  kazumaService: KazumaService = inject(KazumaService); //для изменения статов Кацумы и их отображения
  kazumaStats = this.kazumaService.kazumaStats //статы Кацумы для отображения

  openDiary(){

    //создаем и открываем диалог
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    dialogConfig.autoFocus = false;

    this.dialog.open(DiaryComponent, dialogConfig)
  }

  constructor( private dialogRef: MatDialogRef<EndgameComponent>, private dialog: MatDialog) {

  }

}
