import { NgModule } from '@angular/core';
import { ModelService } from '../assets/services/model.service';
import { ViewService } from '../assets/services/view.service';


@NgModule({
  providers: [
    ModelService,
    ViewService
  ]
})
export class CoreModule { }
