import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //форма, которая управляет логином-паролем на главной странице
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  
  //что происходит при нажатии кнопки отправить - вызов функции с параметрами из формы
  submitLogPass() {
    this.onClick(
      this.loginForm.value.login ?? '',
      this.loginForm.value.password ?? '',
    );
  }

  //сама функция, которая что-то делает
  onClick(login: string, password: string){
    console.log(`${login}`)
    console.log(`${password}`)
  }




}
