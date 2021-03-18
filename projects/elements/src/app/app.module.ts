import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ComponentsComponent, ComponentsModule} from 'components';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {
    const element = createCustomElement(ComponentsComponent, {injector: this.injector});
    customElements.define('lib-components', element);
  }
}
