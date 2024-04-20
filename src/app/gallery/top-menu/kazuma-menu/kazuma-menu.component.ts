import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';

import { Kazuma } from '../../../services/kazuma';
import { KazumaService } from '../../../services/kazuma.service';

@Component({
  selector: 'app-kazuma-menu',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgFor],
  templateUrl: './kazuma-menu.component.html',
  styleUrl: './kazuma-menu.component.css'
})
export class KazumaMenuComponent {

  @Input() unfolded!: boolean;
  @Output() unfoldedChange = new EventEmitter<boolean>()

  //к Output подвязывается функция, результат которой и есть "излучение" нужной переменной в нужный Output
  onClick(){
    console.log(!this.unfolded);
    this.unfolded=!this.unfolded;

    this.unfoldedChange.emit(this.unfolded);
  }

  //импортируем (связываемся) со статами Кацумы в сервисе
  //будем их отображать
  kazumaService: KazumaService = inject(KazumaService);
  kazumaStats: Kazuma = this.kazumaService.kazumaStats;

  constructor(){
    
    // this.kazumaService.goGetStats().then((stats: Kazuma[]) => {
    //   this.kazumaStats = stats[0];
    //   console.log(this.kazumaStats)
    // });

  }

}
