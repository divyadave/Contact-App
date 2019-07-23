import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-contact-fields',
  templateUrl: './more-contact-fields.component.html',
  styleUrls: ['./more-contact-fields.component.scss']
})
export class MoreContactFieldsComponent implements OnInit {
  @Input() showField: boolean;

  constructor() { }

  ngOnInit() {
  }

}
