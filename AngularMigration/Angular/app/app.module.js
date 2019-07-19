"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var contact_component_1 = require("./components/contact.component");
var router_2 = require("@angular/router");
var HandlingStrategy = /** @class */ (function () {
    function HandlingStrategy() {
    }
    HandlingStrategy.prototype.shouldProcessUrl = function (url) {
        return url.toString().startsWith("/contact");
    };
    HandlingStrategy.prototype.extract = function (url) {
        return url;
    };
    HandlingStrategy.prototype.merge = function (newUrlPart, rawUrl) {
        return newUrlPart;
    };
    return HandlingStrategy;
}());
var routes = [
    { path: 'contact', component: contact_component_1.ContactComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes, { useHash: true, enableTracing: false, initialNavigation: true })
            ],
            declarations: [app_component_1.AppComponent, contact_component_1.ContactComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: router_2.UrlHandlingStrategy, useClass: HandlingStrategy }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map