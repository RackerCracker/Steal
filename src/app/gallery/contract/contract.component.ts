import { Component} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.css'
})
export class ContractComponent {

  close() {
    this.dialogRef.close();
  }

  constructor( private dialogRef: MatDialogRef<ContractComponent>) {

  }

}
