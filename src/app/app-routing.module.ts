import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {path: "form", component: FormComponent},
  {path: "form2", component: Form2Component},
  {path: "clients", component: AllClientsComponent},
  {path: "client/:id", component: ClientDetailComponent},
  {path: "edit/:id", component: EditClientComponent},
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
