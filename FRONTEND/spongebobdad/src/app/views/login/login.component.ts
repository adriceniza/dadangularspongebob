import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  loginUser: string = '';
  loginPassword: string = '';

  ngOnInit(): void {}
  sendMessage(text: string, color: string) {
    let messageSend = document.querySelector('#messagesend') as HTMLElement;

    messageSend.innerHTML = text;
    messageSend.style.color = color;
    setTimeout(() => {
      messageSend.style.visibility = 'visible';
    }, 100);

    setTimeout(() => {
      messageSend.style.visibility = 'hidden';
    }, 2000);

    let user = document.getElementById('loginUser') as HTMLElement;
    let password = document.getElementById('loginPassword') as HTMLElement;
    user.innerHTML = '';
    password.innerHTML = '';
  }
  loginSubmit(loginUser: string = '', loginPassword: string = '') {
    console.log(loginUser, loginPassword);
    if (loginUser.length > 0) {
      if (loginPassword.length > 0) {
        if (loginPassword === 'password' && loginUser === 'username') {
          this.sendMessage('LOGIN SUCCESSFULLY!', '#0084ff');
        } else {
          this.sendMessage('WRONG USER OR PASSWORD', '#BE2402');
        }
      } else {
        this.sendMessage('PLEASE ENTER A PASSWORD', '#BE2402');
      }
    } else {
      this.sendMessage('PLEASE ENTER A USERNAME', '#BE2402');
    }
  }
}
