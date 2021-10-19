import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor() {}
  contactName: string;
  contactEmail: string;
  contactMessage: string;
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

    let name = document.getElementById('contactName') as HTMLElement;
    let email = document.getElementById('contactEmail') as HTMLElement;
    let message = document.getElementById('contactMessage') as HTMLElement;
    name.innerHTML = '';
    email.innerHTML = '';
    message.innerHTML = '';
  }
  submitAnimation(
    contactName: string = '',
    contactEmail: string = '',
    contactMessage: string = ''
  ) {
    setTimeout(() => {
      console.log(contactName, contactEmail, contactMessage);

      if (contactName.length >= 4) {
        let regexp = new RegExp(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (regexp.test(contactEmail)) {
          if (contactMessage.length >= 12) {
            this.sendMessage('MESSAGE SEND!', '#0084ff');
          } else {
            //Error message lower than 12
            this.sendMessage(
              'MESSAGE FIELD LOWER THAN 12 CHARACTERS',
              '#BE2402'
            );
          }
        } else {
          //Error email
          this.sendMessage('INVALID EMAIL', '#BE2402');
        }
      } else {
        //Error nombre inferior a 4 caracteres
        this.sendMessage('NAME LOWER THAN 4 CHARACTERS', '#BE2402');
      }
    }, 100);
  }
}
