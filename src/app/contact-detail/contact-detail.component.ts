import { Component, OnInit, Input } from '@angular/core';
import { IContacts } from '../contact';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() detail: IContacts;



  constructor() { }

  ngOnInit() {

  }


}
