import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { HttpClientModule } from '@angular/common/http';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { EditClientComponent } from './edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Form2Component,
    AllClientsComponent,
    ClientDetailComponent,
    EditClientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
