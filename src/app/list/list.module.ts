import { NgModule } from '@angular/core';
import { SharedModule } from "../assets/modules/shared.module";
import { ListComponent } from "./list.component";
import { ListRoutingModule } from './list-routing.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    ListRoutingModule,
    SharedModule,
  ]
})
export class ListModule {}
