import { Injectable } from '@angular/core';
import { ILabel } from './label';
import { IContacts } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _labels: ILabel[] = [];
  private _contacts: IContacts[] = [];

  constructor() {

  }

  async addLabel(labels: ILabel) {
    const duplicateName = this._labels.find(el => el.labelName === labels.labelName);
    if (duplicateName) {
      throw Error('Dupilcate Label Exisit');
    }
    const newId = this._labels.length + 1;
    this._labels.push({
      id: newId,
      labelName: labels.labelName
    });
    return this._labels;

  }

  get labels() {
    console.log("this._labels", this._labels);
    return this._labels;
  }
  get contacts() {
    /* const foundLabel = this._contacts.find(label => label.labels); */
    /* console.log(this._contacts["labels"]); */
    return this._contacts;
  }

  deleteLabel(id: number) {
    const foundIndex = this._labels.findIndex(label => label.id === id);
    this._labels.splice(foundIndex, 1);
    return this._labels;
  }
  editLabel(id: number, labelName: string) {
    console.log(labelName, id);

    console.log(this._labels);
    /*  if (labelName.length <= 0) {
       console.log('Empty Label cannot be saved');
 
     } */
    let foundId = this._labels.findIndex(label => label.id === id);
    console.log(foundId);
    this._labels[foundId].labelName = labelName["labelName"];
    console.log(this._labels);
    return this._labels;
  }
  addContact(contact: IContacts) {
    const newId = this._contacts.length + 1;
    /* console.log(contact.phoneNum); */
    this._contacts.push({
      id: newId,
      firstName: contact.firstName,
      lastName: contact.lastName,
      companyName: contact.companyName,
      jobTitle: contact.jobTitle,
      email: contact.email,
      phoneNum: contact.phoneNum,
      labels: contact.labels,
      notes: contact.notes
    });

    return this._contacts;
  }
  deleteContact(id: number) {
    const foundIndex = this._contacts.findIndex(contact => contact.id === id);
    console.log(foundIndex);
    this._contacts.splice(foundIndex, 1);
    return this._contacts;
  }
  editContact(contacts: IContacts) {

  }

}

