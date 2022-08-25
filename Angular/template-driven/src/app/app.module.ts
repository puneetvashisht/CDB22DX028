import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { NgxMaskModule, IConfig } from 'ngx-mask';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

// export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

// const maskConfig: Partial<IConfig> = {
//   validation: false,
// };

@NgModule({
  declarations: [AppComponent, TemplateDrivenComponent, ReactiveComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
