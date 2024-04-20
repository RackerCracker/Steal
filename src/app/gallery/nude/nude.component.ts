import { Component, Input} from '@angular/core';
import { Girl } from '../../services/girl';

import { OverlayComponent } from './overlay/overlay.component';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nude',
  standalone: true,
  imports: [OverlayComponent, NgIf],
  templateUrl: './nude.component.html',
  styleUrl: './nude.component.css'
})
export class NudeComponent {

  @Input() girl!: Girl;

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = this.girl; //передаем данные в диалог
    dialogConfig.height = '660px'; //600
    dialogConfig.width = '1100px'; //1000
    dialogConfig.panelClass = 'overlay-dialog';
    dialogConfig.autoFocus = false;
    dialogConfig.closeOnNavigation = true;

    const dialogRef = this.dialog.open(OverlayComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => { 
          this.girl = data 
          console.log(this.girl)
        }
    );
  }
  
  constructor(private dialog: MatDialog){}  
}
