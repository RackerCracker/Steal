import { Component, inject} from '@angular/core';
import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

import { NotesService } from '../../../../../services/notes.service';
import { KazumaService } from '../../../../../services/kazuma.service';

import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent {

  //функции для управления дневником
  close() {
    this.dialogRef.close();
  }

  kazumaService: KazumaService = inject(KazumaService);

  window = 0;
  scale = "transform: translate(0, 0);";

  turn(pages: number){
    this.window = this.window + pages

    if (this.window < 0){ this.window = 0;}
    if (this.window > 2){ this.window = 2;}

    this.scale = "transform: translate(" + String(this.window * (-850)) + "px, 0);"

  }

  //список из заметок, которые идут в дневник
  //достаем их из сервиса, в котором он формируется с помощью взаимодействий в других компонентах
  //нужны здесь, чтобы отображались в дневнике
  notesService: NotesService = inject(NotesService);
  notesWritten: string[] = this.notesService.notesWritten;

  //создаем оболочку для дневника, чтобы иметь возможность закрыть его
  constructor( private dialogRef: MatDialogRef<DiaryComponent>) {

    this.kazumaService.newMessage = false;

  }

}
