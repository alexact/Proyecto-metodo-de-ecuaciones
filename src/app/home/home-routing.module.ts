import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodosEComponent} from '../metodos-e/metodos-e.component';
import {BiseccionComponent } from '../biseccion/biseccion.component';
import {RectangulosComponent} from  '../rectangulos/rectangulos.component';
import {SecanteComponent} from '../secante/secante.component';
const routes: Routes = [
{path: 'metodos', component: MetodosEComponent},
{path: 'biseccion', component: BiseccionComponent},
{path: 'rectangulos', component: RectangulosComponent},
{path: 'secante',component: SecanteComponent}
];
export const routableComponents =[MetodosEComponent];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
