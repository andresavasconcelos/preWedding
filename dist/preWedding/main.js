"use strict";
(self["webpackChunkpreWedding"] = self["webpackChunkpreWedding"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/madrinha/madrinha.component */ 8614);
/* harmony import */ var _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/padrinho/padrinho.component */ 1998);
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu/menu.component */ 6658);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ 3881);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ 1163);
/* harmony import */ var _pages_lista_casamento_lista_casamento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/lista-casamento/lista-casamento.component */ 7917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);










const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'madrinhas',
  component: _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_1__.MadrinhaComponent
}, {
  path: 'padrinhos',
  component: _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_2__.PadrinhoComponent
}, {
  path: 'menu',
  component: _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent
}, {
  path: 'about',
  component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent
}, {
  path: 'contact',
  component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent
}, {
  path: 'lista-casamento',
  component: _pages_lista_casamento_lista_casamento_component__WEBPACK_IMPORTED_MODULE_6__.ListaCasamentoComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'codeWeb';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-clipboard */ 4808);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharepage/navbar/navbar.component */ 8822);
/* harmony import */ var _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharepage/footer/footer.component */ 9392);
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu/menu.component */ 6658);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/madrinha/madrinha.component */ 8614);
/* harmony import */ var _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/padrinho/padrinho.component */ 1998);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about/about.component */ 3881);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ 1163);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pages_opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/opt-image-madrinhas/opt-image-madrinhas.component */ 3896);
/* harmony import */ var _pages_opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/opt-image-padrinhos/opt-image-padrinhos.component */ 5059);
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ 1200);
/* harmony import */ var _pages_lista_casamento_lista_casamento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/lista-casamento/lista-casamento.component */ 7917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);


















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_16__.ClipboardModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_10__.OptImageMadrinhasComponent, _pages_opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_11__.OptImagePadrinhosComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent, _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_6__.MadrinhaComponent, _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_7__.PadrinhoComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_12__.ImageGalleryComponent, _pages_lista_casamento_lista_casamento_component__WEBPACK_IMPORTED_MODULE_13__.ListaCasamentoComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_16__.ClipboardModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgOptimizedImage, _pages_opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_10__.OptImageMadrinhasComponent, _pages_opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_11__.OptImagePadrinhosComponent]
  });
})();

/***/ }),

