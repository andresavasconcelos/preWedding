(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\preWedding\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    mostrarModalMadrinhas() {
        window.location.href = '/madrinhas';
    }
    mostrarModalPadrinhos() {
        window.location.href = '/padrinhos';
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 158, vars: 0, consts: [[1, "home"], [1, "banner-direita", "tamBanner"], [1, "banner-esquerda"], [1, "banner-esquerda-inferior"], [1, "container"], [1, "row"], [1, "centered-text", "up-position"], [1, "mobile-text"], [1, "centered-text", "middle-position"], [1, "centered-text", "down-position", "col-12"], [1, "frase-com-linhas"], [1, ""], [1, "container", "menuHome"], [1, "col-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#igreja", 1, "linkMenu"], ["src", "assets\\img\\home\\igreja.png", "alt", "", 1, "imgMenuHome", "imgMenu"], [1, "card-text", "textHomeP"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#festa", 1, "linkMenu"], ["src", "assets\\img\\home\\festa.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#presente", 1, "linkMenu"], ["src", "assets\\img\\home\\presente.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["data-bs-toggle", "modal", "data-bs-target", "#padrinhos", 1, "col-3"], ["href", "#", 1, "linkMenu"], ["src", "assets\\img\\home\\padrinhos.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["id", "igreja", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "modalH"], ["id", "exampleModalLabel", 1, "modal-title", "text-center"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["src", "assets\\img\\candelaria.png", "alt", "...", 1, "card-img-top", "imgModal"], [1, "card-text", "place", "text-center"], [1, "card-text", "address", "text-center"], [1, "modal-footer", "modalF"], ["href", "", "target", "_blank"], ["type", "button", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-files-o"], ["href", "https://m.uber.com/ul/?action=setPickup&client_id=92wsifyVsfgPdvUuR_xBSuKcKaSKlWB1cDxri9ak&pickup=my_location&dropoff[formatted_address]=R.%20Castro%20Alves%2C%20781%20-%20Cer%C3%A2mica%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%20Brasil&dropoff[latitude]=-23.626986&dropoff[longitude]=-46.568577", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-dark"], [1, "fa-brands", "fa-uber"], ["href", "https://www.google.com/maps?q=R.+Castro+Alves,+781,+Cer\u00E2mica,+S\u00E3o+Caetano+do+Sul,+SP,+09540-030", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-success"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["href", "https://ul.waze.com/ul?place=ChIJi8k9O8RczpQRjZvL79qp43w&ll=-23.62698590%2C-46.56857680&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-waze"], [1, "fa-brands", "fa-waze"], ["id", "festa", "tabindex", "-1", "aria-labelledby", "festaModal", "aria-hidden", "true", 1, "modal", "fade"], ["id", "festaModal", 1, "modal-title", "text-center"], ["src", "assets\\img\\masterday.jpeg", "alt", "...", 1, "card-img-top", "imgModal"], [1, "modal-footer", "modalF", "text-center"], ["href", "https://m.uber.com/ul/?action=setPickup&client_id=TidzCZv9VG_iUw_k5Rppnm2D7RBo5ebTIAqtw8Rf&pickup=my_location&dropoff[formatted_address]=Buffet%20Master%20Day%20-%20Rua%20Cear%C3%A1%20-%20Funda%C3%A7%C3%A3o%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%20Brasil&dropoff[latitude]=-23.603977&dropoff[longitude]=-46.573312", "target", "_blank"], ["href", "https://www.google.com/maps/dir//Buffet+Master+Day+-+R.+Cear%C3%A1,+363+-+Funda%C3%A7%C3%A3o,+S%C3%A3o+Caetano+do+Sul+-+SP,+09520-410/@-23.6291213,-46.5880677,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce5cc188e54379:0xf03539dab808e5e6!2m2!1d-46.5733115!2d-23.6039771!3e0?entry=ttu", "target", "_blank"], ["href", "https://ul.waze.com/ul?preview_venue_id=205391388.2054110488.25886420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "target", "_blank"], ["id", "presente", "tabindex", "-1", "aria-labelledby", "presenteModal", "aria-hidden", "true", 1, "modal", "fade"], [1, "row", "rowPresentes"], ["src", "assets\\img\\home\\listaPresente\\amazon.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\magalu.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\casasBahias.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\pernambucanas.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\precolandia.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\casaRiachuelo.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\camicado.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\lojasmel.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["id", "padrinhos", "tabindex", "-1", "aria-labelledby", "padrinhosModal", "aria-hidden", "true", 1, "modal", "fade"], ["id", "padrinhosModal", 1, "modal-title", "text-center"], [1, "container", "itensPadrinhos"], [1, "row", "text-center"], [1, "col-6"], [1, "linkMenu", 3, "click"], ["src", "assets\\img\\home\\vestido.png", "alt", "", 1, "imgPadrinhos"], [1, "card-text", "textPadrinhos"], ["src", "assets\\img\\home\\terno.png", "alt", "", 1, "imgPadrinhos"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CONVIDAMOS VOC\u00CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PARA CELEBRAR O NOSSO CASAMENTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Andresa & Vin\u00EDcius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "09 Novembro, 2024 \u00E0s 18:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Igreja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Festa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Vamos \u00E0 Igreja!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Par\u00F3quia Nossa Senhora Da Candel\u00E1ria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "R. Castro Alves, 781 - Cer\u00E2mica,S\u00E3o Caetano do Sul ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Copiar Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Vou de uber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Abrir no Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Abrir no Waze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Vamos \u00E0 Festa!!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Buffet Master Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "R. Cear\u00E1, 363 - Funda\u00E7\u00E3o, S\u00E3o Caetano do Sul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Copiar Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Vou de uber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Vou de Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Vou de Waze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Encontre aqui a nossa lista de presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "h5", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_149_listener() { return ctx.mostrarModalMadrinhas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Sou madrinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_154_listener() { return ctx.mostrarModalPadrinhos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sou padrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  background-image: url('flor1.png');\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: top;\r\n}\r\n.home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\r\n  width: 12%;\r\n  height: 100%;\r\n  background-image: url('cantoInferiorDireito.png');\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  position: fixed;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-position: bottom;\r\n}\r\n.centered-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position: absolute;\r\n}\r\n.centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 100px;\r\n  color: #787da3;\r\n  margin: 0;\r\n}\r\n.centered-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 0;\r\n}\r\n.up-position[_ngcontent-%COMP%]{\r\n  color: #666c8b;\r\n  text-transform: uppercase;\r\n  font-size: 25px;\r\n  font-family: 'Raleway', sans-serif;\r\n  top: 10%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n  font-weight: bold;\r\n}\r\n.up-position[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 0;\r\n}\r\n.middle-position[_ngcontent-%COMP%]{\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n  font-family: 'Sacramento', cursive;\r\n}\r\n.down-position[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  font-size: 20px;\r\n  font-family: 'Raleway', sans-serif;\r\n  top: 75%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n}\r\n.contagem[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n.item[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n.valor[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  color: #6f6f64;\r\n}\r\n.unidade[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #666;\r\n  font-weight: bold;\r\n}\r\n.menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n  width: 45%;\r\n}\r\n.ltsPresente[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  line-height: 0;\r\n  max-width: 100%;\r\n  text-transform: none;\r\n  color: #15187f;\r\n  padding-left: inherit;\r\n}\r\n.ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n  width: 45%;\r\n}\r\n.menuHome[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: currentColor;\r\n  text-decoration: none;\r\n}\r\n.menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  margin-top: 36px;\r\n  line-height: 0;\r\n  max-width: 100%;\r\n  text-transform: none;\r\n  color: #15187f;\r\n}\r\n.frase-com-linhas[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n  font-size: 36px;\r\n  font-family: 'Raleway', sans-serif;\r\n  border-top: 1px solid #666;\r\n  border-bottom: 1px solid #666;\r\n  display: inline-block;\r\n  padding: 26px;\r\n}\r\n.modalF[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin: 2px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .hidden-mobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\r\n    width: 40%; \r\n    height: 100%; \r\n    position: absolute;\r\n    top: 0;\r\n    background-image: url('flor1.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain; \r\n    background-position: top; \r\n  }\r\n\r\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 95px;\r\n    color: #787da3;\r\n    margin: 0;\r\n  }\r\n\r\n  .down-position[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    font-family: 'Raleway', sans-serif;\r\n    transform: translate(-50%, -50%); \r\n    z-index: 1; \r\n  }\r\n\r\n  .frase-com-linhas[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    margin-bottom: 40px;\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n    padding-left: inherit;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n    width: 100%;\r\n  }\r\n\r\n  .ltsPresente[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n    padding-left: inherit;\r\n  }\r\n\r\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n    width: 100%;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    margin-top: 20px;\r\n    line-height: 0; \r\n    max-width: 100%; \r\n    text-transform: none;\r\n    color: #15187f;\r\n  }\r\n\r\n  .up-position[_ngcontent-%COMP%] {\r\n    color: #666c8b;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    font-family: 'Raleway', sans-serif;\r\n    top: 10%;\r\n    z-index: 1;\r\n    font-weight: bold;\r\n    text-align: right;\r\n  }\r\n\r\n  .ltsPresente[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n  }\r\n\r\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n    width: 100%;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 1450px) {\r\n  .hidden-mobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    height: 100%;\r\n    top: 0;\r\n    background-image: url('flor1.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: top;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 95px;\r\n    color: #787da3;\r\n    margin: 0;\r\n  }\r\n\r\n  .down-position[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    font-family: 'Raleway', sans-serif;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n    padding: 0;\r\n  }\r\n\r\n  .frase-com-linhas[_ngcontent-%COMP%] {\r\n    text-transform: none;\r\n    font-size: 26px;\r\n    font-family: 'Raleway', sans-serif;\r\n    border-top: 1px solid #666;\r\n    border-bottom: 1px solid #666;\r\n    display: inline-block;\r\n    padding: 26px;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    width: 40%;\r\n  }\r\n\r\n  .ltsPresente[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n  }\r\n\r\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    width: 40%;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    margin-top: 12px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n  }\r\n\r\n  .up-position[_ngcontent-%COMP%] {\r\n    color: #666c8b;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    font-family: 'Raleway', sans-serif;\r\n    top: 10%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n    font-weight: bold;\r\n  }\r\n}\r\n.btn-waze[_ngcontent-%COMP%]{\r\n  background-color: #05c8f7;\r\n  border-color: #05c8f7;\r\n}\r\n.modalP[_ngcontent-%COMP%]{\r\n  padding-top: 20px;\r\n  text-align: center;\r\n}\r\n.place[_ngcontent-%COMP%]{\r\n  margin-bottom: 6px;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: bold;\r\n}\r\n.address[_ngcontent-%COMP%]{\r\n  padding: 0 12px 0 12px;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n.imgModal[_ngcontent-%COMP%]{\r\n  padding: 12px;\r\n  padding-top: 0;\r\n}\r\n.modalH[_ngcontent-%COMP%]{\r\n  border-bottom: none;\r\n}\r\n.modalF[_ngcontent-%COMP%]{\r\n  display: table-column-group;\r\n  flex-shrink: 0;\r\n  border-top: none;\r\n  text-align: center;\r\n  flex-wrap: wrap-reverse;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)* .5);\r\n  background-color: var(--bs-modal-footer-bg);\r\n  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);\r\n  border-bottom-right-radius: var(--bs-modal-inner-border-radius);\r\n  border-bottom-left-radius: var(--bs-modal-inner-border-radius);\r\n}\r\n.rowPresentes[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\r\n.itensPadrinhos[_ngcontent-%COMP%]   .imgPadrinhos[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  text-decoration: none;\r\n}\r\n.itensPadrinhos[_ngcontent-%COMP%]   .textPadrinhos[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  color: #15187f;\r\n  margin-bottom: 20px;\r\n  margin-top: 10px;\r\n}\r\n.linkMenu[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\r\n@media (max-width: 400px){\r\n  .home[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 100%;\r\n  }\r\n\r\n  .up-position[_ngcontent-%COMP%]{\r\n    color: #666c8b;\r\n    text-transform: uppercase;\r\n    font-size: 10px;\r\n    font-family: 'Raleway', sans-serif;\r\n    top: 10%;\r\n    z-index: 1;\r\n    font-weight: bold;\r\n    text-align: right;\r\n  }\r\n\r\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 70px;\r\n    color: #787da3;\r\n    margin: 0;\r\n  }\r\n\r\n  .frase-com-linhas[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    margin-bottom: 0;\r\n    margin-top: 67px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    margin-top: 20px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .menuHome[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    line-height: 0;\r\n    max-width: 100%;\r\n    text-transform: none;\r\n    color: #15187f;\r\n    padding-left: inherit;\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .place[_ngcontent-%COMP%]{\r\n    margin-bottom: 6px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .address[_ngcontent-%COMP%]{\r\n    padding: 0 12px 0 12px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\r\n    font-size: 11px;\r\n  }\r\n\r\n  .modalF[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 2px;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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LHFCQUFxQjtBQUN2QjtBQUdBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEVzdGlsbyBwYXJhIG8gYmFubmVyICovXHJcbi5ob21lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaG9tZSAuYmFubmVyLWRpcmVpdGEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9mbG9yMS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxufVxyXG5cclxuLmhvbWUgLmJhbm5lci1lc3F1ZXJkYS1pbmZlcmlvciB7XHJcbiAgd2lkdGg6IDEyJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9jYW50b0luZmVyaW9yRGlyZWl0by5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNlbnRlcmVkLXRleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgY29sb3I6ICM3ODdkYTM7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dCBwIHtcclxuICBsaW5lLWhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi51cC1wb3NpdGlvbntcclxuICBjb2xvcjogIzY2NmM4YjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udXAtcG9zaXRpb24gcCB7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5taWRkbGUtcG9zaXRpb257XHJcbiAgdG9wOiA0MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmRvd24tcG9zaXRpb257XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICB0b3A6IDc1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbnRhZ2VtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udmFsb3Ige1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzZmNmY2NDtcclxufVxyXG5cclxuLnVuaWRhZGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1lbnVIb21lIC5pbWdNZW51e1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5sdHNQcmVzZW50ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjb2xvcjogIzE1MTg3ZjtcclxuICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sdHNQcmVzZW50ZSAuaW1nUHJlc2VudGV7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLm1lbnVIb21lIGF7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51SG9tZSAudGV4dEhvbWVQe1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjb2xvcjogIzE1MTg3ZjtcclxufVxyXG5cclxuLmZyYXNlLWNvbS1saW5oYXMge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAyNnB4O1xyXG59XHJcblxyXG4ubW9kYWxGIGJ1dHRvbntcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLyogLy8gc2hvdyBpdCBvbiBkZXZpY2VzIHdpdGggbWF4IG9mIDc2NyBweCBhbmQgbG93ZXIgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmhpZGRlbi1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ob21lIC5iYW5uZXItZGlyZWl0YSB7XHJcbiAgICB3aWR0aDogNDAlOyAvKiBBanVzdGUgY29uZm9ybWUgbmVjZXNzw6FyaW8gKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogVXNhbmRvIDEwMCUgcGFyYSBjb2JyaXIgYSBhbHR1cmEgZG8gZWxlbWVudG8gcGFpICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL2Zsb3IxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAvKiBBbHRlcmFkbyBkZSAnY292ZXInIHBhcmEgJ2NvbnRhaW4nICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7IC8qIFBvc2ljaW9uYSBhIGltYWdlbSBuYSBwYXJ0ZSBpbmZlcmlvciAqL1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkLXRleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiA5NXB4O1xyXG4gICAgY29sb3I6ICM3ODdkYTM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZG93bi1wb3NpdGlvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIE1vdmUgYSBkaXYgcGFyYSBvIGNlbnRybyAqL1xyXG4gICAgei1pbmRleDogMTsgLyogRGVmaW5lIHVtYSBvcmRlbSBkZSBlbXBpbGhhbWVudG8gc3VwZXJpb3IgKG5hIGZyZW50ZSBkYXMgaW1hZ2VucykgKi9cclxuICB9XHJcblxyXG4gIC5mcmFzZS1jb20tbGluaGFzIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAubWVudUhvbWUgLmltZ01lbnV7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUgLmltZ1ByZXNlbnRle1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC50ZXh0SG9tZVB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDsgLyogQWx0ZXJlIG8gdmFsb3IgY29uZm9ybWUgbmVjZXNzw6FyaW8sIDEgc2VyaWEgbyB2YWxvciBub3JtYWwgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTsgLyogVGV4dG8gbsOjbyB1bHRyYXBhc3NhcsOhIGEgbGFyZ3VyYSBkYSBjYWl4YSAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzE1MTg3ZjtcclxuICB9XHJcblxyXG4gIC51cC1wb3NpdGlvbiB7XHJcbiAgICBjb2xvcjogIzY2NmM4YjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC5sdHNQcmVzZW50ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzE1MTg3ZjtcclxuICB9XHJcblxyXG4gIC5sdHNQcmVzZW50ZSAuaW1nUHJlc2VudGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAuaGlkZGVuLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmJhbm5lci1kaXJlaXRhIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL2Zsb3IxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmJhbm5lci1lc3F1ZXJkYS1pbmZlcmlvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkLXRleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiA5NXB4O1xyXG4gICAgY29sb3I6ICM3ODdkYTM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZG93bi1wb3NpdGlvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5mcmFzZS1jb20tbGluaGFzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgfVxyXG5cclxuICAubWVudUhvbWUgLmltZ01lbnV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIC5sdHNQcmVzZW50ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzE1MTg3ZjtcclxuICB9XHJcblxyXG4gIC5sdHNQcmVzZW50ZSAuaW1nUHJlc2VudGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZSAudGV4dEhvbWVQe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjMTUxODdmO1xyXG4gIH1cclxuXHJcbiAgLnVwLXBvc2l0aW9uIHtcclxuICAgIGNvbG9yOiAjNjY2YzhiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5idG4td2F6ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjOGY3O1xyXG4gIGJvcmRlci1jb2xvcjogIzA1YzhmNztcclxufVxyXG5cclxuLm1vZGFsUHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGFjZXtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFkZHJlc3N7XHJcbiAgcGFkZGluZzogMCAxMnB4IDAgMTJweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbWdNb2RhbHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ubW9kYWxIe1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbEZ7XHJcbiAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJzLW1vZGFsLXBhZGRpbmcpIC0gdmFyKC0tYnMtbW9kYWwtZm9vdGVyLWdhcCkqIC41KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1tb2RhbC1mb290ZXItYmcpO1xyXG4gIGJvcmRlci10b3A6IHZhcigtLWJzLW1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLW1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1icy1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1icy1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuLnJvd1ByZXNlbnRlc3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbnNQYWRyaW5ob3MgLmltZ1BhZHJpbmhvc3tcclxuICB3aWR0aDogNDUlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLml0ZW5zUGFkcmluaG9zIC50ZXh0UGFkcmluaG9zIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMTUxODdmO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxpbmtNZW51e1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgLmhvbWV7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnVwLXBvc2l0aW9ue1xyXG4gICAgY29sb3I6ICM2NjZjOGI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQtdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBjb2xvcjogIzc4N2RhMztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5mcmFzZS1jb20tbGluaGFze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6IDY3cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC5pbWdNZW51e1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC50ZXh0SG9tZVB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgfVxyXG5cclxuICAuaG9tZSAuYmFubmVyLWVzcXVlcmRhLWluZmVyaW9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWVudUhvbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzE1MTg3ZjtcclxuICAgIHBhZGRpbmctbGVmdDogaW5oZXJpdDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAucGxhY2V7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYWRkcmVzc3tcclxuICAgIHBhZGRpbmc6IDAgMTJweCAwIDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsRiBidXR0b257XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
function calcularTempoRestante() {
    const dataAlvo = new Date('2024-11-09T21:30:00Z');
    const agora = new Date();
    console.log("agora: " + agora);
    console.log("dataAlvo: " + dataAlvo);
    const diferencaEmSegundos = Math.floor((dataAlvo.getTime() - agora.getTime()) / 1000);
    const dias = Math.floor(diferencaEmSegundos / (60 * 60 * 24));
    const horas = Math.floor((diferencaEmSegundos % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((diferencaEmSegundos % (60 * 60)) / 60);
    const segundos = diferencaEmSegundos % 60;
    return {
        dias,
        horas,
        minutos,
        segundos
    };
}
function atualizarContagemRegressiva() {
    const contagem = calcularTempoRestante();
    const diasElement = document.getElementById('dias');
    const horasElement = document.getElementById('horas');
    const minutosElement = document.getElementById('minutos');
    const segundosElement = document.getElementById('segundos');
    if (diasElement) {
        diasElement.innerText = contagem.dias.toString().padStart(2, '0');
    }
    if (horasElement) {
        horasElement.innerText = contagem.horas.toString().padStart(2, '0');
    }
    if (minutosElement) {
        minutosElement.innerText = contagem.minutos.toString().padStart(2, '0');
    }
    if (segundosElement) {
        segundosElement.innerText = contagem.segundos.toString().padStart(2, '0');
    }
}
// Atualize a contagem a cada segundo
setInterval(atualizarContagemRegressiva, 1000);


/***/ }),

/***/ "5d6d":
/*!******************************************************!*\
  !*** ./src/app/sharepage/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/madrinhas", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/padrinhos", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "/contact", "routerLinkActive", "active-link", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%]{\r\n  color: rgb(52, 111, 223);\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n  background-color: #2298d5;\r\n  background-image: none;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsZ0RBQWdEO0FBQ2xEIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLWxpbmt7XHJcbiAgY29sb3I6IHJnYig1MiwgMTExLCAyMjMpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjk4ZDU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B4DE":
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 2, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R5iZ":
/*!******************************************************!*\
  !*** ./src/app/pages/madrinha/madrinha.component.ts ***!
  \******************************************************/
/*! exports provided: MadrinhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MadrinhaComponent", function() { return MadrinhaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sharepage/navbar/navbar.component */ "5d6d");



class MadrinhaComponent {
    constructor() { }
    ngOnInit() {
    }
}
MadrinhaComponent.ɵfac = function MadrinhaComponent_Factory(t) { return new (t || MadrinhaComponent)(); };
MadrinhaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MadrinhaComponent, selectors: [["app-madrinha"]], decls: 96, vars: 0, consts: [[1, "madrinha"], [1, "blocoInicial"], [1, "title"], [1, "container"], [1, "row"], [1, "text-center", "text-madrinhas"], [1, "mobile-text"], ["src", "assets\\img\\florMeioAzul.png", "alt", "", 1, "florAzulMeio"], [1, "agradecimento"], [1, "comCarinho"], [1, "meioCores"], [1, "reservei", "text-center"], [1, "referenciaTexto", "text-center"], [1, "coracao", "texto"], [1, "text-center", "serenity"], [1, "row", "text-center"], [1, "col-4"], ["src", "assets\\img\\home\\coracao\\coracao2.png", "alt", "", 1, "imgCoracao"], ["src", "assets\\img\\home\\coracao\\coracao1_old.png", "alt", "", 1, "imgCoracao"], ["src", "assets\\img\\home\\coracao\\coracao1.png", "alt", "", 1, "imgCoracao"], [1, "blocoFinal"], [1, "row", "text-center", "final"], [1, "vestido"], [1, "voceLinda"], [1, "col-12", "col-sm-4"], ["src", "assets\\img\\madrinha\\ref1.png", "alt", "", 1, "imgVestido"], ["href", "https://www.lovissa.com.br/produtos/vestido-longo-de-festa-karine-azul-serenity/", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btnVestido"], ["src", "assets\\img\\madrinha\\ref2.png", "alt", "", 1, "imgVestido", "imgWithoutLink"], ["src", "assets\\img\\madrinha\\ref3.png", "alt", "", 1, "imgVestido"], ["href", "https://www.lovissa.com.br/produtos/vestido-de-festa-jade-azul-serenity-escuro-azul-niagra-turqueza/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref4.png", "alt", "", 1, "imgVestido"], ["href", "https://www.lovissa.com.br/produtos/vestido-de-festa-talita-bordado-satin-azul-serenity/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref5.png", "alt", "", 1, "imgVestido"], ["href", "https://www.lovissa.com.br/produtos/vestido-de-festa-helena-azul-serenity1/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref6.png", "alt", "", 1, "imgVestido"], ["href", "https://www.lovissa.com.br/produtos/vestido-de-festa-cassia-new-azul-serenity/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref7.png", "alt", "", 1, "imgVestido"], ["href", "https://www.impressionmodafesta.com.br/produto/vestido-de-festa-longo-plus-size-azul-serenity-7/\n                  ", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref8.png", "alt", "", 1, "imgVestido"], ["href", "https://www.impressionmodafesta.com.br/produto/vestido-de-festa-longo-plus-size-serenity-manga/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref9.png", "alt", "", 1, "imgVestido"], ["href", "https://www.impressionmodafesta.com.br/produto/vestido-de-festa-longo-plus-size-azul-serenity-13/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref10.png", "alt", "", 1, "imgVestido"], ["href", "https://www.impressionmodafesta.com.br/produto/vestido-de-festa-longo-plus-size-serenity-pedraria/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref11.png", "alt", "", 1, "imgVestido"], ["href", "https://www.impressionmodafesta.com.br/produto/vestido-de-festa-longo-plus-size-azul-serenity-manga/", "target", "_blank"], ["src", "assets\\img\\madrinha\\ref12.png", "alt", "", 1, "imgVestido"], ["href", "https://nathaliabrasileiro.com.br/produtos/1112-azul-serenity-plus-size/", "target", "_blank"]], template: function MadrinhaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "muito obrigada por aceitar a miss\u00E3o de ser a nossa madrinha e compartilhar esse momento t\u00E3o lindo das nossas vidas!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "com carinho, Andresa e Vin\u00EDcius ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "reservei esse espa\u00E7o para te ajudar na escolha das cores seu vestido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "abaixo est\u00E1 a refer\u00EAncia da cor dos vestidos das madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "cor serenity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "vestidos para se inspirar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "quero te ver linda e deslumbrante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "visitar loja (+ fotos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".madrinha[_ngcontent-%COMP%]{\r\n  background-image: none!important;\r\n  background-color: #eef1fa;\r\n\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n\r\n}\r\n\r\n.blocoInicial[_ngcontent-%COMP%]{\r\n  background-color: #eef1fa;\r\n}\r\n\r\n.text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-family: 'Imperial Script', cursive;\r\n  font-size: 80px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.coracao[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.coracao[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n.imgCoracao[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n}\r\n\r\n.florAzulMeio[_ngcontent-%COMP%]{\r\n  width: 60px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.comCarinho[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 200;\r\n  font-style: italic;\r\n  color: #000;\r\n  font-size: 17px;\r\n}\r\n\r\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #000;\r\n  margin-top: 25px;\r\n}\r\n\r\n.meioCores[_ngcontent-%COMP%]{\r\n  background-color: #badcf17d;\r\n}\r\n\r\n.texto[_ngcontent-%COMP%]{\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n.reservei[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #000;\r\n  margin-top: 15px;\r\n}\r\n\r\n.meioCores[_ngcontent-%COMP%]{\r\n  \r\n  padding: 40px 40px 1px 40px;\r\n}\r\n\r\n.serenity[_ngcontent-%COMP%]{\r\n  margin: 50px;\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #007dbe;\r\n  font-size: 50px;\r\n}\r\n\r\n.referenciaTexto[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 200;\r\n  font-style: normal;\r\n  color: #7f7f7f;;\r\n  font-size: 20px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.blocoFinal[_ngcontent-%COMP%]{\r\n  padding: 40px;\r\n}\r\n\r\n.final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #000;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.voceLinda[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #7f7f7f;\r\n  font-size: 16px;\r\n  margin-top: 5px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.imgVestido[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\n\r\n.btnVestido[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  color: #0089b1;\r\n  color: #fff;\r\n  background-color: #0089b1;\r\n  border-color: none;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .imgCoracao[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 1450px) {\r\n  .text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Imperial Script', cursive;\r\n    font-size: 60px;\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .florAzulMeio[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    font-size: 16px;\r\n    margin-top: 25px;\r\n  }\r\n\r\n  .comCarinho[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    font-family: \"IBM Plex Sans\", sans-serif;\r\n    font-weight: 200;\r\n    \r\n    color: #7a7979;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .imgCoracao[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  .reservei[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .serenity[_ngcontent-%COMP%]{\r\n    margin: 50px;\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #007dbe;\r\n    font-size: 40px;\r\n  }\r\n\r\n  .referenciaTexto[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 200;\r\n    font-style: normal;\r\n    color: #7f7f7f;;\r\n    font-size: 16px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .blocoFinal[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .voceLinda[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #7f7f7f;\r\n    font-size: 14px;\r\n    margin-top: 5px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .imgWithoutLink[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px){\r\n  .text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Imperial Script', cursive;\r\n    font-size: 60px;\r\n    margin-top: 30px;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .florAzulMeio[_ngcontent-%COMP%]{\r\n    width: 17%;\r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .comCarinho[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    font-family: \"IBM Plex Sans\", sans-serif;\r\n    font-weight: 200;\r\n    font-style: italic;\r\n    color: #000;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-top: 25px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .reservei[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-top: 15px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .referenciaTexto[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 200;\r\n    font-style: normal;\r\n    color: #7f7f7f;;\r\n    font-size: 12px;\r\n    margin-top: 10px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .serenity[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #007dbe;\r\n    font-size: 25px;\r\n  }\r\n\r\n  .imgCoracao[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .voceLinda[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #7f7f7f;\r\n    font-size: 16px;\r\n    margin-top: 5px;\r\n    margin-bottom: 40px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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LGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoibWFkcmluaGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWRyaW5oYXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWZhO1xyXG5cclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG59XHJcblxyXG4uYmxvY29JbmljaWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYxZmE7XHJcbn1cclxuXHJcblxyXG4udGV4dC1tYWRyaW5oYXMgaDF7XHJcbiAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29yYWNhb3tcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uY29yYWNhbyBoM3tcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbWdDb3JhY2Fve1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5mbG9yQXp1bE1laW97XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmNvbUNhcmluaG97XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLm1laW9Db3Jlc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFkY2YxN2Q7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5yZXNlcnZlaXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubWVpb0NvcmVze1xyXG4gIC8qIHBhZGRpbmc6IDQwcHg7ICovXHJcbiAgcGFkZGluZzogNDBweCA0MHB4IDFweCA0MHB4O1xyXG59XHJcblxyXG4uc2VyZW5pdHl7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDA3ZGJlO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLnJlZmVyZW5jaWFUZXh0b3tcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzdmN2Y3Zjs7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ibG9jb0ZpbmFse1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5maW5hbCBoM3tcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi52b2NlTGluZGF7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uaW1nVmVzdGlkb3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG59XHJcblxyXG4uYnRuVmVzdGlkb3tcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICMwMDg5YjE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODliMTtcclxuICBib3JkZXItY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaW1nQ29yYWNhb3tcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBjZWx1bGFyIGNvbSB0ZWxhIGdyYW5kZSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAudGV4dC1tYWRyaW5oYXMgaDF7XHJcbiAgICBmb250LWZhbWlseTogJ0ltcGVyaWFsIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZsb3JBenVsTWVpb3tcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5hZ3JhZGVjaW1lbnRvIGg1e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbUNhcmluaG97XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXHJcbiAgICBjb2xvcjogIzdhNzk3OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5pbWdDb3JhY2Fve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmVzZXJ2ZWl7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuc2VyZW5pdHl7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwN2RiZTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcblxyXG4gIC5yZWZlcmVuY2lhVGV4dG97XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3Zjs7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJsb2NvRmluYWx7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbmFsIGgze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC52b2NlTGluZGF7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3ZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nV2l0aG91dExpbmt7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAudGV4dC1tYWRyaW5oYXMgaDF7XHJcbiAgICBmb250LWZhbWlseTogJ0ltcGVyaWFsIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5mbG9yQXp1bE1laW97XHJcbiAgICB3aWR0aDogMTclO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29tQ2FyaW5ob3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAucmVzZXJ2ZWl7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucmVmZXJlbmNpYVRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5zZXJlbml0eXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDA3ZGJlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmltZ0NvcmFjYW97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5maW5hbCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudm9jZUxpbmRhe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MadrinhaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-madrinha',
                templateUrl: './madrinha.component.html',
                styleUrls: ['./madrinha.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'codeWeb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharepage/navbar/navbar.component */ "5d6d");
/* harmony import */ var _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sharepage/footer/footer.component */ "Zsuj");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/menu/menu.component */ "B4DE");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/madrinha/madrinha.component */ "R5iZ");
/* harmony import */ var _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/padrinho/padrinho.component */ "p+Iq");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_8__["MadrinhaComponent"],
        _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_9__["PadrinhoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                    _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_8__["MadrinhaComponent"],
                    _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_9__["PadrinhoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zsuj":
/*!******************************************************!*\
  !*** ./src/app/sharepage/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 32, vars: 0, consts: [[1, "container-fluid", "footer", "fixar-rodape"], [1, "row"], [1, "col-lg-6"], [1, "container", "menuHome", "hidden"], [1, "col-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#igreja", 1, "linkMenu"], ["src", "assets\\img\\home\\igreja.png", "alt", "", 1, "imgMenuHome", "imgMenu"], [1, "card-text", "textHomeP"], ["href", "#", 1, "linkMenu"], ["src", "assets\\img\\home\\festa.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["src", "assets\\img\\home\\presente.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["src", "assets\\img\\home\\padrinhos.png", "alt", "", 1, "florMeio", "imgMenu"], [1, "col-lg-2"], ["href", "", "target", "_blank"], [1, "bi", "bi-instagram"], [1, "bi", "bi-twitter"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Desenvolvido pela noiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Igreja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Festa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lista de Presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n  color: rgb(255, 255, 255);\r\n  font-size: 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  color: rgb(255, 255, 255);\r\n  text-decoration: none;\r\n  padding: 0px 5px;\r\n  font-size: 18px;;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n  color: yellow;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\n  padding: 0px 10px;\r\n}\r\n\r\n.fixar-rodape[_ngcontent-%COMP%]\r\n{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100px;\r\n  overflow: hidden;\r\n  \r\n  background-color:rgb(181 148 148);\r\n  padding: 20px 10px;\r\n  bottom: 0;\r\n  left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7O0FBRUg7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0FBQ1QiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZm9vdGVyXHJcbntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDY2LCA2MCwgNjApO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufSAqL1xyXG5cclxuaDF7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxuICBmb250LXNpemU6IDE4cHg7O1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbml7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5maXhhci1yb2RhcGVcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoNjYsIDYwLCA2MCk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTgxIDE0OCAxNDgpO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "p+Iq":
/*!******************************************************!*\
  !*** ./src/app/pages/padrinho/padrinho.component.ts ***!
  \******************************************************/
/*! exports provided: PadrinhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadrinhoComponent", function() { return PadrinhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sharepage/navbar/navbar.component */ "5d6d");



class PadrinhoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PadrinhoComponent.ɵfac = function PadrinhoComponent_Factory(t) { return new (t || PadrinhoComponent)(); };
PadrinhoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PadrinhoComponent, selectors: [["app-padrinho"]], decls: 52, vars: 0, consts: [[1, "madrinha"], [1, "blocoInicial"], [1, "title"], [1, "container"], [1, "row"], [1, "text-center", "text-padrinhos"], [1, "mobile-text"], ["src", "assets\\img\\florMeioAzul.png", "alt", "", 1, "florAzulMeio"], [1, "agradecimento"], [1, "comCarinho"], [1, "meioCores"], [1, "reservei", "text-center"], [1, "referenciaTexto", "text-center"], [1, "coracao", "texto"], [1, "text-center", "cinza"], [1, "row", "text-center"], [1, "col-4"], ["src", "assets\\img\\home\\coracao\\coracao_cinza1.png", "alt", "", 1, "imgCoracao"], ["src", "assets\\img\\home\\coracao\\coracao_cinza3.png", "alt", "", 1, "imgCoracao"], ["src", "assets\\img\\home\\coracao\\coracao_cinza2.png", "alt", "", 1, "imgCoracao"], [1, "blocoFinal"], [1, "row", "text-center", "final"], [1, "Terno"], [1, "voceLinda"], [1, "col-12", "col-sm-4"], ["src", "assets\\img\\padrinho\\ref1.png", "alt", "", 1, "imgTerno", "imgWithoutLink"], ["src", "assets\\img\\padrinho\\ref2.png", "alt", "", 1, "imgTerno", "imgWithoutLink"], ["src", "assets\\img\\padrinho\\ref3.png", "alt", "", 1, "imgTerno", "imgWithoutLink"], ["src", "assets\\img\\padrinho\\ref4.png", "alt", "", 1, "imgTerno", "imgWithoutLink"], ["src", "assets\\img\\padrinho\\ref5.png", "alt", "", 1, "imgTerno", "imgWithoutLink"], ["src", "assets\\img\\padrinho\\ref6.png", "alt", "", 1, "imgTerno", "imgWithoutLink"]], template: function PadrinhoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "muito obrigada por aceitar a miss\u00E3o de ser a nosso padrinho e compartilhar esse momento t\u00E3o lindo das nossas vidas!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "com carinho, Andresa e Vin\u00EDcius ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "reservei esse espa\u00E7o para te ajudar na escolha das cores seu terno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "abaixo est\u00E1 a refer\u00EAncia da cor do terno dos padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "cinza claro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ternos para se inspirar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "para arrasar junto com a madrinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".madrinha[_ngcontent-%COMP%]{\r\n  background-image: none!important;\r\n  background-color: #eef1fa;\r\n\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n\r\n}\r\n\r\n.blocoInicial[_ngcontent-%COMP%]{\r\n  background-color: #eef1fa;\r\n}\r\n\r\n.text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-family: 'Imperial Script', cursive;\r\n  font-size: 80px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.coracao[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.coracao[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n.imgCoracao[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n}\r\n\r\n.florAzulMeio[_ngcontent-%COMP%]{\r\n  width: 60px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.comCarinho[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 200;\r\n  font-style: italic;\r\n  color: #000;\r\n  font-size: 17px;\r\n}\r\n\r\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #000;\r\n  margin-top: 25px;\r\n}\r\n\r\n.meioCores[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  \r\n  background-color: #e7ecfc;\r\n}\r\n\r\n.texto[_ngcontent-%COMP%]{\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n.reservei[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #000;\r\n  margin-top: 15px;\r\n}\r\n\r\n.meioCores[_ngcontent-%COMP%]{\r\n  \r\n  padding: 40px 40px 1px 40px;\r\n}\r\n\r\n.cinza[_ngcontent-%COMP%]{\r\n  margin: 50px;\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #717171;\r\n  font-size: 50px;\r\n}\r\n\r\n.referenciaTexto[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 200;\r\n  font-style: normal;\r\n  color: #7f7f7f;;\r\n  font-size: 20px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.blocoFinal[_ngcontent-%COMP%]{\r\n  padding: 40px;\r\n}\r\n\r\n.final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #000;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.voceLinda[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  color: #7f7f7f;\r\n  font-size: 16px;\r\n  margin-top: 5px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.imgTerno[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btnTerno[_ngcontent-%COMP%]{\r\n  font-family: \"Montserrat Alternates\", sans-serif;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  color: #0089b1;\r\n  color: #fff;\r\n  background-color: #0089b1;\r\n  border-color: none;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .imgCoracao[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 1450px) {\r\n\r\n  .text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Imperial Script', cursive;\r\n    font-size: 60px;\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .florAzulMeio[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    font-size: 16px;\r\n    margin-top: 25px;\r\n  }\r\n\r\n  .comCarinho[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    font-family: \"IBM Plex Sans\", sans-serif;\r\n    font-weight: 200;\r\n    \r\n    color: #7a7979;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .imgCoracao[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  .reservei[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .cinza[_ngcontent-%COMP%]{\r\n    margin: 50px;\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #717171;\r\n    font-size: 40px;\r\n  }\r\n\r\n  .referenciaTexto[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 200;\r\n    font-style: normal;\r\n    color: #7f7f7f;;\r\n    font-size: 16px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .blocoFinal[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .voceLinda[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #7f7f7f;\r\n    font-size: 14px;\r\n    margin-top: 5px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .imgWithoutLink[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px){\r\n  .text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Imperial Script', cursive;\r\n    font-size: 60px;\r\n    margin-top: 30px;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .florAzulMeio[_ngcontent-%COMP%]{\r\n    width: 17%;\r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .comCarinho[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    font-family: \"IBM Plex Sans\", sans-serif;\r\n    font-weight: 200;\r\n    font-style: italic;\r\n    color: #000;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-top: 25px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .reservei[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-top: 15px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .referenciaTexto[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 200;\r\n    font-style: normal;\r\n    color: #7f7f7f;;\r\n    font-size: 12px;\r\n    margin-top: 10px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .cinza[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #717171;\r\n    font-size: 25px;\r\n  }\r\n\r\n  .imgCoracao[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .voceLinda[_ngcontent-%COMP%]{\r\n    font-family: \"Montserrat Alternates\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    color: #7f7f7f;\r\n    font-size: 16px;\r\n    margin-top: 5px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFRiIsImZpbGUiOiJwYWRyaW5oby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hZHJpbmhhe1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYxZmE7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbn1cclxuXHJcbi5ibG9jb0luaWNpYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmYTtcclxufVxyXG5cclxuXHJcbi50ZXh0LXBhZHJpbmhvcyBoMXtcclxuICBmb250LWZhbWlseTogJ0ltcGVyaWFsIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb3JhY2Fve1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5jb3JhY2FvIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmltZ0NvcmFjYW97XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmZsb3JBenVsTWVpb3tcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29tQ2FyaW5ob3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uYWdyYWRlY2ltZW50byBoNXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ubWVpb0NvcmVze1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNiYWRjZjE3ZDsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1N2Q7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTdkOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2VjZmM7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5yZXNlcnZlaXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubWVpb0NvcmVze1xyXG4gIC8qIHBhZGRpbmc6IDQwcHg7ICovXHJcbiAgcGFkZGluZzogNDBweCA0MHB4IDFweCA0MHB4O1xyXG59XHJcblxyXG4uY2luemF7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjNzE3MTcxO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLnJlZmVyZW5jaWFUZXh0b3tcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzdmN2Y3Zjs7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ibG9jb0ZpbmFse1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5maW5hbCBoM3tcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi52b2NlTGluZGF7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uaW1nVGVybm97XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idG5UZXJub3tcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICMwMDg5YjE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODliMTtcclxuICBib3JkZXItY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaW1nQ29yYWNhb3tcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBjZWx1bGFyIGNvbSB0ZWxhIGdyYW5kZSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuXHJcbiAgLnRleHQtcGFkcmluaG9zIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5mbG9yQXp1bE1laW97XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuYWdyYWRlY2ltZW50byBoNXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIC5jb21DYXJpbmhve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xyXG4gICAgY29sb3I6ICM3YTc5Nzk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuaW1nQ29yYWNhb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlc2VydmVpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNpbnphe1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAucmVmZXJlbmNpYVRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5ibG9jb0ZpbmFse1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcblxyXG4gIC5maW5hbCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAudm9jZUxpbmRhe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZ1dpdGhvdXRMaW5re1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgLnRleHQtcGFkcmluaG9zIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuZmxvckF6dWxNZWlve1xyXG4gICAgd2lkdGg6IDE3JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbUNhcmluaG97XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5hZ3JhZGVjaW1lbnRvIGg1e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc2VydmVpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZmVyZW5jaWFUZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmOztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2luemF7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIC5pbWdDb3JhY2Fve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZmluYWwgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnZvY2VMaW5kYXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PadrinhoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-padrinho',
                templateUrl: './padrinho.component.html',
                styleUrls: ['./padrinho.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/madrinha/madrinha.component */ "R5iZ");
/* harmony import */ var _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/padrinho/padrinho.component */ "p+Iq");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu/menu.component */ "B4DE");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");










const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'madrinhas', component: _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_3__["MadrinhaComponent"] },
    { path: 'padrinhos', component: _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_4__["PadrinhoComponent"] },
    { path: 'menu', component: _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map