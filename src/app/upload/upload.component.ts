import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allCars } from '../car-list/all-cars';
import { Cars} from '../car-list/cars';
import { stringify } from 'querystring';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.html',
  styleUrls: ['upload.css']
})
export class UploadComponent implements OnInit {

  
  newCar = allCars;
  //myCar = Cars;

  constructor() { 
    
  }

  ngOnInit() {
  }
  
  getLatitudeLongitude(address) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address || 'Ferrol, Galicia, Spain';
    // Initialize the Geocoder
   /* geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback(results[0]);
            }
        });
    } */
}

  // Add new item to an array
  saveCar(mycar){
   /* var address = document.getElementById('usercarLocation').value;
    this.getLatitudeLongitude(address);*/

    if(this.newCar){
      var enter = {
        carName: mycar.value.carName,
        fullName: mycar.value.fullName,
        year: mycar.value.year,
        engine: mycar.value.engine,
        color: mycar.value.color,
        price: mycar.value.price,
        imgSrc: mycar.value.imgSrc,
        city: mycar.value.city,
        lat: mycar.value.lat,
        lng: mycar.value.lng

      }
      this.newCar.push(enter); 
    }
  }
}
