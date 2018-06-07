(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, RoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/car-list/car-list.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var route = [
    {
        path: 'cars',
        component: _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__["CarListComponent"]
    },
    {
        path: 'upload',
        component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]
    },
    {
        path: 'map',
        component: _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(route)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponents = [_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__["CarListComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Styling */\n.navy{\n  text-align: center;\n  background-color: #332619;\n  opacity: 0.7;\n  height: 50px;\n  transition: ease-in-out 0.1s;\n}\n.navy:hover{\n  background-color: #9ACD32;\n  transition: ease-in-out 0.1s;\n}\n.navy:focus{\n  background-color: #9ACD32;\n  transition: ease-in-out 0.1s;\n}\n.navy>a{\n  display: block;\n  color: #fff;\n  margin-top: 13px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.navy>a:hover{\n  text-decoration: none;\n}\n.active{\n  background-color: #9ACD32;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 centered navy\" id=\"activecar\"><a routerLink=\"/cars\" class=\"tabs\" (click)=\"onCheck1()\" id=\"carTab\">Cars</a></div>\n  <div class=\"col-md-4 centered navy\" id=\"activeupload\"><a routerLink=\"/upload\" class=\"tabs\"  (click)=\"onCheck2()\" id=\"uploadTab\">Add your</a></div>\n  <div class=\"col-md-4 centered navy\" id=\"activemap\"><a routerLink=\"/map\" class=\"tabs\" (click)=\"onCheck3()\" id=\"mapTab\">Map</a></div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onCheck1 = function () {
        var elemClass = document.getElementById("activecar");
        elemClass.classList.add("active");
        document.getElementById("activeupload").classList.remove("active");
        document.getElementById("activemap").classList.remove("active");
    };
    AppComponent.prototype.onCheck2 = function () {
        var elemClass = document.getElementById("activeupload");
        elemClass.classList.add("active");
        document.getElementById("activecar").classList.remove("active");
        document.getElementById("activemap").classList.remove("active");
    };
    AppComponent.prototype.onCheck3 = function () {
        var elemClass = document.getElementById("activemap");
        elemClass.classList.add("active");
        document.getElementById("activeupload").classList.remove("active");
        document.getElementById("activecar").classList.remove("active");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingComponents"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["uselessPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAP2S7cTCcAtpUNr3AMwc6Jm5GadIs_Td4'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car-list/all-cars.ts":
/*!**************************************!*\
  !*** ./src/app/car-list/all-cars.ts ***!
  \**************************************/
/*! exports provided: allCars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCars", function() { return allCars; });
var allCars = [
    {
        carName: "Audi",
        fullName: "Audi RS6 Avant",
        year: 2016,
        engine: "Diesel",
        color: "Black",
        price: 15000,
        imgSrc: "https://smgmedia.blob.core.windows.net/images/114002/1024/audi-rs6-rs6-avant-performance-estate-petrol_36560878.jpg",
        city: "Valka",
        lat: 57.776041,
        lng: 26.002839
    },
    {
        carName: "BMW",
        fullName: "BMW M5 E60",
        year: 2017,
        engine: "Petrol",
        color: "White",
        price: 23000,
        imgSrc: "http://cdn.bmwblog.com/wp-content/uploads/BMW-M5-F10-Frozen-White-Individual-2012-071.jpg",
        city: "Valmiera",
        lat: 57.538466,
        lng: 25.426362
    },
    {
        carName: "Volkswagen",
        fullName: "Volkswagen Beetle",
        year: 2001,
        engine: "Diesel",
        color: "Red",
        price: 13043,
        imgSrc: "http://www.seriouswheels.com/pics-2000-2003/2000-VW-New-Beetle-Red-Rear-1280x960.jpg",
        city: "Riga",
        lat: 56.949649,
        lng: 24.105186
    },
    {
        carName: "Mercedes",
        fullName: "Mercedes-Benz S550",
        year: 2011,
        engine: "Petrol",
        color: "Grey",
        price: 32000,
        imgSrc: "http://4.bp.blogspot.com/-veQXx7LyO3o/UBgRUG0FroI/AAAAAAAAAME/hfAmVmyHw4g/s1600/Rev1.jpg",
        city: "Jelgava",
        lat: 56.651109,
        lng: 23.721354
    },
    {
        carName: "Volvo",
        fullName: "Volvo XC90",
        year: 2017,
        engine: "Diesel",
        color: "Blue",
        price: 45000,
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTLGr2Rush_sR2Rrrpvm5omdkoMZtxOyzZVleW5Um0djDeyWY0g",
        city: "Ventspils",
        lat: 57.393722,
        lng: 21.564707
    }
];


/***/ }),

/***/ "./src/app/car-list/car-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/car-list/car-list.component.ts ***!
  \************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _all_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-cars */ "./src/app/car-list/all-cars.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarListComponent = /** @class */ (function () {
    function CarListComponent() {
        this.cars = _all_cars__WEBPACK_IMPORTED_MODULE_1__["allCars"];
    }
    CarListComponent.prototype.ngOnInit = function () {
        var elemClass = document.getElementById("carTab");
        if (elemClass.className == "tabs") {
            console.log("yes");
            //document.getElementById("activecar").style.backgroundColor = "red";
        }
    };
    CarListComponent.prototype.onSelect = function (car) {
        this.selectedCar = car;
        var back = document.getElementById("background");
        back.style.display = "block";
        var pop = document.getElementById("pop-up");
        pop.style.display = "block";
    };
    CarListComponent.prototype.onDeselect = function (car) {
        var back = document.getElementById("background");
        back.style.display = "none";
        var pop = document.getElementById("pop-up");
        pop.style.display = "none";
        var chosencar = document.getElementsByClassName("selected");
        for (var i = 0; i < chosencar.length; i++) {
            if (chosencar[i].className = "selected") {
                chosencar[i].className = "thecar";
            } //second console output
        }
    };
    CarListComponent.prototype.onFilter = function () {
        var forms = document.getElementsByClassName("form-group");
        var btnDown = document.getElementById("filterBtn");
        var btnUp = document.getElementById("nofilterBtn");
        $('.filter').slideToggle(300);
        btnUp.style.visibility = "visible";
        btnDown.style.visibility = "hidden";
        for (var i = 0; i < forms.length; i++) {
            forms[i].style.visibility = "visible";
        }
    };
    CarListComponent.prototype.noFilter = function () {
        var forms = document.getElementsByClassName("form-group");
        var btnDown = document.getElementById("filterBtn");
        var btnUp = document.getElementById("nofilterBtn");
        $('.filter').slideToggle(300);
        btnUp.style.visibility = "hidden";
        btnDown.style.visibility = "visible";
        for (var i = 0; i < forms.length; i++) {
            forms[i].style.visibility = "hidden";
        }
    };
    CarListComponent.prototype.log = function (x) {
        console.log(x);
    };
    CarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! ./cars.html */ "./src/app/car-list/cars.html"),
            styles: [__webpack_require__(/*! ./cars.css */ "./src/app/car-list/cars.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/car-list/cars.css":
/*!***********************************!*\
  !*** ./src/app/car-list/cars.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navy{\n  background-color: #9ACD32 !important;\n}\n#car>img{\n  width: 220px;\n  height: 130px;\n  border-top: 2px solid #9ACD32;\n  border-left: 2px solid #9ACD32;\n  border-right: 2px solid #9ACD32;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.cars>li{\n  display: inline-block;\n  padding: 12px;\n  width: 250px;\n  height: 300px;\n  margin-left: 12px;\n  margin-top: 25px;\n  border-radius: 10px;\n  border: 3px solid #9ACD32\t;\n}\n.thecar{\n  color: #e3e3e3;\n  text-align: center;\n  margin-top: 20px;\n  transition: 0.5s;\n  transition-timing-function: ease-out;\n}\n.thecar>p{\n  letter-spacing: 1.5px;\n  margin-top: 14px;\n}\np#brand {\n  padding-top: 12px;\n}\n.info{\n  letter-spacing: 3px;\n}\n#background{\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #332619;\n  opacity: 0.7;\n  z-index: 1;\n}\n.infoback{\n  display: block;\n  width: 220px;\n  height: 138px;\n  background-color: #332619;\n  opacity: 0.8;\n  border-bottom:  2px solid #9ACD32;\n  border-right: 2px solid #9ACD32;\n  border-left: 2px solid #9ACD32;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n/* POP-UP WINDOW */\n#pop-up{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  height: 625px;\n  width: 500px;\n  background-color: #332619;\n  z-index: 2;\n  transition: 0.5s;\n  transition-timing-function: ease-in;\n}\n#pop-up>#car>img{\n  margin-top: 14px;\n  width: 480px;\n  height: 320px;\n  margin-left: 10px;\n  border-bottom: 2px solid #9ACD32;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n#pop-up>.full{\n  color: #fff;\n  text-align: center;\n  letter-spacing: 3.5px;\n  margin-top: 20px;\n}\nspan#exit {\n  display: inline-block;\n  text-align: center;\n  float: right;\n  margin-top: -18px;\n  margin-right: -18px;\n}\n#exit{\n  padding: 10px;\n  height: 45px;\n  width: 45px;\n  background-color: #fff;\n  border-radius: 50%;\n}\n/* Filter Form */\n.filter{\n  display: none;\n}\n.form-group{\n  display: inline-block;\n  float: left;\n  margin-left: 250px;\n\n}\n#nofilterBtn{\n  visibility: hidden;\n}\n.fclassBtn{\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  margin-right: -20px;\n  margin-left: -15px;\n  margin-top: 25px;\n}\n.fclassBtn>img{\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  margin-left: -3px;\n}\ninput{\n  background: none;\n  border: none;\n  outline: none;\n  border-bottom: 2px solid #9ACD32;\n}\ninput:focus {\n  border: none;\n  outline: none;\n  border-bottom: 2px solid #9ACD32;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/car-list/cars.html":
/*!************************************!*\
  !*** ./src/app/car-list/cars.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 centered\">\n    <button (click)=\"onFilter()\" id=\"filterBtn\" class=\"fclassBtn\">\n        <img src=\"../assets/images/arrow-down.png\" alt=\"filterIt\" id=\"btnImgFilter\">\n    </button>\n    <button (click)=\"noFilter()\" id=\"nofilterBtn\" class=\"fclassBtn\">\n        <img src=\"../assets/images/arrow-up.png\" alt=\"filterNo\" id=\"btnImgNoFilter\">\n    </button>\n  </div>\n  <div class=\"col-md-12 filter\">\n    <form id=\"filterCars\">\n      <div class=\"form-group\">\n        <label for=\"branding\">Brand name</label>\n        <input type=\"text\" [(ngModel)]=\"branding\" name=\"branding\" id=\"branding\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"engineType\">Color</label>\n        <input type=\"text\" [(ngModel)]=\"colorr\" name=\"colorr\" id=\"colorr\" class=\"form-control\">\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"row\">\n  <ul class=\"cars\">\n    <li *ngFor=\"let car of cars | uselessPipe: branding:colorr \" (click)=\"onSelect(car)\" [class.selected]=\"car === selectedCar\" class=\"thecar\">\n        <div id=\"car\">\n          <img src=\"{{car.imgSrc}}\" alt=\"{{car.carName}}\">\n        </div>\n        <div class=\"infoback\">\n          <p id=\"brand\" class=\"info\">{{car.carName}}</p>\n          <p id=\"color\" class=\"info\">{{car.color}}</p>\n          <p id=\"price\" class=\"info\">{{car.price}}$</p>\n        </div>\n    </li>\n  </ul>\n  <div *ngIf=\"selectedCar\">\n    <div id=\"background\"></div>\n    <div id=\"pop-up\">\n      <span id=\"exit\" (click)=\"onDeselect(selectedCar)\">X</span>\n      <div id=\"car\">\n        <img src=\"{{selectedCar.imgSrc}}\" alt=\"{{selectedCar.carName}}\">\n      </div>\n      <p id=\"brand\" class=\"full info\">Brand : {{selectedCar.fullName}}</p>\n      <p id=\"color\" class=\"full info\">Color : {{selectedCar.color}}</p>\n      <p id=\"year\" class=\"full info\">Year : {{selectedCar.year}}</p>\n      <p id=\"engine\" class=\"full info\">Engine type : {{selectedCar.engine}}</p>\n      <p id=\"price\" class=\"full sinfo\">Price : {{selectedCar.price}}$</p>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: uselessPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uselessPipe", function() { return uselessPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var uselessPipe = /** @class */ (function () {
    function uselessPipe() {
    }
    uselessPipe.prototype.transform = function (categories, branding, colorr) {
        if (branding == null)
            return categories;
        return categories.filter(function (category) {
            if (branding && category.carName.toLowerCase().indexOf(branding.toLowerCase()) === -1) {
                return false;
            }
            else if (colorr && category.color.toLowerCase().indexOf(colorr.toLowerCase()) === -1) {
                return false;
            }
            return categories;
        });
    };
    uselessPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uselessPipe'
        })
    ], uselessPipe);
    return uselessPipe;
}());



