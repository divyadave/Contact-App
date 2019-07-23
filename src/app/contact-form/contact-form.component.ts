import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { IContacts } from '../contact';
import { ILabel } from '../label';
import { phoneNumberValidator } from '../validators/phone-validators';
declare var UIkit: any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnChanges {
  contactForm: FormGroup;
  submitted: boolean;
  contacts: IContacts[] = [];
  isEditData: boolean = false;
  showForm: boolean = false;
  show: boolean = true;
  labels: ILabel[] = [];

  @Input() editData;
  @Input() test;

  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.labels = this.contactService.labels;
  }

  ngOnInit() {
    this.initForm();
    UIkit.util.on('#formmodal', 'show', () => {
      this.contactForm.reset();
      this.editDataCheck();

    });
    UIkit.util.on('#formmodal', 'hide', () => {
      this.contactForm.reset();

    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes.editData);
    if (changes.editData.currentValue !== changes.editData.previousValue) {
      console.log(this.editData);
      if (this.editData) {
        this.editDataCheck();
      } else {
        this.contactForm.reset();
      }
    }

  }
  initForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      jobTitle: [''],
      email: ['', [Validators.required, /* Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$") */ Validators.email]],
      labels: this.fb.array([]),
      phoneNum: this.fb.array([this.fb.group({ phone: ['', phoneNumberValidator] })]),
      notes: ['']
    });
    this.editDataCheck();
  }
  private editDataCheck() {
    this.contactForm.reset();
    if (this.editData) {
      console.log('function check:', this.editData);
      /* console.log('Contact Form:', this.contactForm); */

      this.isEditData = true;
      this.contactForm.setValue({
        firstName: this.editData.firstName,
        lastName: this.editData.lastName,
        companyName: this.editData.companyName,
        jobTitle: this.editData.jobTitle,
        email: this.editData.email,
        labels: this.editData.labels,
        phoneNum: this.editData.phoneNum,
        notes: this.editData.notes,
      });
      console.log(this.contactForm);

    }

  }

  get phoneNum() {
    return this.contactForm.controls.phoneNum as FormArray;
  }
  get email() {
    return this.contactForm.controls.email;
  }
  get firstName() {
    return this.contactForm.controls.firstName;
  }
  get lastName() {
    return this.contactForm.controls.lastName;
  }
  get companyName() {
    return this.contactForm.controls.companyName;
  }
  get jobTitle() {
    return this.contactForm.controls.jobTitle;
  }
  get notes() {
    return this.contactForm.controls.notes;
  }
  reset() {
    this.submitted = false;
    this.contactForm.reset();
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      UIkit.notification({ message: 'Empty Contact cannot be added', status: 'warning' });
      return;
    }
    this.submitted = true;
    this.contacts = this.contactService.addContact(this.contactForm.value);
    UIkit.notification({ message: 'Contacts Added Successfully', status: 'success' });
    UIkit.modal('#formmodal').hide();
  }
  addPhoneControls() {
    console.log(this.phoneNum);
    this.phoneNum.push(this.fb.group({ phone: '' }));
  }
  removePhoneControls(index) {
    if (index > 0) {
      this.phoneNum.removeAt(index);
    }
    else {
      this.phoneNum.reset();
    }

  }
  clearEmailIdControl() {
    this.email.reset();
  }
  clearNameControl() {
    this.firstName.reset();
    this.lastName.reset();
  }
  clearCompanyControl() {
    this.companyName.reset();
  }
  clearJobTitleControl() {
    this.jobTitle.reset();
  }
  clearNotesControl() {
    this.notes.reset();
  }
  toggleField() {
    this.show = false;
    this.showForm = !this.showForm;
  }
  toggleLess() {
    this.showForm = false;
    this.show = !this.show;

  }
  onChange(labelName: string, isChecked: boolean) {
    const labelArray = <FormArray>this.contactForm.controls.labels;
    if (isChecked) {
      labelArray.push(new FormControl(labelName));
      console.log(labelArray);
    }
    else {
      const labelIndex = labelArray.controls.findIndex(label => label.value === labelName)
      console.log(labelIndex);
      labelArray.removeAt(labelIndex);
    }


  }


}
