import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layouts/home/home.component';
import { DetailsComponent } from './layouts/details/details.component';
import { AboutComponent } from './layouts/about/about.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                component: HomeComponent },
    { path: 'baca',                component: DetailsComponent },
    { path: 'tentang_kami',        component: AboutComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
