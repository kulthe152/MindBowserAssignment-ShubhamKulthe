import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { SignupManagerComponent } from './components/signup-manager/signup-manager.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:"login",
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path:"signup",
        component:SignupManagerComponent,
        pathMatch:'full'
    },
    {
        path:"employees",
        component:DashboardComponent,
        pathMatch:'full',
        canActivate:[AuthGuard]
    },
    {
        path:"create-employee",
        component:CreateEmployeeComponent,
        pathMatch:'full',
    },
    {
        path:"update-employee/:id",
        component:UpdateEmployeeComponent
    }

];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}