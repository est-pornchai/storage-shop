  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StorageComponent } from './storage/storage.component';


  
const routes: Routes = [
  {path: 'storage', component: StorageComponent}
];


@NgModule({
  declarations: [AppComponent, StorageComponent],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
  AgGridModule.withComponents([]),
   RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

