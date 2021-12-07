import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

import { ListComponent } from './list/list.component';
import { ListFormComponent } from './list/list-form/list-form.component';
import { ListBlockComponent } from './list/list-block/list-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListFormComponent,
    ListBlockComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
