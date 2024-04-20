import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LoginComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
   
}
