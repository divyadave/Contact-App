import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LabelFormComponent } from './label-form/label-form.component';
import { EditlabelFormComponent } from './editlabel-form/editlabel-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MoreContactFieldsComponent } from './more-contact-fields/more-contact-fields.component';
import { LabelDisplayComponent } from './label-display/label-display.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LabelFormComponent,
    EditlabelFormComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactDetailComponent,
    MoreContactFieldsComponent,
    LabelDisplayComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
