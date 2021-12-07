import { CustomerFetchingComponent } from './customer-fetching/customer-fetching.component';
import { CustomerMasterPassportComponent } from './customer-master-passport/customer-master-passport.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'CustomerCreation',
    component:CustomerMasterPassportComponent
  },
  {
    path:'CustomerFetching',
    component:CustomerFetchingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
