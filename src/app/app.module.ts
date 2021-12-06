import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from "./assets/modules/shared.module";
import { CoreModule } from "./assets/modules/core.module";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    SharedModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
