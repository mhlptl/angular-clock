import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ClockComponent } from './clock/clock.component';
import { TimezonePickerComponent } from './timezone-picker/timezone-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ClockComponent,
    TimezonePickerComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
