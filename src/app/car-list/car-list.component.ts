import { Component, OnInit } from '@angular/core';
import { Cars } from './cars';
import { allCars } from './all-cars';
import { FormattedMessageChain } from '@angular/compiler';


@Component({
  selector: 'app-car-list',
  templateUrl: 'cars.html',
  styleUrls: ['cars.css'],
})
export class CarListComponent implements OnInit {

  
  cars = allCars;
  selectedCar: Cars;

  constructor() { }
  
  ngOnInit() {
    var elemClass = document.getElementById("carTab");
    if (elemClass.className == "tabs") {
      console.log("yes");
      //document.getElementById("activecar").style.backgroundColor = "red";
    } 
  }

  onSelect(car: Cars): void {
    this.selectedCar = car;
    var back = document.getElementById("background");
    back.style.display = "block";
    var pop = document.getElementById("pop-up");
    pop.style.display = "block";
  }
  onDeselect(car){
    var back = document.getElementById("background");
    back.style.display = "none";
    var pop = document.getElementById("pop-up");
    pop.style.display = "none";
    var chosencar = document.getElementsByClassName("selected");
    for (var i = 0; i < chosencar.length; i++) {
      if (chosencar[i].className = "selected" ) {
        chosencar[i].className = "thecar";
      } //second console output
    }
  }
  onFilter(){
    var forms = document.getElementsByClassName("form-group") as HTMLCollectionOf<HTMLElement>;
    var btnDown = document.getElementById("filterBtn");
    var btnUp = document.getElementById("nofilterBtn");
    $('.filter').slideToggle(300);
    btnUp.style.visibility = "visible";
    btnDown.style.visibility = "hidden";
    for (var i = 0; i < forms.length; i++) {
      forms[i].style.visibility = "visible";
    }
  }
  noFilter(){
    var forms = document.getElementsByClassName("form-group") as HTMLCollectionOf<HTMLElement>;
    var btnDown = document.getElementById("filterBtn");
    var btnUp = document.getElementById("nofilterBtn");
    $('.filter').slideToggle(300);
    btnUp.style.visibility = "hidden";
    btnDown.style.visibility = "visible";
    for (var i = 0; i < forms.length; i++){
      forms[i].style.visibility = "hidden";
    }
  }

  log(x){
    console.log(x);
  }
}
