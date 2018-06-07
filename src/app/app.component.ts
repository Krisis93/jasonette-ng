import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  onCheck1 () {
    var elemClass = document.getElementById("activecar");
    elemClass.classList.add("active");
    document.getElementById("activeupload").classList.remove("active");
    document.getElementById("activemap").classList.remove("active");
  }

  onCheck2 () {
    var elemClass = document.getElementById("activeupload");
    elemClass.classList.add("active");
    document.getElementById("activecar").classList.remove("active");
    document.getElementById("activemap").classList.remove("active");
  }
  onCheck3 (){
    var elemClass = document.getElementById("activemap");
    elemClass.classList.add("active");
    document.getElementById("activeupload").classList.remove("active");
    document.getElementById("activecar").classList.remove("active");
  }

  /*onCheck(){
    var elemClass1 = document.getElementById("carTab");
    var elemClass2 = document.getElementById("uploadTab");
    var elemClass3 = document.getElementById("mapTab");
    if (elemClass1.className = "active") {
      document.getElementById("activecar").style.backgroundColor = "#9ACD32";
      document.getElementById("activeupload").style.backgroundColor = "#332619";
      document.getElementById("activemap").style.backgroundColor = "#332619";
    } 
    if (elemClass2.className = "active") {
      document.getElementById("activeupload").style.backgroundColor = "#9ACD32";
      document.getElementById("activecar").style.backgroundColor = "#332619";
      document.getElementById("activemap").style.backgroundColor = "#332619";
    } 
    if (elemClass3.className = "active") {
      document.getElementById("activemap").style.backgroundColor = "#332619";
      document.getElementById("activecar").style.backgroundColor = "#9ACD32";
      document.getElementById("activeupload").style.backgroundColor = "#332619";
    }
  }*/
  
  /*onUpload () {
    var elemClass = document.getElementById("uploadTab");
    if (elemClass.className = "active") {
      document.getElementById("activeupload").style.backgroundColor = "#9ACD32";
    }
  }
  onMap (){
    var activeTab = document.getElementById("#mapTab");
    activeTab.classList.add("active");
  }*/
}
