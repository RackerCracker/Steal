import { Component, Input} from '@angular/core';
import { Location } from '../../services/location';

import { OverlayLocationComponent } from './overlay-location/overlay-location.component';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";


@Component({
  selector: 'app-location',
  standalone: true,
  imports: [OverlayLocationComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  @Input() location!: Location;

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = this.location; //передаем данные в диалог
    dialogConfig.height = '660px';
    dialogConfig.width = '1100px';
    dialogConfig.panelClass = 'overlay-location-dialog';
    dialogConfig.autoFocus = false;

    // dialogConfig.panelClass = "pic";

    const dialogRef = this.dialog.open(OverlayLocationComponent, dialogConfig);
}
  
  constructor(private dialog: MatDialog){}  
}
