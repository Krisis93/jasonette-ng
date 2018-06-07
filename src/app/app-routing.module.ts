import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { UploadComponent } from './upload/upload.component';
import { MapComponent } from './map/map.component';

const route:Routes = [
  {
    path: 'cars',
    component: CarListComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'map', 
    component: MapComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [CarListComponent,UploadComponent,MapComponent]