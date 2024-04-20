import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesWritten: string[] = [
    "I'd better expect a slap after every successful Steal. Beware, Kazuma. No need to die because of that."
  ];

  AddNote(note: string) {
    this.notesWritten.push(note);
  }

  constructor() { }
}
