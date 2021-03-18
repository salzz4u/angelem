import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [ComponentsComponent, TimerComponent],
  imports: [
  ],
  exports: [ComponentsComponent, TimerComponent]
})
export class ComponentsModule { }
