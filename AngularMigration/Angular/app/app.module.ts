import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact.component';

import { UrlHandlingStrategy } from '@angular/router'

class HandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: import("@angular/router").UrlTree): boolean {
        return url.toString().startsWith("/contact");
    } extract(url: import("@angular/router").UrlTree): import("@angular/router").UrlTree {
        return url;
    }
    merge(newUrlPart: import("@angular/router").UrlTree, rawUrl: import("@angular/router").UrlTree): import("@angular/router").UrlTree {
        return newUrlPart;
    }


}

const routes: Routes = [
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(routes, { useHash: true, enableTracing: false, initialNavigation: true })
    ],
    declarations: [AppComponent, ContactComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: UrlHandlingStrategy, useClass: HandlingStrategy }]
})
export class AppModule { }
