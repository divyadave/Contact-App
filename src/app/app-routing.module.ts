import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelFormComponent } from './label-form/label-form.component';
import { EditlabelFormComponent } from './editlabel-form/editlabel-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MoreContactFieldsComponent } from './more-contact-fields//more-contact-fields.component';
import { LabelDisplayComponent } from './label-display/label-display.component';


const routes: Routes = [
  { path: '', component: LabelFormComponent },
  { path: '', component: EditlabelFormComponent },
  { path: '', component: ContactFormComponent },
  { path: '', component: ContactListComponent },
  { path: '', component: ContactDetailComponent },
  { path: '', component: MoreContactFieldsComponent },
  { path: '', component: LabelDisplayComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
