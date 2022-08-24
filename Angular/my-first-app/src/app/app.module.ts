import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [AppComponent, CardComponent, SearchPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
