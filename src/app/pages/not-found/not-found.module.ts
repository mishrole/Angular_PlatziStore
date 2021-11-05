import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    NotFoundRoutingModule,
    CommonModule
  ],
})

export class NotFoundModule {}
