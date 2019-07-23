import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { LabelDisplayComponent } from '../label-display/label-display.component';
import { ContactService } from '../contact.service';
import { IContacts } from '../contact';
import { ILabel } from '../label';
declare var UIkit: any;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit/* , AfterViewInit  */ {
  @Input() display;
  searchText;
  isModalOpen: boolean = false;
  contacts: IContacts[] = [];
  selectedContact: IContacts;
  selectedDetail: IContacts;
  contactDetails: IContacts[] = [];

  // @ViewChild (LabelDisplayComponent, {static: true}) label;


  constructor(private contactService: ContactService) {
    /* const foundLabelName = this.contacts.filter(data => data.labels.) */
    this.contacts = this.contactService.contacts;

    /*   console.log('Contacts Object:', this.contacts); */
  }
  /* ngAfterViewInit() {
    this.selectedList = this.label.selectedLabel;
    console.log(this.selectedList);

  } */

  ngOnInit() {
    UIkit.util.on('#formmodal', 'hide', () => {
      this.selectedContact = undefined;

    });
    UIkit.util.on('#contactdetail', 'hide', () => {
      this.selectedDetail = undefined;
    })



  }

  edit(data: IContacts) {
    this.selectedContact = data;
    console.log(this.selectedContact);
  }
  delete(id: number) {
    this.contacts = this.contactService.deleteContact(id);
  }
  details(data: IContacts) {
    this.selectedDetail = data;
    console.log(this.selectedDetail);
  }

  displayLabelName(event: string[]) {

    console.log('Event Details', event);
    console.log('Contact Details', this.contactDetails[0].labels);
    event.forEach((e) => {
      const foundIndex = this.contactDetails[0].labels.indexOf(e);
      this.contactDetails[0].labels.includes(e) ? this.contactDetails[0].labels.splice(foundIndex, 1) : this.contactDetails[0].labels.push(e);
    })
    event.length = 0;
  }

  selectedDetails(id: number, contactName: string, labels: string[]) {
    this.contactDetails = [];

    this.contactDetails.push({
      id: id,
      firstName: contactName,
      labels: labels
    });

  }

}
