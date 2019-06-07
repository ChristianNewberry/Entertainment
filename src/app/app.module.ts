import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { EntryModalComponent } from './components/entry-modal/entry-modal.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    EntryModalComponent,
    TopNavComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
