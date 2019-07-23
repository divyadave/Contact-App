import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from './contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: IContacts[], searchText: string): any[] {
    if (!contacts) return [];
    if (!searchText) return contacts;

    searchText = searchText.toLowerCase();

    return contacts.filter(it => {
      console.log(it);
      return it['firstName'].toLowerCase().includes(searchText)
    })

  }

}
