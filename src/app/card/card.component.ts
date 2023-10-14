import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() price:string = "";
 @Input() plan:string = "";
 @Input() users:string = "";
 @Input() storage:string = "";
 @Input() support:string = "";
 @Input() button:string = "";
 @Input() customClass: string="";
}
