import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';

import {ApplicationPipesModule} from '../../shared/pipes.module';
import {
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    MessageModule,
    OrganizationChartModule,
    PaginatorModule,
    PanelModule,
    PickListModule,
    SelectButtonModule,
    SpinnerModule,
    StepsModule,
    TabViewModule,
    ToggleButtonModule,
    ToolbarModule,
    TreeModule,
    TreeTableModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {AlertAppModule} from '../../components/alert-app/alert-app.module';
import {DashboardComponent} from "./dashboarddemo.component";
import {FaturamentoPeriodoViewModule} from "../faturamento-periodo-view/faturamento-periodo-view.module";
import {BrowserModule} from "@angular/platform-browser";
import {registerLocaleData} from "@angular/common";
registerLocaleData(localePt);
@NgModule( {
    imports: [
        BrowserModule,
        ApplicationPipesModule,
        AutoCompleteModule,
        TableModule,
        ToolbarModule,
        ButtonModule,
        InputTextModule,
        PaginatorModule,
        PanelModule,
        DropdownModule,
        CalendarModule,
        SelectButtonModule,
        FieldsetModule,
        FieldsetModule,
        DialogModule,
        TreeModule,
        ToggleButtonModule,
        InputTextareaModule,
        CardModule,
        TabViewModule,
        PickListModule,
        MessageModule,
        OrganizationChartModule,
        TreeTableModule,
        StepsModule,
        SpinnerModule,
        AlertAppModule,
        InputSwitchModule,
        InputMaskModule,
        FaturamentoPeriodoViewModule
    ],
    declarations: [
        DashboardComponent
    ],
    entryComponents: [
        DashboardComponent
    ],
    exports: [],
    providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
} )
export class DashboardModule {

}
