import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
    declarations: [
        AppComponent,
        InfoCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
