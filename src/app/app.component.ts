import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      price: "0",
      plan: 'Free',
      users: "10",
      storage: "2",
      support: 'Email',
      button: 'Sign up for free',
      customClass: 'custom-style1'
    },
    {
      price: "15",
      plan: 'Pro',
      users: "20",
      storage: "10",
      support: 'Priority email',
      button: 'Get started',
      customClass: 'custom-style2'
    },
    {
      price: "29",
      plan: 'Enterprise',
      users: "30",
      storage: "15",
      support: 'Phone and email',
      button: 'Contact us',
      customClass: 'custom-style3'
    }
  ];
}
