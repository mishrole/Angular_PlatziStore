import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FlexLayoutModule
  ],
})

export class ContactModule {}
