import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [LayoutComponent, HeaderComponent, FooterComponent, ExponentialPipe,
    HighlightDirective]
})
export class SharedModule { }
