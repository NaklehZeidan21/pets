import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpaseadorComponent } from './pages/loginpaseador/loginpaseador.component';
import { LoginusuarioComponent } from './pages/loginusuario/loginusuario.component';
import { RegisterpaseadorComponent } from './pages/registerpaseador/registerpaseador.component';
import { RegisterusuarioComponent } from './pages/registerusuario/registerusuario.component';
import { PagesComponent } from './pages/pages/pages.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { TestComponent } from './pages/test/test.component';


const routes: Routes = [
  {path: "",  component: PagesComponent, children:[
    {path: "dashboard",component: PagesComponent },
    {path: "",redirectTo: "/dashboard", pathMatch: "full"  }
  ]},
  
  {path: "loginpaseador",component: LoginpaseadorComponent },
  {path: "login",component: LoginusuarioComponent },
  {path: "registerpaseador",component: RegisterpaseadorComponent },
  {path: "register",component: RegisterusuarioComponent },
  {path: "test",component: TestComponent },
  {path: "**", component: NopagesfoundComponent},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
