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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-clipboard */ 4808);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pages_opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/opt-image-madrinhas/opt-image-madrinhas.component */ 3896);
/* harmony import */ var _pages_opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/opt-image-padrinhos/opt-image-padrinhos.component */ 5059);
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ 1200);
/* harmony import */ var _pages_lista_casamento_lista_casamento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/lista-casamento/lista-casamento.component */ 7917);
/* harmony import */ var _pages_menu_fixed_menu_fixed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/menu-fixed/menu-fixed.component */ 9589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);



















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_17__.ClipboardModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_10__.OptImageMadrinhasComponent, _pages_opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_11__.OptImagePadrinhosComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent, _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _pages_madrinha_madrinha_component__WEBPACK_IMPORTED_MODULE_6__.MadrinhaComponent, _pages_padrinho_padrinho_component__WEBPACK_IMPORTED_MODULE_7__.PadrinhoComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_12__.ImageGalleryComponent, _pages_lista_casamento_lista_casamento_component__WEBPACK_IMPORTED_MODULE_13__.ListaCasamentoComponent, _pages_menu_fixed_menu_fixed_component__WEBPACK_IMPORTED_MODULE_14__.MenuFixedComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_17__.ClipboardModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgOptimizedImage, _pages_opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_10__.OptImageMadrinhasComponent, _pages_opt_image_padrinhos_opt_image_padrinhos_component__WEBPACK_IMPORTED_MODULE_11__.OptImagePadrinhosComponent]
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
    decls: 124,
    vars: 4,
    consts: [[1, "home"], [1, "banner-direita", "tamBanner"], [1, "banner-esquerda"], [1, "banner-esquerda-inferior"], [1, "container"], [1, "row"], [1, "centered-text", "up-position"], [1, "mobile-text"], [1, "centered-text", "middle-position"], [1, "centered-text", "down-position", "col-12"], [1, "frase-com-linhas"], [1, ""], [1, "container", "menuHome"], [1, "col-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#igreja", 1, "linkMenu"], ["src", "assets\\img\\home\\igreja.png", "alt", "", 1, "imgMenuHome", "imgMenu"], [1, "card-text", "textHomeP"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#festa", 1, "linkMenu"], ["src", "assets\\img\\home\\festa.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["href", "#", "routerLink", "/lista-casamento", 1, "linkMenu"], ["src", "assets\\img\\home\\presente.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["data-bs-toggle", "modal", "data-bs-target", "#padrinhos", 1, "col-3"], ["href", "#", 1, "linkMenu"], ["src", "assets\\img\\home\\padrinhos.png", "alt", "", 1, "imgMenuHome", "imgMenu"], ["id", "igreja", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "modalH"], ["id", "exampleModalLabel", 1, "modal-title", "text-center"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["src", "assets\\img\\candelaria.png", "alt", "...", 1, "card-img-top", "imgModal"], [1, "card-text", "place", "text-center"], [1, "card-text", "address", "text-center"], [1, "modal-footer", "modalF"], ["container", ""], ["ngxClipboard", "", "type", "button", 1, "btn", "btn-primary", 3, "cbContent", "container"], ["aria-hidden", "true", 1, "fa", "fa-files-o"], ["href", "https://m.uber.com/ul/?action=setPickup&client_id=92wsifyVsfgPdvUuR_xBSuKcKaSKlWB1cDxri9ak&pickup=my_location&dropoff[formatted_address]=R.%20Castro%20Alves%2C%20781%20-%20Cer%C3%A2mica%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%20Brasil&dropoff[latitude]=-23.626986&dropoff[longitude]=-46.568577", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-dark"], [1, "fa-brands", "fa-uber"], ["href", "https://www.google.com/maps?q=R.+Castro+Alves,+781,+Cer\u00E2mica,+S\u00E3o+Caetano+do+Sul,+SP,+09540-030", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-success"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["href", "https://ul.waze.com/ul?place=ChIJi8k9O8RczpQRjZvL79qp43w&ll=-23.62698590%2C-46.56857680&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "target", "_blank"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-waze"], [1, "fa-brands", "fa-waze"], ["id", "festa", "tabindex", "-1", "aria-labelledby", "festaModal", "aria-hidden", "true", 1, "modal", "fade"], ["id", "festaModal", 1, "modal-title", "text-center"], ["src", "assets\\img\\masterday.jpeg", "alt", "...", 1, "card-img-top", "imgModal"], [1, "modal-footer", "modalF", "text-center"], ["container2", ""], ["href", "https://m.uber.com/ul/?action=setPickup&client_id=TidzCZv9VG_iUw_k5Rppnm2D7RBo5ebTIAqtw8Rf&pickup=my_location&dropoff[formatted_address]=Buffet%20Master%20Day%20-%20Rua%20Cear%C3%A1%20-%20Funda%C3%A7%C3%A3o%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%20Brasil&dropoff[latitude]=-23.603977&dropoff[longitude]=-46.573312", "target", "_blank"], ["href", "https://www.google.com/maps/dir//Buffet+Master+Day+-+R.+Cear%C3%A1,+363+-+Funda%C3%A7%C3%A3o,+S%C3%A3o+Caetano+do+Sul+-+SP,+09520-410/@-23.6291213,-46.5880677,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce5cc188e54379:0xf03539dab808e5e6!2m2!1d-46.5733115!2d-23.6039771!3e0?entry=ttu", "target", "_blank"], ["href", "https://ul.waze.com/ul?preview_venue_id=205391388.2054110488.25886420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "target", "_blank"], ["id", "padrinhos", "tabindex", "-1", "aria-labelledby", "padrinhosModal", "aria-hidden", "true", 1, "modal", "fade"], ["id", "padrinhosModal", 1, "modal-title", "text-center"], [1, "container", "itensPadrinhos"], [1, "row", "text-center"], [1, "col-6"], [1, "linkMenu", 3, "click"], ["src", "assets\\img\\home\\vestido.png", "alt", "", 1, "imgPadrinhos"], [1, "card-text", "textPadrinhos"], ["src", "assets\\img\\home\\terno.png", "alt", "", 1, "imgPadrinhos"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 54)(106, "div", 25)(107, "div", 26)(108, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "h5", 55)(110, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 11)(112, "div", 56)(113, "div", 57)(114, "div", 58)(115, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_115_listener() {
          return ctx.mostrarModalMadrinhas();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "sou madrinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 58)(120, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_120_listener() {
          return ctx.mostrarModalPadrinhos();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "sou padrinho");
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
    dependencies: [ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardDirective, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n\n.home[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  background-image: url('flor1.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: top;\n}\n\n.home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n  width: 12%;\n  height: 100%;\n  background-image: url('cantoInferiorDireito.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background-position: bottom;\n}\n\n.centered-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n}\n\n.centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 100px;\n  \n\n  color: #5893c4;\n  margin: 0;\n}\n\n.centered-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n\n\n.up-position[_ngcontent-%COMP%]{\n  color: #5893c4;\n  text-transform: uppercase;\n  font-size: 25px;\n  font-family: 'Raleway', sans-serif;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  font-weight: bold;\n}\n\n.up-position[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n\n.middle-position[_ngcontent-%COMP%]{\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  font-family: 'Sacramento', cursive;\n}\n\n.down-position[_ngcontent-%COMP%]{\n  text-transform: uppercase;\n  font-size: 20px;\n  font-family: 'Raleway', sans-serif;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.contagem[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.item[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.valor[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: #6f6f64;\n}\n\n.unidade[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  font-weight: bold;\n}\n\n.menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n  \n\n  width: 45%;\n}\n\n.ltsPresente[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 0;\n  max-width: 100%;\n  text-transform: none;\n  color: #4d99d8;\n  padding-left: inherit;\n}\n\n.ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n  margin-top: 100px;\n  width: 45%;\n}\n\n.menuHome[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: currentColor;\n  text-decoration: none;\n}\n\n.menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n  font-weight: bold;\n  font-size: 22px;\n  margin-top: 36px;\n  line-height: 0;\n  max-width: 100%;\n  text-transform: none;\n  color: #4d99d8;\n}\n\n.frase-com-linhas[_ngcontent-%COMP%] {\n  text-transform: none;\n  font-size: 36px;\n  font-family: 'Raleway', sans-serif;\n  border-top: 1px solid #666;\n  border-bottom: 1px solid #666;\n  display: inline-block;\n  padding: 26px;\n  margin-bottom: 50px;\n}\n\n.modalF[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  margin: 2px;\n}\n\n\n\n\n@media (max-width: 767px) {\n  .hidden-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\n    width: 30%; \n\n    height: 100%; \n\n    position: absolute;\n    top: 0;\n    background-image: url('flor1.png');\n    background-repeat: no-repeat;\n    background-size: contain; \n\n    background-position: top; \n\n  }\n\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 95px;\n    color: #5893c4;\n    margin: 0;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .down-position[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n    font-size: 20px;\n    font-family: 'Raleway', sans-serif;\n    transform: translate(-50%, -50%); \n\n    z-index: 1; \n\n  }\n\n  .frase-com-linhas[_ngcontent-%COMP%] {\n    font-size: 23px;\n    margin-bottom: 40px;\n    margin-top: 40px;\n  }\n\n  .menuHome[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n    padding-left: inherit;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n    \n\n    width: 45%;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n    padding-left: inherit;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n    \n\n    width: 100%;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    margin-top: 20px;\n    line-height: 0; \n\n    max-width: 100%; \n\n    text-transform: none;\n    color: #4d99d8;\n  }\n\n  .up-position[_ngcontent-%COMP%] {\n    \n\n    color: #4d99d8;\n    text-transform: uppercase;\n    font-size: 13px;\n    font-family: 'Raleway', sans-serif;\n    top: 10%;\n    z-index: 1;\n    font-weight: bold;\n    text-align: right;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1450px) {\n  .hidden-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-direita[_ngcontent-%COMP%] {\n    width: 20%;\n    height: 100%;\n    top: 0;\n    background-image: url('flor1.png');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: top;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 95px;\n    color: #5893c4;\n    margin: 0;\n  }\n\n  .down-position[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n    font-size: 20px;\n    font-family: 'Raleway', sans-serif;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    padding: 0;\n  }\n\n  .frase-com-linhas[_ngcontent-%COMP%] {\n    text-transform: none;\n    font-size: 26px;\n    font-family: 'Raleway', sans-serif;\n    border-top: 1px solid #666;\n    border-bottom: 1px solid #666;\n    display: inline-block;\n    padding: 26px;\n  }\n\n  .menuHome[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    width: 40%;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n  }\n\n  .ltsPresente[_ngcontent-%COMP%]   .imgPresente[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    width: 40%;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 14px;\n    margin-top: 12px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n  }\n\n  .up-position[_ngcontent-%COMP%] {\n    color: #4d99d8;\n    text-transform: uppercase;\n    font-size: 15px;\n    font-family: 'Raleway', sans-serif;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    font-weight: bold;\n  }\n}\n\n\n.btn-waze[_ngcontent-%COMP%]{\n  background-color: #05c8f7;\n  border-color: #05c8f7;\n}\n\n.modalP[_ngcontent-%COMP%]{\n  padding-top: 20px;\n  text-align: center;\n}\n\n.place[_ngcontent-%COMP%]{\n  margin-bottom: 6px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n}\n\n.address[_ngcontent-%COMP%]{\n  padding: 0 12px 0 12px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.imgModal[_ngcontent-%COMP%]{\n  padding: 12px;\n  padding-top: 0;\n}\n\n.modalH[_ngcontent-%COMP%]{\n  border-bottom: none;\n}\n\n.modalF[_ngcontent-%COMP%]{\n  display: inline;\n  flex-shrink: 0;\n  border-top: none;\n  text-align: center;\n  flex-wrap: wrap-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)* .5);\n  background-color: var(--bs-modal-footer-bg);\n  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);\n  border-bottom-right-radius: var(--bs-modal-inner-border-radius);\n  border-bottom-left-radius: var(--bs-modal-inner-border-radius);\n}\n\n.rowPresentes[_ngcontent-%COMP%]{\n  padding: 10px;\n}\n\n.itensPadrinhos[_ngcontent-%COMP%]   .imgPadrinhos[_ngcontent-%COMP%]{\n  width: 45%;\n  text-decoration: none;\n}\n\n.itensPadrinhos[_ngcontent-%COMP%]   .textPadrinhos[_ngcontent-%COMP%] {\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  text-decoration: none;\n  color: #4d99d8;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n\n.linkMenu[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n\n\n@media (max-width: 400px){\n  .home[_ngcontent-%COMP%]{\n    width: 30%;\n    height: 100%;\n  }\n\n  .up-position[_ngcontent-%COMP%]{\n    color: #4d99d8;\n    text-transform: uppercase;\n    font-size: 10px;\n    font-family: 'Raleway', sans-serif;\n    top: 10%;\n    z-index: 1;\n    font-weight: bold;\n    text-align: right;\n  }\n\n  .centered-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n    color: #5893c4;\n    margin: 0;\n  }\n\n  .frase-com-linhas[_ngcontent-%COMP%]{\n    font-size: 16px;\n    margin-bottom: 0;\n    margin-top: 67px;\n    padding: 20px;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .imgMenu[_ngcontent-%COMP%]{\n    margin-top: 0;\n    width: 100%;\n  }\n\n  .menuHome[_ngcontent-%COMP%]   .textHomeP[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 12px;\n    margin-top: 20px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n  }\n\n  .home[_ngcontent-%COMP%]   .banner-esquerda-inferior[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menuHome[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 0;\n    max-width: 100%;\n    text-transform: none;\n    color: #4d99d8;\n    padding-left: inherit;\n    margin-top: 30px;\n  }\n\n  .place[_ngcontent-%COMP%]{\n    margin-bottom: 6px;\n    font-family: 'Raleway', sans-serif;\n    font-weight: bold;\n    font-size: 12px;\n  }\n\n  .address[_ngcontent-%COMP%]{\n    padding: 0 12px 0 12px;\n    font-family: 'Raleway', sans-serif;\n    font-weight: bold;\n    margin-bottom: 10px;\n    font-size: 11px;\n  }\n\n  .modalF[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    margin: 2px;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sa0NBQXlEO0VBQ3pELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpREFBd0U7RUFDeEUsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsdURBQXVEOztBQUV2RDtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxZQUFZLEVBQUUscURBQXFEO0lBQ25FLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sa0NBQXlEO0lBQ3pELDRCQUE0QjtJQUM1Qix3QkFBd0IsRUFBRSx1Q0FBdUM7SUFDakUsd0JBQXdCLEVBQUUseUNBQXlDO0VBQ3JFOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQ0FBZ0MsRUFBRSw2QkFBNkI7SUFDL0QsVUFBVSxFQUFFLHNFQUFzRTtFQUNwRjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjLEVBQUUsK0RBQStEO0lBQy9FLGVBQWUsRUFBRSw4Q0FBOEM7SUFDL0Qsb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLE1BQU07SUFDTixrQ0FBeUQ7SUFDekQsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsdUVBQXVFO0VBQ3ZFLDJDQUEyQztFQUMzQyx5RkFBeUY7RUFDekYsK0RBQStEO0VBQy9ELDhEQUE4RDtBQUNoRTs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7OztBQUdBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXN0aWxvIHBhcmEgbyBiYW5uZXIgKi9cclxuLmhvbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob21lIC5iYW5uZXItZGlyZWl0YSB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL2Zsb3IxLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG59XHJcblxyXG4uaG9tZSAuYmFubmVyLWVzcXVlcmRhLWluZmVyaW9yIHtcclxuICB3aWR0aDogMTIlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL2NhbnRvSW5mZXJpb3JEaXJlaXRvLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuXHJcbi5jZW50ZXJlZC10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dCBoMSB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICAvKiBjb2xvcjogIzc4N2RhMzsgKi9cclxuICBjb2xvcjogIzU4OTNjNDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC10ZXh0IHAge1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuLnVwLXBvc2l0aW9ue1xyXG4gIGNvbG9yOiAjNTg5M2M0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi51cC1wb3NpdGlvbiBwIHtcclxuICBsaW5lLWhlaWdodDogMDtcclxufVxyXG5cclxuLm1pZGRsZS1wb3NpdGlvbntcclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LWZhbWlseTogJ1NhY3JhbWVudG8nLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uZG93bi1wb3NpdGlvbntcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIHRvcDogNzUlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFnZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi52YWxvciB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNmY2ZjY0O1xyXG59XHJcblxyXG4udW5pZGFkZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWVudUhvbWUgLmltZ01lbnV7XHJcbiAgLyogbWFyZ2luLXRvcDogMTAwcHg7ICovXHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLmx0c1ByZXNlbnRlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOiAjNGQ5OWQ4O1xyXG4gIHBhZGRpbmctbGVmdDogaW5oZXJpdDtcclxufVxyXG5cclxuLmx0c1ByZXNlbnRlIC5pbWdQcmVzZW50ZXtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4ubWVudUhvbWUgYXtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm1lbnVIb21lIC50ZXh0SG9tZVB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOiAjNGQ5OWQ4O1xyXG59XHJcblxyXG4uZnJhc2UtY29tLWxpbmhhcyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm1vZGFsRiBidXR0b257XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi8qIC8vIHNob3cgaXQgb24gZGV2aWNlcyB3aXRoIG1heCBvZiA3NjcgcHggYW5kIGxvd2VyICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaGlkZGVuLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmJhbm5lci1kaXJlaXRhIHtcclxuICAgIHdpZHRoOiAzMCU7IC8qIEFqdXN0ZSBjb25mb3JtZSBuZWNlc3PDg8KhcmlvICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIFVzYW5kbyAxMDAlIHBhcmEgY29icmlyIGEgYWx0dXJhIGRvIGVsZW1lbnRvIHBhaSAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9mbG9yMS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgLyogQWx0ZXJhZG8gZGUgJ2NvdmVyJyBwYXJhICdjb250YWluJyAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wOyAvKiBQb3NpY2lvbmEgYSBpbWFnZW0gbmEgcGFydGUgaW5mZXJpb3IgKi9cclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZC10ZXh0IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogOTVweDtcclxuICAgIGNvbG9yOiAjNTg5M2M0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmJhbm5lci1lc3F1ZXJkYS1pbmZlcmlvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmRvd24tcG9zaXRpb257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBNb3ZlIGEgZGl2IHBhcmEgbyBjZW50cm8gKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIERlZmluZSB1bWEgb3JkZW0gZGUgZW1waWxoYW1lbnRvIHN1cGVyaW9yIChuYSBmcmVudGUgZGFzIGltYWdlbnMpICovXHJcbiAgfVxyXG5cclxuICAuZnJhc2UtY29tLWxpbmhhcyB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjNGQ5OWQ4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC5pbWdNZW51e1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjVweDsgKi9cclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICM0ZDk5ZDg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUgLmltZ1ByZXNlbnRle1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjVweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC50ZXh0SG9tZVB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDsgLyogQWx0ZXJlIG8gdmFsb3IgY29uZm9ybWUgbmVjZXNzw4PCoXJpbywgMSBzZXJpYSBvIHZhbG9yIG5vcm1hbCAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiBUZXh0byBuw4PCo28gdWx0cmFwYXNzYXLDg8KhIGEgbGFyZ3VyYSBkYSBjYWl4YSAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzRkOTlkODtcclxuICB9XHJcblxyXG4gIC51cC1wb3NpdGlvbiB7XHJcbiAgICAvKiBjb2xvcjogIzY2NmM4YjsgKi9cclxuICAgIGNvbG9yOiAjNGQ5OWQ4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmx0c1ByZXNlbnRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjNGQ5OWQ4O1xyXG4gIH1cclxuXHJcbiAgLmx0c1ByZXNlbnRlIC5pbWdQcmVzZW50ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcbiAgLmhpZGRlbi1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ob21lIC5iYW5uZXItZGlyZWl0YSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9mbG9yMS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICB9XHJcblxyXG4gIC5ob21lIC5iYW5uZXItZXNxdWVyZGEtaW5mZXJpb3Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZC10ZXh0IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogOTVweDtcclxuICAgIGNvbG9yOiAjNTg5M2M0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRvd24tcG9zaXRpb257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuZnJhc2UtY29tLWxpbmhhcyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjZweDtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjNGQ5OWQ4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21lIC5pbWdNZW51e1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICM0ZDk5ZDg7XHJcbiAgfVxyXG5cclxuICAubHRzUHJlc2VudGUgLmltZ1ByZXNlbnRle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAubWVudUhvbWUgLnRleHRIb21lUHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzRkOTlkODtcclxuICB9XHJcblxyXG4gIC51cC1wb3NpdGlvbiB7XHJcbiAgICBjb2xvcjogIzRkOTlkODtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uYnRuLXdhemV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzhmNztcclxuICBib3JkZXItY29sb3I6ICMwNWM4Zjc7XHJcbn1cclxuXHJcbi5tb2RhbFB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGxhY2V7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hZGRyZXNze1xyXG4gIHBhZGRpbmc6IDAgMTJweCAwIDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW1nTW9kYWx7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLm1vZGFsSHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWxGe1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1icy1tb2RhbC1wYWRkaW5nKSAtIHZhcigtLWJzLW1vZGFsLWZvb3Rlci1nYXApKiAuNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtbW9kYWwtZm9vdGVyLWJnKTtcclxuICBib3JkZXItdG9wOiB2YXIoLS1icy1tb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1tb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tYnMtbW9kYWwtaW5uZXItYm9yZGVyLXJhZGl1cyk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYnMtbW9kYWwtaW5uZXItYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuXHJcbi5yb3dQcmVzZW50ZXN7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLml0ZW5zUGFkcmluaG9zIC5pbWdQYWRyaW5ob3N7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pdGVuc1BhZHJpbmhvcyAudGV4dFBhZHJpbmhvcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzRkOTlkODtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5saW5rTWVudXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gIC5ob21le1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC51cC1wb3NpdGlvbntcclxuICAgIGNvbG9yOiAjNGQ5OWQ4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkLXRleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgY29sb3I6ICM1ODkzYzQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZnJhc2UtY29tLWxpbmhhc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2N3B4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZSAuaW1nTWVudXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tZW51SG9tZSAudGV4dEhvbWVQe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjNGQ5OWQ4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmJhbm5lci1lc3F1ZXJkYS1pbmZlcmlvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVIb21le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICM0ZDk5ZDg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsYWNle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmFkZHJlc3N7XHJcbiAgICBwYWRkaW5nOiAwIDEycHggMCAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbEYgYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    decls: 53,
    vars: 0,
    consts: [[1, "lista-casamento"], [1, "blocoInicial"], [1, "title"], [1, "container"], [1, "row"], [1, "text-center", "text-lista-casamento"], [1, "mobile-text"], ["src", "assets\\img\\florMeioAzul.png", "alt", "", 1, "florAzulMeio"], [1, "agradecimento"], [1, "comCarinho"], [1, "card", "col-3"], ["href", "https://www.amazon.com.br/hz/wishlist/ls/DA8BW305Y2J5?ref_=wl_share ", "target", "_blank"], [1, "circle"], ["src", "assets/img/home/listaPresente/amazon.png", "alt", "", 1, "ltsPresente", "imgPresente"], [1, "content"], ["href", "https://lista.camicado.com.br/be_e_de", "target", "_blank"], ["src", "assets/img/home/listaPresente/camicado.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["href", "https://www.querodecasamento.com.br/lista-de-casamento/andresa-vinicius", "target", "_blank"], ["src", "assets/img/home/listaPresente/magalu.png", "alt", "", 1, "ltsPresente", "imgPresente"], ["href", "https://www.precolandia.com.br/gift-list-details/view/casamento-andresa-e-vinicius-09-11-2024", "target", "_blank"], ["src", "assets/img/home/listaPresente/precolandia.png", "alt", "", 1, "ltsPresente", "imgPresente"]],
    template: function ListaCasamentoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lista de Presentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Criamos esse espa\u00E7o para colocar listas de presente justa e variada para ajudar aqueles que querem presentear.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Com carinho, Andresa e Vin\u00EDcius");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3)(16, "div", 4)(17, "div", 10)(18, "a", 11)(19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Indicado para quem tem a assinatura Amazon Prime e, portanto, consegue enviar o presente com frete gratis e sem estresse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Dar uma olhadinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10)(27, "a", 15)(28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "A Camicado tem uma lista com pe\u00E7as lindas e com parcelamento sem juros na maioria das pe\u00E7as.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Dar uma olhadinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10)(36, "a", 17)(37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14)(40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Uma loja com muitas op\u00E7\u00F5es de presentes e tamb\u00E9m com entrega facil, r\u00E1pida e parcelamento sem juros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Dar uma olhadinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10)(45, "a", 19)(46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14)(49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Criamos uma lista com variedade de presentes e valores que podem ser comprados ou, at\u00E9 mesmo, ajudar na ideia de presentes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Dar uma olhadinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    styles: [".lista-casamento[_ngcontent-%COMP%]{\n  background-image: url('TEXTURE.png');\n  background-color: #eaefff;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-style: normal;\n}\n\n.blocoFinal[_ngcontent-%COMP%]{\n  padding: 40px;\n}\n\n.text-lista-casamento[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-family: 'Imperial Script', cursive;\n  font-size: 80px;\n  margin-top: 30px;\n}\n\n.comCarinho[_ngcontent-%COMP%]{\n  text-align: right;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n  color: #000;\n  font-size: 17px;\n}\n\n.florAzulMeio[_ngcontent-%COMP%]{\n  width: 5%;\n  margin-bottom: 25px;\n}\n\n.texto[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 25px;\n}\n\n\n.referenciaTexto[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n  color: #7f7f7f;;\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.comCarinho[_ngcontent-%COMP%]{\n  text-align: right;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n  color: #000;\n  font-size: 17px;\n}\n\n\n\n@media (max-width: 781px) and (max-width: 1450px) {\n  .text-lista-casamento[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 10%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 16px;\n    margin-top: 10px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    font-size: 16px;\n    margin-top: 25px;\n    text-align: left;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    color: #7a7979;\n    font-size: 14px;\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 280px;\n  height: 420px;\n  background: #fff;\n  margin: 20px;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 15px 25px rgba(0,0,0,0.2);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  padding: 0;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 25px 35px rgba(0,0,0,0.3);\n}\n\n.card[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  clip-path: circle(180px at center 0);\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  width: 80%;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  padding: 20px;\n  page-break-after: 20px;\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  background: #000;\n  color: #fff;\n  border-radius: 40px;\n  text-decoration: none;\n  margin-top: 20px;\n  transition: background 0.3s ease;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n\n.card[_ngcontent-%COMP%]:nth-child(1)   .circle[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:nth-child(1)   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #9acffae8;\n}\n\n.card[_ngcontent-%COMP%]:nth-child(2)   .circle[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:nth-child(2)   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #9acffae8;\n}\n\n.card[_ngcontent-%COMP%]:nth-child(3)   .circle[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:nth-child(3)   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #9acffae8;\n}\n\n.card[_ngcontent-%COMP%]:nth-child(4)   .circle[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:nth-child(4)   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #9acffae8;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 80%;\n    max-width: 320px; \n\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGlzdGEtY2FzYW1lbnRvL2xpc3RhLWNhc2FtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQXNEO0VBQ3RELHlCQUF5QjtFQUN6Qix3Q0FBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFO0lBQ0UsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMscURBQXFEO0VBQ3JELFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0IsRUFBRSxvRUFBb0U7RUFDeEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YS1jYXNhbWVudG97XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvVEVYVFVSRS5wbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVmZmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmJsb2NvRmluYWx7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuLnRleHQtbGlzdGEtY2FzYW1lbnRvIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNvbUNhcmluaG97XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmZsb3JBenVsTWVpb3tcclxuICB3aWR0aDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuXHJcbi5yZWZlcmVuY2lhVGV4dG97XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY29tQ2FyaW5ob3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4vKiBjZWx1bGFyIGNvbSB0ZWxhIGdyYW5kZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzgxcHgpIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAudGV4dC1saXN0YS1jYXNhbWVudG8gaDF7XHJcbiAgICBmb250LWZhbWlseTogJ0ltcGVyaWFsIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZsb3JBenVsTWVpb3tcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5yZWZlcmVuY2lhVGV4dG97XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3Zjs7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmNvbUNhcmluaG97XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogIzdhNzk3OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogNDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAyNXB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICBib3gtc2hhZG93OiAwIDI1cHggMzVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5jYXJkIC5jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBjbGlwLXBhdGg6IGNpcmNsZSgxODBweCBhdCBjZW50ZXIgMCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCAuY2lyY2xlIGltZyB7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jYXJkIC5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFnZS1icmVhay1hZnRlcjogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIC5jb250ZW50IHAge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4uY2FyZCAuY29udGVudCBhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkIC5jb250ZW50IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZCgxKSAuY2lyY2xlLFxyXG4uY2FyZDpudGgtY2hpbGQoMSkgLmNvbnRlbnQgYSB7XHJcbiAgYmFja2dyb3VuZDogIzlhY2ZmYWU4O1xyXG59XHJcblxyXG4uY2FyZDpudGgtY2hpbGQoMikgLmNpcmNsZSxcclxuLmNhcmQ6bnRoLWNoaWxkKDIpIC5jb250ZW50IGEge1xyXG4gIGJhY2tncm91bmQ6ICM5YWNmZmFlODtcclxufVxyXG5cclxuLmNhcmQ6bnRoLWNoaWxkKDMpIC5jaXJjbGUsXHJcbi5jYXJkOm50aC1jaGlsZCgzKSAuY29udGVudCBhIHtcclxuICBiYWNrZ3JvdW5kOiAjOWFjZmZhZTg7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZCg0KSAuY2lyY2xlLFxyXG4uY2FyZDpudGgtY2hpbGQoNCkgLmNvbnRlbnQgYSB7XHJcbiAgYmFja2dyb3VuZDogIzlhY2ZmYWU4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMzIwcHg7IC8qIEF1bWVudGVpIG8gbWF4LXdpZHRoIHBhcmEgZ2FyYW50aXIgcXVlIG7Dg8KjbyBmaXF1ZSBtdWl0byBlc3RyZWl0byAqL1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../opt-image-madrinhas/opt-image-madrinhas.component */ 3896);
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sharepage/navbar/navbar.component */ 8822);



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
    decls: 40,
    vars: 0,
    consts: [[1, "madrinha"], [1, "blocoInicial"], [1, "title"], [1, "container"], [1, "row"], [1, "text-center", "text-madrinhas"], [1, "mobile-text"], ["src", "assets\\img\\florMeioAzul.png", "alt", "", 1, "florAzulMeio"], [1, "agradecimento"], [1, "comCarinho"], [1, "meioCores"], [1, "text-center"], [1, "reservei"], [1, "referenciaTexto"], [1, "coracao", "texto"], [1, "text-center", "serenity"], [1, "row", "text-center"], [1, "col-4"], ["src", "assets\\img\\madrinhas\\coracao\\coracao1.png", "alt", "", 1, "imgCoracao"], ["src", "assets\\img\\madrinhas\\coracao\\coracao2.png", "alt", "", 1, "imgCoracao"], ["src", "assets\\img\\madrinhas\\coracao\\coracao3.png", "alt", "", 1, "imgCoracao"], [1, "blocoFinal"], [1, "row", "text-center", "final"], [1, "vestido"], [1, "voceLinda"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "div", 11)(18, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "reservei esse espa\u00E7o para te ajudar na escolha das cores seu vestido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "abaixo est\u00E1 a refer\u00EAncia da cor dos vestidos das madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "cor serenity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 21)(33, "div", 3)(34, "div", 22)(35, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "vestidos para se inspirar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "quero te ver linda e deslumbrante");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-opt-image-madrinhas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_opt_image_madrinhas_opt_image_madrinhas_component__WEBPACK_IMPORTED_MODULE_0__.OptImageMadrinhasComponent, _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
    styles: [".madrinha[_ngcontent-%COMP%] {\n  background-image: url('TEXTURE.png');\n  background-color: #eaefff;\n  background-size: cover;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.blocoFinal[_ngcontent-%COMP%]{\n  padding: 40px;\n}\n\n.text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-family: 'Imperial Script', cursive;\n  font-size: 80px;\n  margin-top: 30px;\n}\n\n.florAzulMeio[_ngcontent-%COMP%]{\n  width: 5%;\n  margin-bottom: 25px;\n}\n\n.imgCoracao[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.comCarinho[_ngcontent-%COMP%]{\n  text-align: right;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n  color: #000;\n  font-size: 17px;\n}\n\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 25px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  background-color: #badcf17d;\n}\n\n.texto[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.reservei[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 15px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  padding: 40px 40px 1px 40px;\n}\n\n.serenity[_ngcontent-%COMP%]{\n  margin: 50px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #007dbe;\n  font-size: 50px;\n}\n\n.referenciaTexto[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n  color: #7f7f7f;;\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  margin-top: 15px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.voceLinda[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #7f7f7f;\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 40px;\n}\n\n\n\n@media (max-width: 781px) and (max-width: 1450px) {\n  .text-madrinhas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 10%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    font-size: 16px;\n    margin-top: 25px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    color: #7a7979;\n    font-size: 14px;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n  }\n\n  .serenity[_ngcontent-%COMP%]{\n    margin: 50px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #007dbe;\n    font-size: 40px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 16px;\n    margin-top: 10px;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 14px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-height: -webkit-fill-available;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 5px;\n  cursor: pointer;\n  transition: transform 0.2s;\n  text-align: center;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFkcmluaGEvbWFkcmluaGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFzRDtFQUN0RCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0U7SUFDRSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLm1hZHJpbmhhIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9URVhUVVJFLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWZmZjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmJsb2NvRmluYWx7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuLnRleHQtbWFkcmluaGFzIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZsb3JBenVsTWVpb3tcclxuICB3aWR0aDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmltZ0NvcmFjYW97XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21DYXJpbmhve1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5hZ3JhZGVjaW1lbnRvIGg1e1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5tZWlvQ29yZXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZGNmMTdkO1xyXG59XHJcblxyXG4udGV4dG97XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucmVzZXJ2ZWl7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLm1laW9Db3Jlc3tcclxuICBwYWRkaW5nOiA0MHB4IDQwcHggMXB4IDQwcHg7XHJcbn1cclxuXHJcbi5zZXJlbml0eXtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDdkYmU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4ucmVmZXJlbmNpYVRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjN2Y3ZjdmOztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmZpbmFsIGgze1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnZvY2VMaW5kYXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzdmN2Y3ZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi8qIGNlbHVsYXIgY29tIHRlbGEgZ3JhbmRlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODFweCkgYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gIC50ZXh0LW1hZHJpbmhhcyBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuZmxvckF6dWxNZWlve1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuY29tQ2FyaW5ob3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGNvbG9yOiAjN2E3OTc5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc2VydmVpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlcmVuaXR5e1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDdkYmU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAucmVmZXJlbmNpYVRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5maW5hbCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAudm9jZUxpbmRhe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3ZjdmN2Y7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1heC1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uZ2FsbGVyeSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9589:
/*!**********************************************************!*\
  !*** ./src/app/pages/menu-fixed/menu-fixed.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuFixedComponent: () => (/* binding */ MenuFixedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class MenuFixedComponent {
  static #_ = this.ɵfac = function MenuFixedComponent_Factory(t) {
    return new (t || MenuFixedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuFixedComponent,
    selectors: [["app-menu-fixed"]],
    decls: 21,
    vars: 0,
    consts: [[1, "fixed-menu"], ["routerLink", "", 1, "link", "home"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["routerLink", "/madrinhas", 1, "link", "icon"], ["aria-hidden", "true", 1, "fa", "fa-user-o"], ["routerLink", "/padrinhos", 1, "link", "icon"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["routerLink", "/lista-casamento", 1, "link", "icon"], ["aria-hidden", "true", 1, "fa", "fa-gift"], ["aria-hidden", "true", 1, "fa", "fa-file-text-o"]],
    template: function MenuFixedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "in\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "madrinha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "padrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "lista de casamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "confirmar presen\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".fixed-menu[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #9acffa;\n  display: flex;\n  justify-content: space-around;\n  padding: 12px 0;\n  z-index: 9;\n}\n\n.fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-family: \"Montserrat Alternates\", sans-serif;\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  padding: 0px 5px;\n}\n\n.fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 4px;\n}\n\n.fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 14px;\n  display: block;\n}\n\n.fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n\n\n@media (min-width: 600px) {\n  .fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 768px) {\n  .fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .fixed-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWVudS1maXhlZC9tZW51LWZpeGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLW1lbnUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhY2ZmYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmc6IDEycHggMDtcclxuICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uZml4ZWQtbWVudSAubGluayB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG59XHJcblxyXG4uZml4ZWQtbWVudSAubGluayBpIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uZml4ZWQtbWVudSAubGluayBzcGFuIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZml4ZWQtbWVudSAubGluayBpbWcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ubGluayAuaWNvbiwgLmxpbmsgLmhvbWUge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2aWRhZGUgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZpeGVkLW1lbnUgLmxpbmsgaSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuZml4ZWQtbWVudSAubGluayBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5maXhlZC1tZW51IC5saW5rIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpeGVkLW1lbnUgLmxpbmsgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    styles: [".gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 30%; \n\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n  max-width: 30%; \n\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  object-fit: contain; \n\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  color: rgb(250, 250, 250);\n  font-weight: bold;\n  font-size: 20px;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n\n.next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  color: rgb(250, 250, 250);\n}\n\n@media (max-width: 768px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 45%; \n\n    max-width: 45%;\n  }\n}\n\n@media (max-width: 480px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 90%; \n\n    max-width: 90%;\n  }\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3B0LWltYWdlLW1hZHJpbmhhcy9vcHQtaW1hZ2UtbWFkcmluaGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWEsRUFBRSx1RUFBdUU7RUFDdEYsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFFLGtDQUFrQztBQUNwRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQixFQUFFLHFEQUFxRDtBQUM1RTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLGFBQWEsRUFBRSxxREFBcUQ7SUFDcEUsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhLEVBQUUsMkRBQTJEO0lBQzFFLGNBQWM7RUFDaEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG4gIGZsZXg6IDEgMSAzMCU7IC8qIEFqdXN0YSBhIGxhcmd1cmEgcGFyYSBjZXJjYSBkZSAzMCUsIHBlcm1pdGluZG8gMyBpbWFnZW5zIHBvciBsaW5oYSAqL1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMzAlOyAvKiBMaW1pdGEgYSBsYXJndXJhIG3Dg8KheGltYSBhIDMwJSAqL1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47IC8qIFBhcmEgZ2FyYW50aXIgcXVlIGEgaW1hZ2VtIGZpcXVlIGRlbnRybyBkbyBtb2RhbCAqL1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLnByZXYge1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uZXh0IHtcclxuICByaWdodDogMjBweDtcclxufVxyXG5cclxuLnByZXY6aG92ZXIsXHJcbi5uZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBmbGV4OiAxIDEgNDUlOyAvKiBBanVzdGEgcGFyYSAyIGltYWdlbnMgcG9yIGxpbmhhIGVtIHRlbGFzIG1lbm9yZXMgKi9cclxuICAgIG1heC13aWR0aDogNDUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgZmxleDogMSAxIDkwJTsgLyogQWp1c3RhIHBhcmEgMSBpbWFnZW0gcG9yIGxpbmhhIGVtIHRlbGFzIG11aXRvIHBlcXVlbmFzICovXHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    styles: [".gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 30%; \n\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n  max-width: 30%; \n\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  object-fit: contain; \n\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  color: rgb(65, 65, 65);\n  font-weight: bold;\n  font-size: 20px;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 1000;\n}\n\n.prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n\n.next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  color: rgb(65, 65, 65);\n}\n\n@media (max-width: 768px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 45%; \n\n    max-width: 45%;\n  }\n}\n\n@media (max-width: 480px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    flex: 1 1 90%; \n\n    max-width: 90%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb3B0LWltYWdlLXBhZHJpbmhvcy9vcHQtaW1hZ2UtcGFkcmluaG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWEsRUFBRSx1RUFBdUU7RUFDdEYsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFFLGtDQUFrQztBQUNwRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQixFQUFFLHFEQUFxRDtBQUM1RTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGFBQWEsRUFBRSxxREFBcUQ7SUFDcEUsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhLEVBQUUsMkRBQTJEO0lBQzFFLGNBQWM7RUFDaEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG4gIGZsZXg6IDEgMSAzMCU7IC8qIEFqdXN0YSBhIGxhcmd1cmEgcGFyYSBjZXJjYSBkZSAzMCUsIHBlcm1pdGluZG8gMyBpbWFnZW5zIHBvciBsaW5oYSAqL1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMzAlOyAvKiBMaW1pdGEgYSBsYXJndXJhIG3Dg8KheGltYSBhIDMwJSAqL1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47IC8qIFBhcmEgZ2FyYW50aXIgcXVlIGEgaW1hZ2VtIGZpcXVlIGRlbnRybyBkbyBtb2RhbCAqL1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLnByZXYge1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uZXh0IHtcclxuICByaWdodDogMjBweDtcclxufVxyXG5cclxuLnByZXY6aG92ZXIsXHJcbi5uZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBmbGV4OiAxIDEgNDUlOyAvKiBBanVzdGEgcGFyYSAyIGltYWdlbnMgcG9yIGxpbmhhIGVtIHRlbGFzIG1lbm9yZXMgKi9cclxuICAgIG1heC13aWR0aDogNDUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgZmxleDogMSAxIDkwJTsgLyogQWp1c3RhIHBhcmEgMSBpbWFnZW0gcG9yIGxpbmhhIGVtIHRlbGFzIG11aXRvIHBlcXVlbmFzICovXHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    styles: [".padrinho[_ngcontent-%COMP%]{\n  background-image: url('TEXTURE.png');\n  background-color: #eaefff;\n  background-size: cover;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-family: 'Imperial Script', cursive;\n  font-size: 80px;\n  margin-top: 30px;\n}\n\n.florAzulMeio[_ngcontent-%COMP%]{\n  width: 5%;\n  margin-bottom: 25px;\n}\n\n.comCarinho[_ngcontent-%COMP%]{\n  text-align: right;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 200;\n  font-style: italic;\n  color: #000;\n  font-size: 17px;\n}\n\n.agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 25px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  background-color: #bdc1c33b;\n}\n\n.texto[_ngcontent-%COMP%]{\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.reservei[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-top: 15px;\n}\n\n.meioCores[_ngcontent-%COMP%]{\n  padding: 40px 40px 1px 40px;\n}\n\n.cinza[_ngcontent-%COMP%]{\n  margin: 50px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #717171;\n  font-size: 50px;\n}\n\n.referenciaTexto[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 200;\n  font-style: normal;\n  color: #7f7f7f;;\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.blocoFinal[_ngcontent-%COMP%]{\n  padding: 40px;\n}\n\n.final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  margin-top: 15px;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.voceLinda[_ngcontent-%COMP%]{\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #7f7f7f;\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 40px;\n}\n\n\n\n@media (max-width: 781px) and (max-width: 1450px) {\n  .text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 10%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    font-size: 16px;\n    margin-top: 25px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    color: #7a7979;\n    font-size: 14px;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n  }\n\n  .cinza[_ngcontent-%COMP%]{\n    margin: 50px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #717171;\n    font-size: 40px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 16px;\n    margin-top: 10px;\n  }\n\n  .blocoFinal[_ngcontent-%COMP%]{\n    padding: 40px;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 14px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n}\n\n@media (max-width: 400px){\n  .text-padrinhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: 'Imperial Script', cursive;\n    font-size: 60px;\n    margin-top: 30px;\n    margin-bottom: 0;\n  }\n\n  .florAzulMeio[_ngcontent-%COMP%]{\n    width: 15%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n\n  .comCarinho[_ngcontent-%COMP%]{\n    text-align: right;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-weight: 200;\n    font-style: italic;\n    color: #000;\n    font-size: 12px;\n  }\n\n  .agradecimento[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 25px;\n    font-size: 12px;\n  }\n\n  .reservei[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-top: 15px;\n    font-size: 20px;\n  }\n\n  .referenciaTexto[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 200;\n    font-style: normal;\n    color: #7f7f7f;;\n    font-size: 12px;\n    margin-top: 10px;\n    font-size: 16px;\n  }\n\n  .cinza[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #717171;\n    font-size: 25px;\n  }\n\n  .final[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #000;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n\n  .voceLinda[_ngcontent-%COMP%]{\n    font-family: \"Montserrat Alternates\", sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #7f7f7f;\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n  }\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-height: -webkit-fill-available;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 5px;\n  cursor: pointer;\n  transition: transform 0.2s;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFkcmluaG8vcGFkcmluaG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFzRDtFQUN0RCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0U7SUFDRSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyaW5ob3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9URVhUVVJFLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWZmZjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLnRleHQtcGFkcmluaG9zIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZsb3JBenVsTWVpb3tcclxuICB3aWR0aDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmNvbUNhcmluaG97XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmFncmFkZWNpbWVudG8gaDV7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLm1laW9Db3Jlc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjMWMzM2I7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5yZXNlcnZlaXtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubWVpb0NvcmVze1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweCAxcHggNDBweDtcclxufVxyXG5cclxuLmNpbnphe1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzcxNzE3MTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2lhVGV4dG97XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM3ZjdmN2Y7O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYmxvY29GaW5hbHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcblxyXG4uZmluYWwgaDN7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udm9jZUxpbmRhe1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLyogY2VsdWxhciBjb20gdGVsYSBncmFuZGUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MXB4KSBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcbiAgLnRleHQtcGFkcmluaG9zIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbXBlcmlhbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5mbG9yQXp1bE1laW97XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuYWdyYWRlY2ltZW50byBoNXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIC5jb21DYXJpbmhve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6ICM3YTc5Nzk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAucmVzZXJ2ZWl7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY2luemF7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcblxyXG4gIC5yZWZlcmVuY2lhVGV4dG97XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3Zjs7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJsb2NvRmluYWx7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbmFsIGgze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC52b2NlTGluZGF7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3ZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gIC50ZXh0LXBhZHJpbmhvcyBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW1wZXJpYWwgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZsb3JBenVsTWVpb3tcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb21DYXJpbmhve1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYWdyYWRlY2ltZW50byBoNXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5yZXNlcnZlaXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5yZWZlcmVuY2lhVGV4dG97XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEFsdGVybmF0ZXNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzdmN2Y3Zjs7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNpbnphe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuZmluYWwgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnZvY2VMaW5kYXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXgtaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmdhbGxlcnkgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    decls: 18,
    vars: 4,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/madrinhas", "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/padrinhos", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "/lista-casamento", "routerLinkActive", "active-link", 1, "nav-link"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6)(16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "lista de casamento");
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
    styles: [".navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%]{\n  color: rgb(114, 152, 223);\n  font-weight: bold;\n}\n\n.navbar[_ngcontent-%COMP%]{\n  background-color: #9acffa;\n  background-image: none;\n}\n\n\n\n.nav-link[_ngcontent-%COMP%]{\n  color: #fff;\n  font-family: \"Montserrat Alternates\", sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVwYWdlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOzs7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsZ0RBQWdEO0FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLWxpbmt7XHJcbiAgY29sb3I6IHJnYigxMTQsIDE1MiwgMjIzKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjZmZhO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdi1saW5re1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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