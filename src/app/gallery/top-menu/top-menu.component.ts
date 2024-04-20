import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BagComponent } from './bag/bag.component';
import { KazumaMenuComponent } from './kazuma-menu/kazuma-menu.component';

import { Kazuma } from '../../services/kazuma';
import { KazumaService } from '../../services/kazuma.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterModule, CommonModule, KazumaMenuComponent, BagComponent],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

  public unfolded = true;

  onClick(){
    console.log(!this.unfolded);
    return this.unfolded=!this.unfolded;
  }

  kazumaService: KazumaService = inject(KazumaService);
  kazumaStats: Kazuma = this.kazumaService.kazumaStats;

  constructor(){
    
    // this.kazumaService.goGetStats().then((stats: Kazuma[]) => {
    //   this.kazumaStats = stats[0];
    //   console.log(this.kazumaStats)
    // });

  }

}
