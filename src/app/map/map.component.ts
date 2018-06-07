import { Component, OnInit } from '@angular/core';
import { marker } from './marker';
import { allCars } from '../car-list/all-cars';

@Component({
  selector: 'app-map',
  templateUrl: 'map.html',
  styleUrls: ['map.css']
})
export class MapComponent implements OnInit {

  latitude=56.951490;
  longitude=24.113304;

  markers = allCars;
  
  

  constructor() {  
    this.markers = this.getAllMarkers();  
  }  

  ngOnInit() {
  }

  getAllMarkers() {  
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {  
      localStorage.setItem('markers', JSON.stringify(this.markers));  
      return this.markers;  
    }  
    else {  
      var markers = JSON.parse(localStorage.getItem('markers'));  
      return markers;  
    }  
  
  }



}