/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _car_list_all_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car-list/all-cars */ "./src/app/car-list/all-cars.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.latitude = 56.951490;
        this.longitude = 24.113304;
        this.markers = _car_list_all_cars__WEBPACK_IMPORTED_MODULE_1__["allCars"];
        this.markers = this.getAllMarkers();
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.getAllMarkers = function () {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            localStorage.setItem('markers', JSON.stringify(this.markers));
            return this.markers;
        }
        else {
            var markers = JSON.parse(localStorage.getItem('markers'));
            return markers;
        }
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.html */ "./src/app/map/map.html"),
            styles: [__webpack_require__(/*! ./map.css */ "./src/app/map/map.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/map.css":
/*!*****************************!*\
  !*** ./src/app/map/map.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\n  height: 600px;\n}\n.map{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\nh2{\n  letter-spacing: 1.5px;\n}\nimg{\n  width: 175px;\n  height: 100px;\n  border: 1px solid #333333;\n}\n.map-car{\n  margin-top: 10px;\n  letter-spacing: 1.5px;\n  font-size: 14pt;\n}\n.map-price{\n  margin-top: 10px;\n  letter-spacing: 1px;\n  font-size: 12pt;\n}\n.agm-info-window{\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/map/map.html":
/*!******************************!*\
  !*** ./src/app/map/map.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 map\">\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n    <agm-marker *ngFor=\"let m of markers\" [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n        <agm-info-window>  \n            <h2 class=\"map-head\">{{ m.city }}</h2>\n            <img src=\"{{m.imgSrc}}\" alt=\"{{m.carName}}\"><br>\n            <span class=\"map-car\">{{ m.fullName }}</span><br>\n            <span class=\"map-price\">{{ m.price }} EUR</span>\n        </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _car_list_all_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car-list/all-cars */ "./src/app/car-list/all-cars.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadComponent = /** @class */ (function () {
    //myCar = Cars;
    function UploadComponent() {
        this.newCar = _car_list_all_cars__WEBPACK_IMPORTED_MODULE_1__["allCars"];
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.getLatitudeLongitude = function (address) {
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
    };
    // Add new item to an array
    UploadComponent.prototype.saveCar = function (mycar) {
        /* var address = document.getElementById('usercarLocation').value;
         this.getLatitudeLongitude(address);*/
        if (this.newCar) {
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
            };
            this.newCar.push(enter);
        }
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.html */ "./src/app/upload/upload.html"),
            styles: [__webpack_require__(/*! ./upload.css */ "./src/app/upload/upload.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.css":
/*!***********************************!*\
  !*** ./src/app/upload/upload.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*UPLOAD PAGE STYLES*/\ndiv{\n  text-align: center;\n  margin-top: 0;\n}\n.form-group{\n  margin-top: 25px;\n}\nlabel{\n  display: block;\n  text-align: left;\n  margin-left: 33%;\n  letter-spacing: 2px;\n}\ninput{\n  size: 20em;\n  width: 34%;\n  background: none;\n  border: none;\n  border-bottom: 2px solid #9ACD32;\n}\ninput:focus {\n  border: none;\n  border-bottom: 2px solid #9ACD32;\n}\nbutton{\n  margin-top: 50px;\n  background-color: #9ACD32;\n  border-radius: 5px;\n  border-color: #9ACD32;\n  color: #fff;\n  width: 220px;\n  height: 45px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 50px;\n  box-shadow: 1px 1px 20px 5px #332619;\n  transition: ease-in-out 0.2s;\n}\nbutton:hover{\n  box-shadow: 1px 20px 20px 5px #332619;\n  transition: ease-in-out 0.2s;\n}\n/*ALERT BOX*/\n.false {\n  width: 368px;\n  height: 33px;\n  background-color: #FFB6C1;\n  display: block;\n  border-radius: 5px;\n  letter-spacing: 2px;\n  margin-left: 33%;\n  margin-top: 2px;\n  opacity: 0.7;\n}\n.ng-valid[required], .ng-valid[required]{\n  border-left: 5px solid #00FF00;\n}"

/***/ }),

/***/ "./src/app/upload/upload.html":
/*!************************************!*\
  !*** ./src/app/upload/upload.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <form #myForm=\"ngForm\" (ngSubmit)=\"saveCar(myForm)\" ngNativeValidate> \n    <div class=\"form-group\">\n      <label for=\"carName\">Brand name</label>\n      <input type=\"text\" id=\"userCarName\" name=\"carName\" required [(ngModel)]=\"carName\" #userCarName=\"ngModel\"  placeholder=\"Volvo,Mazda...\">\n      <div *ngIf=\"userCarName.errors && (userCarName.dirty || userCarName.touched)\" class=\"false\">\n        <div [hidden]=\"!userCarName.errors.required\">\n          Brand name is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"fullName\">Full name</label>\n      <input type=\"text\" id=\"userFullName\" name=\"fullName\" required [(ngModel)]=\"fullName\" #userFullName=\"ngModel\" placeholder=\"Volvo XC60, AUDI RS4...\" autocomplete=\"new-password\">\n      <div *ngIf=\"userFullName.errors && (userFullName.dirty || userFullName.touched)\" class=\"false\">\n        <div [hidden]=\"!userFullName.errors.required\">\n          Full name is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"year\">Year</label>\n      <input type=\"number\" id=\"userYear\" name=\"year\" required [(ngModel)]=\"year\" #userYear=\"ngModel\" placeholder=\"2000,1890,2018...\" autocomplete=\"new-password\">\n      <div *ngIf=\"userYear.errors && (userYear.dirty || userYear.touched)\" class=\"false\">\n        <div [hidden]=\"!userYear.errors.required\">\n          Cars year is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"engineType\">Engine Type</label>\n      <input type=\"text\" id=\"userEngineType\" name=\"engine\" required [(ngModel)]=\"engine\" #userEngineType=\"ngModel\" placeholder=\"Diesel,Hybrid,Petrol,Gas\" autocomplete=\"new-password\">\n      <div *ngIf=\"userEngineType.errors && (userEngineType.dirty || userEngineType.touched)\" class=\"false\">\n        <div [hidden]=\"!userEngineType.errors.required\">\n          Engine type is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"color\">Color</label>\n      <input type=\"text\" id=\"userColor\" name=\"color\" required [(ngModel)]=\"color\" #userColor=\"ngModel\" placeholder=\"Black,Yellow,Red...\" autocomplete=\"new-password\">\n      <div *ngIf=\"userColor.errors && (userColor.dirty || userColor.touched)\" class=\"false\">\n        <div [hidden]=\"!userColor.errors.required\">\n          Cars color is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input type=\"number\" id=\"userPrice\" name=\"price\" required [(ngModel)]=\"price\" #userPrice=\"ngModel\" placeholder=\"12000,1892,8999...\" autocomplete=\"new-password\">\n      <div *ngIf=\"userPrice.errors && (userPrice.dirty || userPrice.touched)\" class=\"false\">\n        <div [hidden]=\"!userPrice.errors.required\">\n          Cars price is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imgSrc\">Url of picture</label>\n      <input type=\"text\" id=\"userimgSrc\" name=\"imgSrc\" pattern=\"https?://.+\" [(ngModel)]=\"imgSrc\" #userimgSrc=\"ngModel\" placeholder=\"http://....\" autocomplete=\"new-password\">\n      <div *ngIf=\"userimgSrc.errors && (userimgSrc.dirty || userimgSrc.touched)\" class=\"false\">\n        <div [hidden]=\"!userimgSrc.errors.pattern\">\n          Cars Image URL!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"carLocation\">Url of picture</label>\n        <input type=\"text\" id=\"usercarLocation\" name=\"carLocation\" required [(ngModel)]=\"carLocation\" #usercarLocation=\"ngModel\" placeholder=\"Valka, Valmiera, Roja...\" autocomplete=\"new-password\">\n        <div *ngIf=\"usercarLocation.errors && (usercarLocation.dirty || usercarLocation.touched)\" class=\"false\">\n          <div [hidden]=\"!usercarLocation.errors.pattern\">\n            Cars location!\n          </div>\n        </div>\n      </div>\n    <button type=\"submit\">Save your car</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kozolins/AngularJS/angular-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map