import { Component, OnInit, Output, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { ILabel } from '../label';
import { EventEmitter } from '@angular/core';
declare var UIkit: any;

@Component({
  selector: 'app-label-display',
  templateUrl: './label-display.component.html',
  styleUrls: ['./label-display.component.scss']
})
export class LabelDisplayComponent implements OnInit {
  labels: ILabel[] = [];
  selectedLabel: string[] = [];
  isActive: boolean = false;
  @Output() passData: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() selectedContact;

  constructor(private contactService: ContactService) {





  }

  ngOnInit() {

    this.labels = this.contactService.labels;
    console.log("labels component", this.labels);

  }


  displayLabel(labelName: string) {
    this.selectedLabel.push(labelName);
    console.log(this.selectedLabel);
    this.passData.emit(this.selectedLabel);
    this.isActive = !this.isActive;
    console.log(this.isActive);

  }


}