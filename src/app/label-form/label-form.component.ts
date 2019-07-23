import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { ILabel } from '../label';
import { ContactService } from '../contact.service';
declare var UIkit: any;

@Component({
  selector: 'app-label-form',
  templateUrl: './label-form.component.html',
  styleUrls: ['./label-form.component.scss']
})
export class LabelFormComponent implements OnInit {
  labelForm: FormGroup;
  labels: ILabel[] = [];


  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.labelForm = this.fb.group({
      labelName: ['', Validators.required]
    });
  }
  async saveLabel() {
    if (this.labelForm.invalid) {
      UIkit.notification({ message: 'Empty Label cannot be added', status: 'warning' });
      return;
    }
    try {
      this.labels = await this.contactService.addLabel(this.labelForm.value);

    } catch (err) {
      UIkit.notification({ message: 'Duplicates Exists', status: 'red' });

    }
    console.log(this.labels);
    this.labelForm.reset();
    UIkit.modal('#labelformmodal').hide();

  }
  cancelLabel() {
    this.labelForm.reset();
  }

}
