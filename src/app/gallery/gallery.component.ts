import { AfterContentInit, AfterViewInit, Component, DoCheck, inject, OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import { Girl } from '../services/girl';
import { GirlsService } from '../services/girls.service';

import { Location } from '../services/location';
import { LocationsService } from '../services/locations.service';

import { Kazuma } from '../services/kazuma';
import { KazumaService } from '../services/kazuma.service';

import { LoadingComponent } from '../loading/loading.component';
import { ContractComponent } from './contract/contract.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NudeComponent } from './nude/nude.component';
import { LocationComponent } from './location/location.component';
import { EndgameComponent } from './endgame/endgame.component';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NudeComponent, LocationComponent, TopMenuComponent, ContractComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'

})
export class GalleryComponent implements OnInit, DoCheck{

  // loading = true;

  greeting = true; //unnesessary
  theend = false;

  //импортируем (связываемся) со статами Кацумы в сервисе
  //будем следить, не сдох он или как
  kazumaService: KazumaService = inject(KazumaService);
  kazumaStats: Kazuma = this.kazumaService.kazumaStats;

  //импортируем полные списки девчонок и локаций, чтобы все их отобразить
  girlService: GirlsService = inject(GirlsService);
  girlsList = this.girlService.girlsList;

  locationsService: LocationsService = inject(LocationsService);
  // locationsList= this.locationsService.locationsList;
  locationsList!: Location[];


  constructor(private dialog: MatDialog){}

  ngOnInit() {

    //диалог для приветствия
    const GreetingConfig = new MatDialogConfig();

    GreetingConfig.width = '390px';  //450
    GreetingConfig.height = '560px'; //650
    GreetingConfig.autoFocus = false;

    if (this.greeting){ this.dialog.open(ContractComponent, GreetingConfig); }   
    
    //диалог для загрузки
    const LoadingConfig = new MatDialogConfig();

    LoadingConfig.maxWidth = '100vw';
    LoadingConfig.maxHeight = '100vh';
    LoadingConfig.height ='100%';
    LoadingConfig.width = '100%';

    LoadingConfig.panelClass = 'overlay-dialog';
    LoadingConfig.autoFocus = false;

    if (document.readyState != "complete") { 

      const dialogRef = this.dialog.open(LoadingComponent, LoadingConfig);

      window.addEventListener("load", (event) => {
        console.log("page is fully loaded");
        dialogRef.close();
      });

      dialogRef.afterOpened().subscribe(_ => {
        setTimeout(() => {
           dialogRef.close();
        }, 3000)
      })
    }

    //достаем список локаций и привязываем к местным переменным
    this.locationsService.goGetLocations().then((locationsList: Location[]) => {
      this.locationsList = locationsList;
      console.log(locationsList)
    });

 
  }

  ngDoCheck(){
    if ( (this.kazumaStats.health <= 0)&&(!this.theend) || (this.kazumaStats.panties === 8)&&(!this.theend) ){       //проверка на проигрыш или выигрыш
      this.theend = true;

      const TheEndConfig = new MatDialogConfig();   //диалог для конца игры
    
      TheEndConfig.width = '390px';
      TheEndConfig.height = '560px';
      TheEndConfig.autoFocus = false;
      TheEndConfig.disableClose = true;
      TheEndConfig.closeOnNavigation = true;

      this.dialog.open(EndgameComponent, TheEndConfig);      
    }    
  }


  
}
