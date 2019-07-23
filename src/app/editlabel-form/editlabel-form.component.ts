import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { ILabel } from '../label';
import { ContactService } from '../contact.service';
declare var UIkit: any;

@Component({
  selector: 'app-editlabel-form',
  templateUrl: './editlabel-form.component.html',
  styleUrls: ['./editlabel-form.component.scss']
})
export class EditlabelFormComponent implements OnInit, OnChanges {
  labelForm: FormGroup;
  labels: ILabel[] = [];
  isEditForm: boolean = false;
  @Input() editData: ILabel;

  constructor(private contactService: ContactService, private fb: FormBuilder) { }



  ngOnInit() {
    this.initForm();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.editData.currentValue != changes.editData.previousValue) {
      this.editDatacheck();
    }

  }
  initForm() {
    this.labelForm = this.fb.group({
      labelName: ['', Validators.required]
    });
    this.editDatacheck();
  }
  saveLabel() {
    this.labels = this.contactService.editLabel(this.editData.id, this.labelForm.value);
    UIkit.modal('#editlabelformmodal').hide();
    UIkit.notification({ message: 'Edited Successfully', status: 'success' });
  }
  cancelLabel() {
    this.labelForm.reset();
  }
  private editDatacheck() {
    this.labelForm.reset();
    if (this.editData) {
      this.isEditForm = true;
      this.labelForm.setValue({
        labelName: this.editData.labelName
      });

    }
  }

}

