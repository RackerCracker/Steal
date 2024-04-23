import { Component } from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
  
  close() {
    this.dialogRef.close();
  }

  constructor(private dialogRef: MatDialogRef<RulesComponent>) {}

}
