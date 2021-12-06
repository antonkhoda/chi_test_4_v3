import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
//import { ModelService } from '../services/model.service';
import { ViewService } from '../services/view.service';


@NgModule({
  imports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        //ModelService,
        ViewService,
      ],
    }
  }
}
