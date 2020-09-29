import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FaturamentoPeriodoViewModule} from "./faturamento-periodo-view/faturamento-periodo-view.module";
import {DashboardModule} from "./dashboard/dashboard.module";


@NgModule({
  imports: [
      DashboardModule,
      FaturamentoPeriodoViewModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
  declarations: []
})
export class EntitiesModule { }
