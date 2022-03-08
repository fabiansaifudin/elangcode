import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { CodeComponent } from './code/code.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from '../shared/cards/cards.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    CodeComponent, 
    DetailsComponent, 
    AboutComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module
  ]
})
export class LayoutsModule { }
