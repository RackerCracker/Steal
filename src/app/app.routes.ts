import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OutroComponent } from './outro/outro.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'outro',
      component: OutroComponent
    }
  ];