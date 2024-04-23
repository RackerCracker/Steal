import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BagComponent } from './bag/bag.component';
import { KazumaMenuComponent } from './kazuma-menu/kazuma-menu.component';
import { RulesComponent } from '../rules/rules.component';

import { Kazuma } from '../../services/kazuma';
import { KazumaService } from '../../services/kazuma.service';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterModule, CommonModule, KazumaMenuComponent, BagComponent, RulesComponent],
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

  showRules(){

    //диалог c правилами
    const GreetingConfig = new MatDialogConfig();

    GreetingConfig.width = '390px';  //450
    GreetingConfig.height = '560px'; //650
    GreetingConfig.autoFocus = false;
   
    this.dialog.open(RulesComponent, GreetingConfig);      

  }

  constructor(private dialog: MatDialog){}


}
