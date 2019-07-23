import { Component, OnInit, Input } from '@angular/core';
import { ILabel } from '../label';
import { ContactService } from '../contact.service';
import { IContacts } from '../contact';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  labels: ILabel[] = [];
  contacts: IContacts[] = [];
  selectedLabel: ILabel;

  constructor(private contactService: ContactService) {
    this.labels = this.contactService.labels;
    this.contacts = this.contactService.contacts;

  }
  edit(data: ILabel) {
    this.selectedLabel = data;
    console.log(this.selectedLabel);
  }


  ngOnInit() {


  }
  deleteLabel(id: number) {
    this.labels = this.contactService.deleteLabel(id);
  }

}
