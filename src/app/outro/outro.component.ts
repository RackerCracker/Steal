import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-outro',
  standalone: true,
  imports: [],
  templateUrl: './outro.component.html',
  styleUrl: './outro.component.css',
})
export class OutroComponent{

  start = false;

  go(){
    this.start = true;

    let audio = new Audio()
    audio.src = "https://github.com/RackerCracker/Steal/raw/main/src/assets/outro.mp3"
    audio.load();
    audio.play();
  }

}
