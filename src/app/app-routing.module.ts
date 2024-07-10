import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MadrinhaComponent } from './pages/madrinha/madrinha.component';
import { PadrinhoComponent } from './pages/padrinho/padrinho.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'madrinhas', component:MadrinhaComponent},
  {path:'padrinhos', component:PadrinhoComponent},
  {path:'menu', component:MenuComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'lista-casamento', component:ListaCasamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