/***/ 1200:
/*!**********************************************************!*\
  !*** ./src/app/image-gallery/image-gallery.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageGalleryComponent: () => (/* binding */ ImageGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function ImageGalleryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_div_1_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const image_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.openModal(image_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ImageGalleryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_div_2_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_div_2_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.prevImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_div_2_Template_img_click_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_div_2_Template_span_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.nextImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class ImageGalleryComponent {
  constructor() {
    this.images = ['../../assets/img/padrinhos/inspiracao.jpg'
    // '../../assets/img/padrinhos/inspiracao_.jpg'
    // adicione mais imagens conforme necessário
    ];
    this.selectedImage = null;
    this.currentIndex = 0;
  }
  openModal(image) {
    this.currentIndex = this.images.indexOf(image);
    this.selectedImage = image;
  }
  closeModal() {
    this.selectedImage = null;
  }
  prevImage(event) {
    event.stopPropagation();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = this.images.length - 1;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
  nextImage(event) {
    event.stopPropagation();
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = 0;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
  static #_ = this.ɵfac = function ImageGalleryComponent_Factory(t) {
    return new (t || ImageGalleryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImageGalleryComponent,
    selectors: [["app-image-gallery"]],
    decls: 3,
    vars: 2,
    consts: [[1, "gallery"], ["class", "image-wrapper", 4, "ngFor", "ngForOf"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "image-wrapper"], [3, "src", "click"], [1, "modal", 3, "click"], [1, "close", 3, "click"], [1, "prev", 3, "click"], [1, "modal-content", 3, "src", "click"], [1, "next", 3, "click"]],
    template: function ImageGalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageGalleryComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageGalleryComponent_div_2_Template, 8, 1, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  object-fit: contain; \n\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n\n.next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  color: #ddd;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CLEVBQUUscURBQXFEO0FBQzVFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICBtYXJnaW46IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1heC1oZWlnaHQ6IDkwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluOyAvKiBwYXJhIGdhcmFudGlyIHF1ZSBhIGltYWdlbSBmaXF1ZSBkZW50cm8gZG8gbW9kYWwgKi9cclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5wcmV2LCAubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLnByZXYge1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uZXh0IHtcclxuICByaWdodDogMjBweDtcclxufVxyXG5cclxuLnByZXY6aG92ZXIsIC5uZXh0OmhvdmVyIHtcclxuICBjb2xvcjogI2RkZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3881:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 2,
    vars: 0,
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1163:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ContactComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 2,
    vars: 0,
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 424:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-clipboard */ 4808);



class HomeComponent {
  constructor(router, _clipboardService) {
    this.router = router;
    this._clipboardService = _clipboardService;
  }
  mostrarModalMadrinhas() {
    window.location.href = '/madrinhas';
  }
  mostrarModalPadrinhos() {
    window.location.href = '/padrinhos';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 160,
    vars: 4,
    consts: [[1, "home"], [1, "banner-direita", "tamBanner"], [1, "banner-esquerda"], [1, "banner-esquerda-inferior"], [1, "container"], [1, "row"], [1, "centered-text", "up-position"], [1, "mobile-text"], [1, "centered-text", "middle-position"], [1, "centered-text", "down-position", "col-12"], [1, "frase-com-linhas"], [1, ""], [1, "container", "menuHome"], [1, "col-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#igreja", 1, "linkMenu"], ["src", "assets\\img\\home\\igreja.png", "alt", "", 1, "imgMenuHome", "imgMenu"], [1, "card-text", "textHomeP"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#festa", 1, "linkMenu"], ["src", "assets\\img\\home\\festa.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#presente", 1, "linkMenu"], ["src", "assets\\img\\home\\presente.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["data-bs-toggle", "modal", "data-bs-target", "#padrinhos", 1, "col-3"], ["href", "#", 1, "linkMenu"], ["src", "assets\\img\\home\\padrinhos.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["id", "igreja", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "modalH"], ["id", "exampleModalLabel", 1, "modal-title", "text-center"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["src", "assets\\img\\candelaria.png", "alt", "...", 1, "card-img-top", "imgModal"], [1, "card-text", "place", "text-center"], [1, "card-text", "address", "text-center"], [1, "modal-footer", "modalF"], ["container", ""], ["ngxClipboard", "", "type", "button", 1, "btn", "btn-primary", 3, "cbContent", "container"], ["aria-hidden", "true", 1, "fa", "fa-files-o"], ["href", "https://m.uber.com/ul/?action=setPickup&client_id=92wsifyVsfgPdvUuR_xBSuKcKaSKlWB1cDxri9ak&pickup=my_location&dropoff[formatted_address]=R.%20Castro%20Alves%2C%20781%20-%20Cer%C3%A2mica%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%20Brasil&dropoff[latitude]=-23.626986&dropoff[longitude]=-46.568577", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-dark"], [1, "fa-brands", "fa-uber"], ["href", "https://www.google.com/maps?q=R.+Castro+Alves,+781,+Cer\u00E2mica,+S\u00E3o+Caetano+do+Sul,+SP,+09540-030", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-success"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["href", "https://ul.waze.com/ul?place=ChIJi8k9O8RczpQRjZvL79qp43w&ll=-23.62698590%2C-46.56857680&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-waze"], [1, "fa-brands", "fa-waze"], ["id", "festa", "tabindex", "-1", "aria-labelledby", "festaModal", "aria-hidden", "true", 1, "modal", "fade"], ["id", "festaModal", 1, "modal-title", "text-center"], ["src", "assets\\img\\masterday.jpeg", "alt", "...", 1, "card-img-top", "imgModal"], [1, "modal-footer", "modalF", "text-center"], ["container2", ""], ["href", "https://m.uber.com/ul/?action=setPickup&client_id=TidzCZv9VG_iUw_k5Rppnm2D7RBo5ebTIAqtw8Rf&pickup=my_location&dropoff[formatted_address]=Buffet%20Master%20Day%20-%20Rua%20Cear%C3%A1%20-%20Funda%C3%A7%C3%A3o%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%20Brasil&dropoff[latitude]=-23.603977&dropoff[longitude]=-46.573312", "target", "_blank"], ["href", "https://www.google.com/maps/dir//Buffet+Master+Day+-+R.+Cear%C3%A1,+363+-+Funda%C3%A7%C3%A3o,+S%C3%A3o+Caetano+do+Sul+-+SP,+09520-410/@-23.6291213,-46.5880677,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce5cc188e54379:0xf03539dab808e5e6!2m2!1d-46.5733115!2d-23.6039771!3e0?entry=ttu", "target", "_blank"], ["href", "https://ul.waze.com/ul?preview_venue_id=205391388.2054110488.25886420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "target", "_blank"], ["id", "presente", "tabindex", "-1", "aria-labelledby", "presenteModal", "aria-hidden", "true", 1, "modal", "fade"], [1, "row", "rowPresentes"], ["src", "assets\\img\\home\\listaPresente\\amazon.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\magalu.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\casasBahias.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\pernambucanas.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\precolandia.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\casaRiachuelo.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\camicado.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\lojasmel.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["id", "padrinhos", "tabindex", "-1", "aria-labelledby", "padrinhosModal", "aria-hidden", "true", 1, "modal", "fade"], ["id", "padrinhosModal", 1, "modal-title", "text-center"], [1, "container", "itensPadrinhos"], [1, "row", "text-center"], [1, "col-6"], [1, "linkMenu", 3, "click"], ["src", "assets\\img\\home\\vestido.png", "alt", "", 1, "imgPadrinhos"], [1, "card-text", "textPadrinhos"], ["src", "assets\\img\\home\\terno.png", "alt", "", 1, "imgPadrinhos"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CONVIDAMOS VOC\u00CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PARA CELEBRAR O NOSSO CASAMENTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Andresa & Vin\u00EDcius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4)(16, "div", 5)(17, "div", 9)(18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "09 Novembro, 2024 \u00E0s 18:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "div", 5)(23, "div", 13)(24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Igreja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13)(29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Festa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13)(34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21)(39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24)(44, "div", 25)(45, "div", 26)(46, "div", 27)(47, "h5", 28);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33, 34)(58, "a")(59, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Copiar Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 37)(63, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Vou de uber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 40)(67, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Abrir no Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 43)(71, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Abrir no Waze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46)(75, "div", 25)(76, "div", 26)(77, "div", 27)(78, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Vamos \u00E0 Festa!!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Buffet Master Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "R. Cear\u00E1, 363 - Funda\u00E7\u00E3o, S\u00E3o Caetano do Sul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 49, 50)(89, "a")(90, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Copiar Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 51)(94, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Vou de uber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 52)(98, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Vou de Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 53)(102, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Vou de Waze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 54)(106, "div", 25)(107, "div", 26)(108, "div", 27)(109, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Encontre aqui a nossa lista de presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33)(113, "div", 11)(114, "div", 12)(115, "div", 55)(116, "div", 13)(117, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 13)(120, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 13)(123, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13)(126, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 55)(129, "div", 13)(130, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 13)(133, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 13)(136, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 13)(139, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 64)(142, "div", 25)(143, "div", 26)(144, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "h5", 65)(146, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 11)(148, "div", 66)(149, "div", 67)(150, "div", 68)(151, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_151_listener() {
          return ctx.mostrarModalMadrinhas();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "sou madrinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 68)(156, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_156_listener() {
          return ctx.mostrarModalPadrinhos();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "sou padrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", "Par\u00F3quia Nossa Senhora Da Candel\u00E1ria R. Castro Alves, 781 - Cer\u00E2mica, S\u00E3o Caetano do Sul ")("container", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", "Buffet Master Day R. Cear\u00E1, 363 - Funda\u00E7\u00E3o, S\u00E3o Caetano do Sul")("container", _r1);
      }
    },
    dependencies: [ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardDirective],
    styles: ["\n\n.home[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  background-image: url('flor1.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: top;\n}\n\n.home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n  width: 12%;\n  height: 100%;\n  background-image: url('cantoInferiorDireito.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background-position: bottom;\n}\n\n.centered-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n}\n\n.centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #787da3;\n  margin: 0;\n}\n\n.centered-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n\n\n.up-position[_ngcontent-%COMP%]{\n  color: #666c8b;\n  text-transform: uppercase;\n  font-size: 25px;\n  font-family: 'Raleway', sans-serif;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  font-weight: bold;\n}\n\n.up-position[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n\n.middle-position[_ngcontent-%COMP%]{\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  font-family: 'Sacramento', cursive;\n}\n\n.down-position[_ngcontent-%COMP%]{\n  text-transform: uppercase;\n  font-size: 20px;\n  font-family: 'Raleway', sans-serif;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.contagem[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.item[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.valor[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: #6f6f64;\n}\n\n.unidade[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  font-weight: bold;\n}\n\n.menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n  \n\n  width: 45%;\n}\n\n.ltsPresente[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 0;\n  max-width: 100%;\n  text-transform: none;\n  color: #15187f;\n  padding-left: inherit;\n}\n\n.ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n  margin-top: 100px;\n  width: 45%;\n}\n\n.menuHome[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: currentColor;\n  text-decoration: none;\n}\n\n.menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n  font-weight: bold;\n  font-size: 22px;\n  margin-top: 36px;\n  line-height: 0;\n  max-width: 100%;\n  text-transform: none;\n  color: #15187f;\n}\n\n.frase-com-linhas[_ngcontent-%COMP%] {\n  text-transform: none;\n  font-size: 36px;\n  font-family: 'Raleway', sans-serif;\n  border-top: 1px solid #666;\n  border-bottom: 1px solid #666;\n  display: inline-block;\n  padding: 26px;\n  margin-bottom: 50px;\n}\n\n.modalF[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  margin: 2px;\n}\n\n\n\n\n@media (max-width: 767px) {\n  .hidden-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\n    width: 30%; \n\n    height: 100%; \n\n    position: absolute;\n    top: 0;\n    background-image: url('flor1.png');\n    background-repeat: no-repeat;\n    background-size: contain; \n\n    background-position: top; \n\n  }\n\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 95px;\n    color: #787da3;\n    margin: 0;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .down-position[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n    font-size: 20px;\n    font-family: 'Raleway', sans-serif;\n    transform: translate(-50%, -50%); \n\n    z-index: 1; \n\n  }\n\n  .frase-com-linhas[_ngcontent-%COMP%] {\n    font-size: 23px;\n    margin-bottom: 40px;\n    margin-top: 40px;\n  }\n\n  .menuHome[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n    padding-left: inherit;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n    \n\n    width: 45%;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n    padding-left: inherit;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n    \n\n    width: 100%;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    margin-top: 20px;\n    line-height: 0; \n\n    max-width: 100%; \n\n    text-transform: none;\n    color: #15187f;\n  }\n\n  .up-position[_ngcontent-%COMP%] {\n    color: #666c8b;\n    text-transform: uppercase;\n    font-size: 13px;\n    font-family: 'Raleway', sans-serif;\n    top: 10%;\n    z-index: 1;\n    font-weight: bold;\n    text-align: right;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1450px) {\n  .hidden-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\n    width: 20%;\n    height: 100%;\n    top: 0;\n    background-image: url('flor1.png');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: top;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 95px;\n    color: #787da3;\n    margin: 0;\n  }\n\n  .down-position[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n    font-size: 20px;\n    font-family: 'Raleway', sans-serif;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    padding: 0;\n  }\n\n  .frase-com-linhas[_ngcontent-%COMP%] {\n    text-transform: none;\n    font-size: 26px;\n    font-family: 'Raleway', sans-serif;\n    border-top: 1px solid #666;\n    border-bottom: 1px solid #666;\n    display: inline-block;\n    padding: 26px;\n  }\n\n  .menuHome[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    width: 40%;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    width: 40%;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 14px;\n    margin-top: 12px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n  }\n\n  .up-position[_ngcontent-%COMP%] {\n    color: #666c8b;\n    text-transform: uppercase;\n    font-size: 15px;\n    font-family: 'Raleway', sans-serif;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    font-weight: bold;\n  }\n}\n\n\n.btn-waze[_ngcontent-%COMP%]{\n  background-color: #05c8f7;\n  border-color: #05c8f7;\n}\n\n.modalP[_ngcontent-%COMP%]{\n  padding-top: 20px;\n  text-align: center;\n}\n\n.place[_ngcontent-%COMP%]{\n  margin-bottom: 6px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n}\n\n.address[_ngcontent-%COMP%]{\n  padding: 0 12px 0 12px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.imgModal[_ngcontent-%COMP%]{\n  padding: 12px;\n  padding-top: 0;\n}\n\n.modalH[_ngcontent-%COMP%]{\n  border-bottom: none;\n}\n\n.modalF[_ngcontent-%COMP%]{\n  display: inline;\n  flex-shrink: 0;\n  border-top: none;\n  text-align: center;\n  flex-wrap: wrap-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)* .5);\n  background-color: var(--bs-modal-footer-bg);\n  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);\n  border-bottom-right-radius: var(--bs-modal-inner-border-radius);\n  border-bottom-left-radius: var(--bs-modal-inner-border-radius);\n}\n\n.rowPresentes[_ngcontent-%COMP%]{\n  padding: 10px;\n}\n\n.itensPadrinhos[_ngcontent-%COMP%]   .imgPadrinhos[_ngcontent-%COMP%]{\n  width: 45%;\n  text-decoration: none;\n}\n\n.itensPadrinhos[_ngcontent-%COMP%]   .textPadrinhos[_ngcontent-%COMP%] {\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  text-decoration: none;\n  color: #15187f;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n\n.linkMenu[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n\n\n@media (max-width: 400px){\n  .home[_ngcontent-%COMP%]{\n    width: 30%;\n    height: 100%;\n  }\n\n  .up-position[_ngcontent-%COMP%]{\n    color: #666c8b;\n    text-transform: uppercase;\n    font-size: 10px;\n    font-family: 'Raleway', sans-serif;\n    top: 10%;\n    z-index: 1;\n    font-weight: bold;\n    text-align: right;\n  }\n\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n    color: #787da3;\n    margin: 0;\n  }\n\n  .frase-com-linhas[_ngcontent-%COMP%]{\n    font-size: 16px;\n    margin-bottom: 0;\n    margin-top: 67px;\n    padding: 20px;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n    margin-top: 0;\n    width: 100%;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 12px;\n    margin-top: 20px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menuHome[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #15187f;\n    padding-left: inherit;\n    margin-top: 30px;\n  }\n\n  .place[_ngcontent-%COMP%]{\n    margin-bottom: 6px;\n    font-family: 'Raleway', sans-serif;\n    font-weight: bold;\n    font-size: 12px;\n  }\n\n  .address[_ngcontent-%COMP%]{\n    padding: 0 12px 0 12px;\n    font-family: 'Raleway', sans-serif;\n    font-weight: bold;\n    margin-bottom: 10px;\n    font-size: 11px;\n  }\n\n  .modalF[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    margin: 2px;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sa0NBQXlEO0VBQ3pELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpREFBd0U7RUFDeEUsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixj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Q0UsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFHQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEVzdGlsbyBwYXJhIG8gYmFubmVyICovXHJcbi5ob21lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaG9tZSAuYmFubmVyLWRpcmVpdGEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9mbG9yMS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxufVxyXG5cclxuLmhvbWUgLmJhbm5lci1lc3F1ZXJkYS1pbmZlcmlvciB7XHJcbiAgd2lkdGg6IDEyJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9jYW50b0luZmVyaW9yRGlyZWl0by5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNlbnRlcmVkLXRleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgY29sb3I6ICM3ODdkYTM7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dCBwIHtcclxuICBsaW5lLWhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi51cC1wb3NpdGlvbntcclxuICBjb2xvcjogIzY2NmM4YjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udXAtcG9zaXRpb24gcCB7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5taWRkbGUtcG9zaXRpb257XHJcbiAgdG9wOiA0MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmRvd24tcG9zaXRpb257XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICB0b3A6IDc1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbnRhZ2VtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udmFsb3Ige1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzZmNmY2NDtcclxufVxyXG5cclxuLnVuaWRhZGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1lbnVIb21lIC5pbWdNZW51e1xyXG4gIC8qIG1hcmdpbi10b3A6IDEwMHB4OyAqL1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5sdHNQcmVzZW50ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjb2xvcjogIzE1MTg3ZjtcclxuICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sdHNQcmVzZW50ZSAuaW1nUHJlc2VudGV7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLm1lbnVIb21lIGF7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51SG9tZSAudGV4dEhvbWVQe1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjb2xvcjogIzE1MTg3ZjtcclxufVxyXG5cclxuLmZyYXNlLWNvbS1saW5oYXMge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAyNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tb2RhbEYgYnV0dG9ue1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4vKiAvLyBzaG93IGl0IG9uIGRldmljZXMgd2l0aCBtYXggb2YgNzY3IHB4IGFuZCBsb3dlciAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmhpZGRlbi1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ob21lIC5iYW5uZXItZGlyZWl0YSB7XHJcbiAgICB3aWR0aDogMzAlOyAvKiBBanVzdGUgY29uZm9ybWUgbmVjZXNzw4PCoXJpbyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBVc2FuZG8gMTAwJSBwYXJhIGNvYnJpciBhIGFsdHVyYSBkbyBlbGVtZW50byBwYWkgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2hvbWUvZmxvcjEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IC8qIEFsdGVyYWRvIGRlICdjb3ZlcicgcGFyYSAnY29udGFpbicgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDsgLyogUG9zaWNpb25hIGEgaW1hZ2VtIG5hIHBhcnRlIGluZmVyaW9yICovXHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQtdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDk1cHg7XHJcbiAgICBjb2xvcjogIzc4N2RhMztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5ob21lIC5iYW5uZXItZXNxdWVyZGEtaW5mZXJpb3Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kb3duLXBvc2l0aW9ue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogTW92ZSBhIGRpdiBwYXJhIG8gY2VudHJvICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBEZWZpbmUgdW1hIG9yZGVtIGRlIGVtcGlsaGFtZW50byBzdXBlcmlvciAobmEgZnJlbnRlIGRhcyBpbWFnZW5zKSAqL1xyXG4gIH1cclxuXHJcbiAgLmZyYXNlLWNvbS1saW5oYXMge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudUhvbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzE1MTg3ZjtcclxuICAgIHBhZGRpbmctbGVmdDogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZSAuaW1nTWVudXtcclxuICAgIC8qIG1hcmdpbi10b3A6IDI1cHg7ICovXHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuXHJcbiAgLmx0c1ByZXNlbnRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjMTUxODdmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgLmx0c1ByZXNlbnRlIC5pbWdQcmVzZW50ZXtcclxuICAgIC8qIG1hcmdpbi10b3A6IDI1cHg7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZSAudGV4dEhvbWVQe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7IC8qIEFsdGVyZSBvIHZhbG9yIGNvbmZvcm1lIG5lY2Vzc8ODwqFyaW8sIDEgc2VyaWEgbyB2YWxvciBub3JtYWwgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTsgLyogVGV4dG8gbsODwqNvIHVsdHJhcGFzc2Fyw4PCoSBhIGxhcmd1cmEgZGEgY2FpeGEgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgfVxyXG5cclxuICAudXAtcG9zaXRpb24ge1xyXG4gICAgY29sb3I6ICM2NjZjOGI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUgLmltZ1ByZXNlbnRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAuaGlkZGVuLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmJhbm5lci1kaXJlaXRhIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL2Zsb3IxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmJhbm5lci1lc3F1ZXJkYS1pbmZlcmlvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkLXRleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiA5NXB4O1xyXG4gICAgY29sb3I6ICM3ODdkYTM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZG93bi1wb3NpdGlvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5mcmFzZS1jb20tbGluaGFzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgfVxyXG5cclxuICAubWVudUhvbWUgLmltZ01lbnV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIC5sdHNQcmVzZW50ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzE1MTg3ZjtcclxuICB9XHJcblxyXG4gIC5sdHNQcmVzZW50ZSAuaW1nUHJlc2VudGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZSAudGV4dEhvbWVQe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjMTUxODdmO1xyXG4gIH1cclxuXHJcbiAgLnVwLXBvc2l0aW9uIHtcclxuICAgIGNvbG9yOiAjNjY2YzhiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5idG4td2F6ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjOGY3O1xyXG4gIGJvcmRlci1jb2xvcjogIzA1YzhmNztcclxufVxyXG5cclxuLm1vZGFsUHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGFjZXtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFkZHJlc3N7XHJcbiAgcGFkZGluZzogMCAxMnB4IDAgMTJweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbWdNb2RhbHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ubW9kYWxIe1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbEZ7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJzLW1vZGFsLXBhZGRpbmcpIC0gdmFyKC0tYnMtbW9kYWwtZm9vdGVyLWdhcCkqIC41KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1tb2RhbC1mb290ZXItYmcpO1xyXG4gIGJvcmRlci10b3A6IHZhcigtLWJzLW1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLW1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1icy1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1icy1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuLnJvd1ByZXNlbnRlc3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbnNQYWRyaW5ob3MgLmltZ1BhZHJpbmhvc3tcclxuICB3aWR0aDogNDUlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLml0ZW5zUGFkcmluaG9zIC50ZXh0UGFkcmluaG9zIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMTUxODdmO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxpbmtNZW51e1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgLmhvbWV7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnVwLXBvc2l0aW9ue1xyXG4gICAgY29sb3I6ICM2NjZjOGI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQtdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBjb2xvcjogIzc4N2RhMztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5mcmFzZS1jb20tbGluaGFze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6IDY3cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC5pbWdNZW51e1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC50ZXh0SG9tZVB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMxNTE4N2Y7XHJcbiAgfVxyXG5cclxuICAuaG9tZSAuYmFubmVyLWVzcXVlcmRhLWluZmVyaW9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWVudUhvbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzE1MTg3ZjtcclxuICAgIHBhZGRpbmctbGVmdDogaW5oZXJpdDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAucGxhY2V7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYWRkcmVzc3tcclxuICAgIHBhZGRpbmc6IDAgMTJweCAwIDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsRiBidXR0b257XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
function calcularTempoRestante() {
  const dataAlvo = new Date('2024-11-09T21:30:00Z');
  const agora = new Date();
  console.log("agora: " + agora);
  console.log("dataAlvo: " + dataAlvo);
  const diferencaEmSegundos = Math.floor((dataAlvo.getTime() - agora.getTime()) / 1000);
  const dias = Math.floor(diferencaEmSegundos / (60 * 60 * 24));
  const horas = Math.floor(diferencaEmSegundos % (60 * 60 * 24) / (60 * 60));
  const minutos = Math.floor(diferencaEmSegundos % (60 * 60) / 60);
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

/***/ 7917:
/*!********************************************************************!*\
  !*** ./src/app/pages/lista-casamento/lista-casamento.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListaCasamentoComponent: () => (/* binding */ ListaCasamentoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sharepage/navbar/navbar.component */ 8822);


class ListaCasamentoComponent {
  static #_ = this.ɵfac = function ListaCasamentoComponent_Factory(t) {
    return new (t || ListaCasamentoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ListaCasamentoComponent,
    selectors: [["app-lista-casamento"]],
    decls: 96,
    vars: 0,
    consts: [[1, "madrinha"], [1, "blocoInicial"], [1, "title"], [1, "container"], [1, "row"], [1, "text-center", "text-madrinhas"], [1, "mobile-text"], ["src", "assets\\img\\florMeioAzul.png", "alt", "", 1, "florAzulMeio"], [1, "agradecimento"], [1, "comCarinho"], [1, "rounded-box"], [1, "icon-column"], ["href", "#", 1, "linkMenu", "col-2"], ["src", "assets\\img\\home\\listaPresente\\amazon.png", "alt", "", 1, "ltsPresente", "imgPresente"], [1, "text-column", "col-10"], ["href", "", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "fa-brands", "fa-uber"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["src", "assets\\img\\home\\listaPresente\\camicado.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\casasBahias.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\magalu.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["src", "assets\\img\\home\\listaPresente\\precolandia.png", "alt", "", 1, "ltsPresente", "imgPresente"]],
    template: function ListaCasamentoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lista de Presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "montamos essa lista com muito carinho. Ela est\u00E1 com valores variados para que possamos ser justos com aqueles que querem nos presentear.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "com carinho, Andresa e Vin\u00EDcius ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3)(16, "div", 4)(17, "div", 10)(18, "div", 11)(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Dica: Para quem tem o servi\u00E7o \"prime\" tem a chance de comprar o presente sem pagar o frete e enviar para n\u00F3s diretamente sem se preocupar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 15)(25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Acessar lista de presentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 15)(29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Acessar o site da Amazon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4)(33, "div", 10)(34, "div", 11)(35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Dica: Para quem tem o servi\u00E7o \"prime\" tem a chance de comprar o presente sem pagar o frete e enviar para n\u00F3s diretamente sem se preocupar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 15)(41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Acessar lista de presentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 15)(45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Acessar o site da Camicado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4)(49, "div", 10)(50, "div", 11)(51, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14)(54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Dica: Para quem tem o servi\u00E7o \"prime\" tem a chance de comprar o presente sem pagar o frete e enviar para n\u00F3s diretamente sem se preocupar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 15)(57, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Acessar lista de presentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 15)(61, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Acessar o site da Casas Bahia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 4)(65, "div", 10)(66, "div", 11)(67, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 14)(70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Dica: Para quem tem o servi\u00E7o \"prime\" tem a chance de comprar o presente sem pagar o frete e enviar para n\u00F3s diretamente sem se preocupar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 15)(73, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Acessar lista de presentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 15)(77, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Acessar o site da Magalu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 4)(81, "div", 10)(82, "div", 11)(83, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 14)(86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Dica: Para quem tem o servi\u00E7o \"prime\" tem a chance de comprar o presente sem pagar o frete e enviar para n\u00F3s diretamente sem se preocupar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 15)(89, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Acessar lista de presentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 15)(93, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Acessar o site da Precolandia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    styles: [".madrinha[_ngcontent-%COMP%]{\n  \n\n\n  background-repeat: round;\n\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n\n}\n\n\n\n\n\n\n\n.text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-family: 'Imperial Script', cursive;\n  font-size: 80px;\n  margin-top: 30px;\n}\n\n.coracao[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n.coracao[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.imgCoracao[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.florAzulMeio[_ngcontent-%COMP%]{\n  width: 5%;\n  margin-bottom: 25px;\n}\n\n.comCarinho[_ngcontent-%COMP%]{\n  text-align: right;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n  color: #000;\n  font-size: 17px;\n}\n\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 25px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  background-color: #badcf17d;\n}\n\n.texto[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.reservei[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 15px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  \n\n  padding: 40px 40px 1px 40px;\n}\n\n.serenity[_ngcontent-%COMP%]{\n  margin: 50px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #007dbe;\n  font-size: 50px;\n}\n\n.referenciaTexto[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n  color: #7f7f7f;;\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.blocoFinal[_ngcontent-%COMP%]{\n  padding: 40px;\n}\n\n.final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  margin-top: 15px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.voceLinda[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #7f7f7f;\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 40px;\n}\n\n.imgVestido[_ngcontent-%COMP%]{\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.btnVestido[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #0089b1;\n  color: #fff;\n  background-color: #0089b1;\n  border-color: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 781px) and (max-width: 1450px) {\n  .text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 10%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    font-size: 16px;\n    margin-top: 25px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    \n\n    color: #7a7979;\n    font-size: 14px;\n  }\n\n  .imgCoracao[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n  }\n\n  .serenity[_ngcontent-%COMP%]{\n    margin: 50px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #007dbe;\n    font-size: 40px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 16px;\n    margin-top: 10px;\n  }\n\n  .blocoFinal[_ngcontent-%COMP%]{\n    padding: 40px;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 14px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n\n  .imgWithoutLink[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 480px){\n  .text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n    margin-bottom: 0;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 15%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    font-style: italic;\n    color: #000;\n    font-size: 12px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 25px;\n    font-size: 12px;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n    font-size: 20px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 12px;\n    margin-top: 10px;\n    font-size: 16px;\n  }\n\n  .serenity[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #007dbe;\n    font-size: 25px;\n  }\n\n  .imgCoracao[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-height: -webkit-fill-available;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 5px;\n  cursor: pointer;\n  transition: transform 0.2s;\n  text-align: center;\n}\n\n\n\n\n.rounded-box[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 15px;\n  display: flex;\n  padding: 10px;\n  margin: 5px auto; \n\n  margin-bottom: 10px;\n}\n\n.icon-column[_ngcontent-%COMP%] {\n  \n\n\n\n  padding: 10px; \n\n}\n\n.icon-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%; \n\n  max-width: 190px;\n}\n\n.text-column[_ngcontent-%COMP%] {\n  display: in;\n  align-items: center;\n  justify-content: center;\n}\n\n.text-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.text-column[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGlzdGEtY2FzYW1lbnRvL2xpc3RhLWNhc2FtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7OEJBQzRCO0VBQzVCLHdCQUF3Qjs7RUFFeEIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7O0FBRXBCOztBQUVBOztHQUVHOzs7QUFHSDtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7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QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIubWFkcmluaGF7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmYTsgKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbn1cclxuXHJcbi8qIC5ibG9jb0luaWNpYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmYTtcclxufSAqL1xyXG5cclxuXHJcbi50ZXh0LW1hZHJpbmhhcyBoMXtcclxuICBmb250LWZhbWlseTogJ0ltcGVyaWFsIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb3JhY2Fve1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5jb3JhY2FvIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmltZ0NvcmFjYW97XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbG9yQXp1bE1laW97XHJcbiAgd2lkdGg6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jb21DYXJpbmhve1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5hZ3JhZGVjaW1lbnRvIGg1e1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5tZWlvQ29yZXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZGNmMTdkO1xyXG59XHJcblxyXG4udGV4dG97XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucmVzZXJ2ZWl7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLm1laW9Db3Jlc3tcclxuICAvKiBwYWRkaW5nOiA0MHB4OyAqL1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweCAxcHggNDBweDtcclxufVxyXG5cclxuLnNlcmVuaXR5e1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwN2RiZTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2lhVGV4dG97XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYmxvY29GaW5hbHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcblxyXG4uZmluYWwgaDN7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udm9jZUxpbmRhe1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmltZ1Zlc3RpZG97XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ0blZlc3RpZG97XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA4OWIxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg5YjE7XHJcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmltZ0NvcmFjYW97XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufSAqL1xyXG5cclxuLyogY2VsdWxhciBjb20gdGVsYSBncmFuZGUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MXB4KSBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcbiAgLnRleHQtbWFkcmluaGFzIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5mbG9yQXp1bE1laW97XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuYWdyYWRlY2ltZW50byBoNXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIC5jb21DYXJpbmhve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xyXG4gICAgY29sb3I6ICM3YTc5Nzk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuaW1nQ29yYWNhb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlc2VydmVpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlcmVuaXR5e1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDdkYmU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAucmVmZXJlbmNpYVRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5ibG9jb0ZpbmFse1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcblxyXG4gIC5maW5hbCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAudm9jZUxpbmRhe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZ1dpdGhvdXRMaW5re1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgLnRleHQtbWFkcmluaGFzIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuZmxvckF6dWxNZWlve1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbUNhcmluaG97XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5hZ3JhZGVjaW1lbnRvIGg1e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc2VydmVpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZmVyZW5jaWFUZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmOztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuc2VyZW5pdHl7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwN2RiZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIC5pbWdDb3JhY2Fve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZmluYWwgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnZvY2VMaW5kYXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXgtaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmdhbGxlcnkgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnJvdW5kZWQtYm94IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87IC8qIENlbnRyYWxpemEgbmEgcMODwqFnaW5hICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmljb24tY29sdW1uIHtcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgcGFkZGluZzogMTBweDsgLyogRXNwYcODwqdhbWVudG8gZW50cmUgw4PCrWNvbmUgZSB0ZXh0byAqL1xyXG59XHJcblxyXG4uaWNvbi1jb2x1bW4gaW1nIHtcclxuICB3aWR0aDogNzAlOyAvKiBBanVzdGUgY29uZm9ybWUgbmVjZXNzw4PCoXJpbyAqL1xyXG4gIG1heC13aWR0aDogMTkwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY29sdW1uIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRleHQtY29sdW1uIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8614:
/*!******************************************************!*\
  !*** ./src/app/pages/madrinha/madrinha.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MadrinhaComponent: () => (/* binding */ MadrinhaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../opt-image-madrinhas/opt-image-madrinhas.component */ 3896);
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sharepage/navbar/navbar.component */ 8822);




function MadrinhaComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MadrinhaComponent_div_26_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function MadrinhaComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MadrinhaComponent_div_28_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const image_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.openModal(image_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class MadrinhaComponent {
  constructor() {
    this.images = ['../../assets/img/madrinhas/inspiracao.png'];
    this.selectedImage = null;
  }
  ngOnInit() {}
  openModal(image) {
    this.selectedImage = image;
  }
  closeModal() {
    this.selectedImage = null;
  }
  static #_ = this.ɵfac = function MadrinhaComponent_Factory(t) {
    return new (t || MadrinhaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MadrinhaComponent,
    selectors: [["app-madrinha"]],
    decls: 37,
    vars: 2,
    consts: [[1, "madrinha"], [1, "blocoInicial"], [1, "title"], [1, "container"], [1, "row"], [1, "text-center", "text-madrinhas"], [1, "mobile-text"], ["src", "assets\\img\\florMeioAzul.png", "alt", "", 1, "florAzulMeio"], [1, "agradecimento"], [1, "comCarinho"], [1, "meioCores"], [1, "reservei", "text-center"], [1, "referenciaTexto", "text-center"], [1, "coracao", "texto"], [1, "text-center", "serenity"], [1, "row", "text-center"], ["class", "modal", 4, "ngIf"], [1, "gallery", "col-12"], ["class", "image-wrapper", 4, "ngFor", "ngForOf"], [1, "blocoFinal"], [1, "row", "text-center", "final"], [1, "vestido"], [1, "voceLinda"], [1, "modal"], [1, "close", 3, "click"], [1, "modal-content", 3, "src"], [1, "image-wrapper"], [3, "src", "click"]],
    template: function MadrinhaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "muito obrigada por aceitar a miss\u00E3o de ser a nossa madrinha e compartilhar esse momento t\u00E3o lindo das nossas vidas!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "com carinho, Andresa e Vin\u00EDcius ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "div")(18, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "reservei esse espa\u00E7o para te ajudar na escolha das cores seu vestido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "abaixo est\u00E1 a refer\u00EAncia da cor dos vestidos das madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "cor serenity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MadrinhaComponent_div_26_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MadrinhaComponent_div_28_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "div", 3)(31, "div", 20)(32, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "vestidos para se inspirar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "quero te ver linda e deslumbrante");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "app-opt-image-madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_0__.OptImageMadrinhasComponent, _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
    styles: [".madrinha[_ngcontent-%COMP%]{\n  \n\n\n\n  background-image: url('TEXTURE.png');\n  background-color: #eaefff;\n  background-repeat: round;\n\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n\n}\n\n\n\n\n\n\n\n.text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-family: 'Imperial Script', cursive;\n  font-size: 80px;\n  margin-top: 30px;\n}\n\n.coracao[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n.coracao[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.imgCoracao[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.florAzulMeio[_ngcontent-%COMP%]{\n  width: 5%;\n  margin-bottom: 25px;\n}\n\n.comCarinho[_ngcontent-%COMP%]{\n  text-align: right;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n  color: #000;\n  font-size: 17px;\n}\n\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 25px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  background-color: #badcf17d;\n}\n\n.texto[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.reservei[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 15px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  \n\n  padding: 40px 40px 1px 40px;\n}\n\n.serenity[_ngcontent-%COMP%]{\n  margin: 50px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #007dbe;\n  font-size: 50px;\n}\n\n.referenciaTexto[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n  color: #7f7f7f;;\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.blocoFinal[_ngcontent-%COMP%]{\n  padding: 40px;\n}\n\n.final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  margin-top: 15px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.voceLinda[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #7f7f7f;\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 40px;\n}\n\n.imgVestido[_ngcontent-%COMP%]{\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.btnVestido[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #0089b1;\n  color: #fff;\n  background-color: #0089b1;\n  border-color: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 781px) and (max-width: 1450px) {\n  .text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 10%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    font-size: 16px;\n    margin-top: 25px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    \n\n    color: #7a7979;\n    font-size: 14px;\n  }\n\n  .imgCoracao[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n  }\n\n  .serenity[_ngcontent-%COMP%]{\n    margin: 50px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #007dbe;\n    font-size: 40px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 16px;\n    margin-top: 10px;\n  }\n\n  .blocoFinal[_ngcontent-%COMP%]{\n    padding: 40px;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 14px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n\n  .imgWithoutLink[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 480px){\n  .text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n    margin-bottom: 0;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 15%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    font-style: italic;\n    color: #000;\n    font-size: 12px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 25px;\n    font-size: 12px;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n    font-size: 20px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 12px;\n    margin-top: 10px;\n    font-size: 16px;\n  }\n\n  .serenity[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #007dbe;\n    font-size: 25px;\n  }\n\n  .imgCoracao[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-height: -webkit-fill-available;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 5px;\n  cursor: pointer;\n  transition: transform 0.2s;\n  text-align: center;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFkcmluaGEvbWFkcmluaGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzhCQUM0Qjs7RUFFNUIsb0NBQXNEO0VBQ3RELHlCQUF5QjtFQUN6Qix3QkFBd0I7O0VBRXhCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjs7QUFFQTs7R0FFRzs7O0FBR0g7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7OztBQUdBOzs7O0dBSUc7O0FBRUgsNEJBQTRCO0FBQzVCO0VBQ0U7SUFDRSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIubWFkcmluaGF7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmYTsgKi9cclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvVEVYVFVSRS5wbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVmZmY7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG5cclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG59XHJcblxyXG4vKiAuYmxvY29JbmljaWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYxZmE7XHJcbn0gKi9cclxuXHJcblxyXG4udGV4dC1tYWRyaW5oYXMgaDF7XHJcbiAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29yYWNhb3tcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uY29yYWNhbyBoM3tcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbWdDb3JhY2Fve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmxvckF6dWxNZWlve1xyXG4gIHdpZHRoOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29tQ2FyaW5ob3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uYWdyYWRlY2ltZW50byBoNXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ubWVpb0NvcmVze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWRjZjE3ZDtcclxufVxyXG5cclxuLnRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLnJlc2VydmVpe1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tZWlvQ29yZXN7XHJcbiAgLyogcGFkZGluZzogNDBweDsgKi9cclxuICBwYWRkaW5nOiA0MHB4IDQwcHggMXB4IDQwcHg7XHJcbn1cclxuXHJcbi5zZXJlbml0eXtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDdkYmU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4ucmVmZXJlbmNpYVRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjN2Y3ZjdmOztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJsb2NvRmluYWx7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuLmZpbmFsIGgze1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnZvY2VMaW5kYXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzdmN2Y3ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5pbWdWZXN0aWRve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idG5WZXN0aWRve1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogIzAwODliMTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OWIxO1xyXG4gIGJvcmRlci1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5pbWdDb3JhY2Fve1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn0gKi9cclxuXHJcbi8qIGNlbHVsYXIgY29tIHRlbGEgZ3JhbmRlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODFweCkgYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gIC50ZXh0LW1hZHJpbmhhcyBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuZmxvckF6dWxNZWlve1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuY29tQ2FyaW5ob3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cclxuICAgIGNvbG9yOiAjN2E3OTc5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZ0NvcmFjYW97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZXNlcnZlaXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5zZXJlbml0eXtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDA3ZGJlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZmVyZW5jaWFUZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmOztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYmxvY29GaW5hbHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuZmluYWwgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLnZvY2VMaW5kYXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbWdXaXRob3V0TGlua3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gIC50ZXh0LW1hZHJpbmhhcyBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZsb3JBenVsTWVpb3tcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb21DYXJpbmhve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYWdyYWRlY2ltZW50byBoNXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5yZXNlcnZlaXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5yZWZlcmVuY2lhVGV4dG97XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3Zjs7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnNlcmVuaXR5e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDdkYmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuaW1nQ29yYWNhb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZpbmFsIGgze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC52b2NlTGluZGF7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3ZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICBtYXJnaW46IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWF4LWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5nYWxsZXJ5IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6658:
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MenuComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 2,
    vars: 0,
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3896:
/*!****************************************************************************!*\
  !*** ./src/app/pages/opt-image-madrinhas/opt-image-madrinhas.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptImageMadrinhasComponent: () => (/* binding */ OptImageMadrinhasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



function OptImageMadrinhasComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImageMadrinhasComponent_div_5_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const image_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.openModal(image_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function OptImageMadrinhasComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImageMadrinhasComponent_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImageMadrinhasComponent_div_6_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImageMadrinhasComponent_div_6_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.prevImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImageMadrinhasComponent_div_6_Template_img_click_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImageMadrinhasComponent_div_6_Template_span_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.nextImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class OptImageMadrinhasComponent {
  constructor() {
    this.images = ['../../assets/img/madrinhas/ref4.png', '../../assets/img/madrinhas/ref5.png', '../../assets/img/madrinhas/ref6.png', '../../assets/img/madrinhas/ref7.png', '../../assets/img/madrinhas/ref8.png', '../../assets/img/madrinhas/ref11.png', '../../assets/img/madrinhas/ref12.png', '../../assets/img/madrinhas/ref10.png', '../../assets/img/madrinhas/ref1.png'];
    this.selectedImage = null;
    this.currentIndex = 0;
  }
  openModal(image) {
    this.currentIndex = this.images.indexOf(image);
    this.selectedImage = image;
  }
  closeModal() {
    this.selectedImage = null;
  }
  prevImage(event) {
    event.stopPropagation();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = this.images.length - 1;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
  nextImage(event) {
    event.stopPropagation();
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = 0;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
  static #_ = this.ɵfac = function OptImageMadrinhasComponent_Factory(t) {
    return new (t || OptImageMadrinhasComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OptImageMadrinhasComponent,
    selectors: [["app-opt-image-madrinhas"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 2,
    consts: [[1, "blocoFinal"], [1, "container"], [1, "row", "text-center", "final"], [1, "col-12"], [1, "gallery"], ["class", "image-wrapper", 4, "ngFor", "ngForOf"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "image-wrapper"], [3, "src", "click"], [1, "modal", 3, "click"], [1, "close", 3, "click"], [1, "prev", 3, "click"], [1, "modal-content", 3, "src", "click"], [1, "next", 3, "click"]],
    template: function OptImageMadrinhasComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OptImageMadrinhasComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OptImageMadrinhasComponent_div_6_Template, 8, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 30%; \n\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n  max-width: 30%; \n\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  object-fit: contain; \n\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  color: rgb(65, 65, 65);\n  font-weight: bold;\n  font-size: 20px;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n\n.next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n@media (max-width: 768px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 45%; \n\n    max-width: 45%;\n  }\n}\n\n@media (max-width: 480px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 90%; \n\n    max-width: 90%;\n  }\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3B0LWltYWdlLW1hZHJpbmhhcy9vcHQtaW1hZ2UtbWFkcmluaGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWEsRUFBRSx1RUFBdUU7RUFDdEYsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFFLGtDQUFrQztBQUNwRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQixFQUFFLHFEQUFxRDtBQUM1RTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhLEVBQUUscURBQXFEO0lBQ3BFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYSxFQUFFLDJEQUEyRDtJQUMxRSxjQUFjO0VBQ2hCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICBmbGV4OiAxIDEgMzAlOyAvKiBBanVzdGEgYSBsYXJndXJhIHBhcmEgY2VyY2EgZGUgMzAlLCBwZXJtaXRpbmRvIDMgaW1hZ2VucyBwb3IgbGluaGEgKi9cclxuICBtYXJnaW46IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDMwJTsgLyogTGltaXRhIGEgbGFyZ3VyYSBtw4PCoXhpbWEgYSAzMCUgKi9cclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1heC1oZWlnaHQ6IDkwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluOyAvKiBQYXJhIGdhcmFudGlyIHF1ZSBhIGltYWdlbSBmaXF1ZSBkZW50cm8gZG8gbW9kYWwgKi9cclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5wcmV2IHtcclxuICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcmV2OmhvdmVyLFxyXG4ubmV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIGZsZXg6IDEgMSA0NSU7IC8qIEFqdXN0YSBwYXJhIDIgaW1hZ2VucyBwb3IgbGluaGEgZW0gdGVsYXMgbWVub3JlcyAqL1xyXG4gICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBmbGV4OiAxIDEgOTAlOyAvKiBBanVzdGEgcGFyYSAxIGltYWdlbSBwb3IgbGluaGEgZW0gdGVsYXMgbXVpdG8gcGVxdWVuYXMgKi9cclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5059:
/*!****************************************************************************!*\
  !*** ./src/app/pages/opt-image-padrinhos/opt-image-padrinhos.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptImagePadrinhosComponent: () => (/* binding */ OptImagePadrinhosComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



function OptImagePadrinhosComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImagePadrinhosComponent_div_5_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const image_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.openModal(image_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function OptImagePadrinhosComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImagePadrinhosComponent_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImagePadrinhosComponent_div_6_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImagePadrinhosComponent_div_6_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.prevImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImagePadrinhosComponent_div_6_Template_img_click_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptImagePadrinhosComponent_div_6_Template_span_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.nextImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class OptImagePadrinhosComponent {
  constructor() {
    this.images = ['../../assets/img/padrinhos/ref1.png', '../../assets/img/padrinhos/ref2.png', '../../assets/img/padrinhos/ref3.png', '../../assets/img/padrinhos/ref4.png', '../../assets/img/padrinhos/ref5.png', '../../assets/img/padrinhos/ref6.png'];
    this.selectedImage = null;
    this.currentIndex = 0;
  }
  openModal(image) {
    this.currentIndex = this.images.indexOf(image);
    this.selectedImage = image;
  }
  closeModal() {
    this.selectedImage = null;
  }
  prevImage(event) {
    event.stopPropagation();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = this.images.length - 1;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
  nextImage(event) {
    event.stopPropagation();
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = 0;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
  static #_ = this.ɵfac = function OptImagePadrinhosComponent_Factory(t) {
    return new (t || OptImagePadrinhosComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OptImagePadrinhosComponent,
    selectors: [["app-opt-image-padrinhos"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 2,
    consts: [[1, "blocoFinal"], [1, "container"], [1, "row", "text-center", "final"], [1, "col-12"], [1, "gallery"], ["class", "image-wrapper", 4, "ngFor", "ngForOf"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "image-wrapper"], [3, "src", "click"], [1, "modal", 3, "click"], [1, "close", 3, "click"], [1, "prev", 3, "click"], [1, "modal-content", 3, "src", "click"], [1, "next", 3, "click"]],
    template: function OptImagePadrinhosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OptImagePadrinhosComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OptImagePadrinhosComponent_div_6_Template, 8, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 30%; \n\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n  max-width: 30%; \n\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  object-fit: contain; \n\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  color: rgb(65, 65, 65);\n  font-weight: bold;\n  font-size: 20px;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n\n.next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n@media (max-width: 768px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 45%; \n\n    max-width: 45%;\n  }\n}\n\n@media (max-width: 480px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 90%; \n\n    max-width: 90%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3B0LWltYWdlLXBhZHJpbmhvcy9vcHQtaW1hZ2UtcGFkcmluaG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWEsRUFBRSx1RUFBdUU7RUFDdEYsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFFLGtDQUFrQztBQUNwRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQixFQUFFLHFEQUFxRDtBQUM1RTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhLEVBQUUscURBQXFEO0lBQ3BFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYSxFQUFFLDJEQUEyRDtJQUMxRSxjQUFjO0VBQ2hCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICBmbGV4OiAxIDEgMzAlOyAvKiBBanVzdGEgYSBsYXJndXJhIHBhcmEgY2VyY2EgZGUgMzAlLCBwZXJtaXRpbmRvIDMgaW1hZ2VucyBwb3IgbGluaGEgKi9cclxuICBtYXJnaW46IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDMwJTsgLyogTGltaXRhIGEgbGFyZ3VyYSBtw4PCoXhpbWEgYSAzMCUgKi9cclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1heC1oZWlnaHQ6IDkwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluOyAvKiBQYXJhIGdhcmFudGlyIHF1ZSBhIGltYWdlbSBmaXF1ZSBkZW50cm8gZG8gbW9kYWwgKi9cclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5wcmV2LFxyXG4ubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5wcmV2IHtcclxuICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcmV2OmhvdmVyLFxyXG4ubmV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIGZsZXg6IDEgMSA0NSU7IC8qIEFqdXN0YSBwYXJhIDIgaW1hZ2VucyBwb3IgbGluaGEgZW0gdGVsYXMgbWVub3JlcyAqL1xyXG4gICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBmbGV4OiAxIDEgOTAlOyAvKiBBanVzdGEgcGFyYSAxIGltYWdlbSBwb3IgbGluaGEgZW0gdGVsYXMgbXVpdG8gcGVxdWVuYXMgKi9cclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1998:
/*!******************************************************!*\
  !*** ./src/app/pages/padrinho/padrinho.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PadrinhoComponent: () => (/* binding */ PadrinhoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../opt-image-padrinhos/opt-image-padrinhos.component */ 5059);
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sharepage/navbar/navbar.component */ 8822);




function PadrinhoComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PadrinhoComponent_div_26_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function PadrinhoComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PadrinhoComponent_div_28_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const image_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.openModal(image_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class PadrinhoComponent {
  constructor() {
    this.images = ['../../assets/img/padrinhos/inspiracao.jpg'];
    this.selectedImage = null;
  }
  ngOnInit() {}
  openModal(image) {
    this.selectedImage = image;
  }
  closeModal() {
    this.selectedImage = null;
  }
  static #_ = this.ɵfac = function PadrinhoComponent_Factory(t) {
    return new (t || PadrinhoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PadrinhoComponent,
    selectors: [["app-padrinho"]],
    decls: 37,
    vars: 2,
    consts: [[1, "padrinho"], [1, "blocoInicial"], [1, "title"], [1, "container"], [1, "row"], [1, "text-center", "text-padrinhos"], [1, "mobile-text"], ["src", "assets\\img\\florMeioAzul.png", "alt", "", 1, "florAzulMeio"], [1, "agradecimento"], [1, "comCarinho"], [1, "meioCores"], [1, "reservei", "text-center"], [1, "referenciaTexto", "text-center"], [1, "coracao", "texto"], [1, "text-center", "cinza"], [1, "row", "text-center"], ["class", "modal", 4, "ngIf"], [1, "gallery", "col-12"], ["class", "image-wrapper", 4, "ngFor", "ngForOf"], [1, "blocoFinal"], [1, "row", "text-center", "final"], [1, "Terno"], [1, "voceLinda"], [1, "modal"], [1, "close", 3, "click"], [1, "modal-content", 3, "src"], [1, "image-wrapper"], [3, "src", "click"]],
    template: function PadrinhoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "muito obrigada por aceitar a miss\u00E3o de ser a nosso padrinho e compartilhar esse momento t\u00E3o lindo das nossas vidas!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "com carinho, Andresa e Vin\u00EDcius ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "div")(18, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "reservei esse espa\u00E7o para te ajudar na escolha das cores seu terno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "abaixo est\u00E1 a refer\u00EAncia da cor do terno dos padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "cinza claro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, PadrinhoComponent_div_26_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PadrinhoComponent_div_28_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "div", 3)(31, "div", 20)(32, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "ternos para se inspirar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "para arrasar junto com a madrinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "app-opt-image-padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_0__.OptImagePadrinhosComponent, _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
    styles: [".padrinho[_ngcontent-%COMP%]{\n  \n\n\n\n  background-image: url('TEXTURE.png');\n  background-color: #eaefff;\n  background-repeat: round;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n\n}\n\n\n\n\n\n\n\n.text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-family: 'Imperial Script', cursive;\n  font-size: 80px;\n  margin-top: 30px;\n}\n\n.coracao[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n.coracao[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.imgCoracao[_ngcontent-%COMP%]{\n  width: 50%;\n}\n\n.florAzulMeio[_ngcontent-%COMP%]{\n  width: 5%;\n  margin-bottom: 25px;\n}\n\n.comCarinho[_ngcontent-%COMP%]{\n  text-align: right;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n  color: #000;\n  font-size: 17px;\n}\n\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 25px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  \n\n  \n\n  \n\n  background-color: #e7ecfc96;\n}\n\n.texto[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.reservei[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 15px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  \n\n  padding: 40px 40px 1px 40px;\n}\n\n.cinza[_ngcontent-%COMP%]{\n  margin: 50px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #717171;\n  font-size: 50px;\n}\n\n.referenciaTexto[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n  color: #7f7f7f;;\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.blocoFinal[_ngcontent-%COMP%]{\n  padding: 40px;\n}\n\n.final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  margin-top: 15px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.voceLinda[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #7f7f7f;\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 40px;\n}\n\n.imgTerno[_ngcontent-%COMP%]{\n  width: 100%;\n  height: auto;\n  margin-bottom: 20px;\n}\n\n.btnTerno[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #0089b1;\n  color: #fff;\n  background-color: #0089b1;\n  border-color: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 768px) and (max-width: 1450px) {\n\n  .text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 10%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    font-size: 16px;\n    margin-top: 25px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    \n\n    color: #7a7979;\n    font-size: 14px;\n  }\n\n  .imgCoracao[_ngcontent-%COMP%]{\n    width: 50%;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n  }\n\n  .cinza[_ngcontent-%COMP%]{\n    margin: 50px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #717171;\n    font-size: 40px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 16px;\n    margin-top: 10px;\n  }\n\n  .blocoFinal[_ngcontent-%COMP%]{\n    padding: 40px;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 14px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n\n  .imgWithoutLink[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 400px){\n  .text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n    margin-bottom: 0;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 15%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    font-style: italic;\n    color: #000;\n    font-size: 12px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 25px;\n    font-size: 12px;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n    font-size: 20px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 12px;\n    margin-top: 10px;\n    font-size: 16px;\n  }\n\n  .cinza[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #717171;\n    font-size: 25px;\n  }\n\n  .imgCoracao[_ngcontent-%COMP%]{\n    width: 50%;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-height: -webkit-fill-available;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 5px;\n  cursor: pointer;\n  transition: transform 0.2s;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFkcmluaG8vcGFkcmluaG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzhCQUM0Qjs7RUFFNUIsb0NBQXNEO0VBQ3RELHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7O0FBRXBCO0FBQ0E7OztHQUdHOzs7QUFHSDtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGdC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WCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyaW5ob3tcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBub25lIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWZhOyAqL1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9URVhUVVJFLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWZmZjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5cclxufVxyXG4vKlxyXG4uYmxvY29JbmljaWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYxZmE7XHJcbn0gKi9cclxuXHJcblxyXG4udGV4dC1wYWRyaW5ob3MgaDF7XHJcbiAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29yYWNhb3tcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uY29yYWNhbyBoM3tcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbWdDb3JhY2Fve1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mbG9yQXp1bE1laW97XHJcbiAgd2lkdGg6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jb21DYXJpbmhve1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5hZ3JhZGVjaW1lbnRvIGg1e1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5tZWlvQ29yZXN7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2JhZGNmMTdkOyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU3ZDsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5N2Q7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWNmYzk2O1xyXG59XHJcblxyXG4udGV4dG97XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucmVzZXJ2ZWl7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLm1laW9Db3Jlc3tcclxuICAvKiBwYWRkaW5nOiA0MHB4OyAqL1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweCAxcHggNDBweDtcclxufVxyXG5cclxuLmNpbnphe1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzcxNzE3MTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2lhVGV4dG97XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYmxvY29GaW5hbHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcblxyXG4uZmluYWwgaDN7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udm9jZUxpbmRhe1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmltZ1Rlcm5ve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuVGVybm97XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA4OWIxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg5YjE7XHJcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmltZ0NvcmFjYW97XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufSAqL1xyXG5cclxuLyogY2VsdWxhciBjb20gdGVsYSBncmFuZGUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcblxyXG4gIC50ZXh0LXBhZHJpbmhvcyBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuZmxvckF6dWxNZWlve1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuY29tQ2FyaW5ob3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cclxuICAgIGNvbG9yOiAjN2E3OTc5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZ0NvcmFjYW97XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnJlc2VydmVpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNpbnphe1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAucmVmZXJlbmNpYVRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5ibG9jb0ZpbmFse1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcblxyXG4gIC5maW5hbCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAudm9jZUxpbmRhe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZ1dpdGhvdXRMaW5re1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgLnRleHQtcGFkcmluaG9zIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuZmxvckF6dWxNZWlve1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbUNhcmluaG97XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5hZ3JhZGVjaW1lbnRvIGg1e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc2VydmVpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZmVyZW5jaWFUZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmOztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2luemF7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIC5pbWdDb3JhY2Fve1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5maW5hbCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudm9jZUxpbmRhe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1heC1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uZ2FsbGVyeSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9392:
/*!******************************************************!*\
  !*** ./src/app/sharepage/footer/footer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 32,
    vars: 0,
    consts: [[1, "container-fluid", "footer", "fixar-rodape"], [1, "row"], [1, "col-lg-6"], [1, "container", "menuHome", "hidden"], [1, "col-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#igreja", 1, "linkMenu"], ["src", "assets\\img\\home\\igreja.png", "alt", "", 1, "imgMenuHome", "imgMenu"], [1, "card-text", "textHomeP"], ["href", "#", 1, "linkMenu"], ["src", "assets\\img\\home\\festa.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["src", "assets\\img\\home\\presente.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["src", "assets\\img\\home\\padrinhos.png", "alt", "", 1, "florMeio", "imgMenu"], [1, "col-lg-2"], ["href", "", "target", "_blank"], [1, "bi", "bi-instagram"], [1, "bi", "bi-twitter"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Desenvolvido pela noiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 1)(7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Igreja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Festa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4)(18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lista de Presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4)(23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12)(28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(255, 255, 255);\n  font-size: 10px;\n}\n\na[_ngcontent-%COMP%]{\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  padding: 0px 5px;\n  font-size: 18px;;\n}\n\na[_ngcontent-%COMP%]:hover{\n  color: yellow;\n}\n\ni[_ngcontent-%COMP%]{\n  padding: 0px 10px;\n}\n\n.fixar-rodape[_ngcontent-%COMP%]\n{\n  position: relative;\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n  \n\n  background-color:rgb(181 148 148);\n  padding: 20px 10px;\n  bottom: 0;\n  left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVwYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHOztBQUVIO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztBQUNUIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmZvb3RlclxyXG57XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig2NiwgNjAsIDYwKTtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn0gKi9cclxuXHJcbmgxe1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5he1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4OztcclxufVxyXG5cclxuYTpob3ZlcntcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG5pe1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG4uZml4YXItcm9kYXBlXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDY2LCA2MCwgNjApOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE4MSAxNDggMTQ4KTtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8822:
/*!******************************************************!*\
  !*** ./src/app/sharepage/navbar/navbar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


const _c0 = function () {
  return {
    exact: true
  };
};
class NavbarComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 15,
    vars: 4,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/madrinhas", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/padrinhos", "routerLinkActive", "active-link", 1, "nav-link"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "padrinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: [".navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%]{\n  color: rgb(114, 152, 223);\n  font-weight: bold;\n}\n\n.navbar[_ngcontent-%COMP%]{\n  background-color: #78c7ee;\n  background-image: none;\n}\n\n\n\n.nav-link[_ngcontent-%COMP%]{\n  color: #fff;\n  font-family: \"Montserrat Alternates\", sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVwYWdlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOzs7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsZ0RBQWdEO0FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLWxpbmt7XHJcbiAgY29sb3I6IHJnYigxMTQsIDE1MiwgMjIzKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhjN2VlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdi1saW5re1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map