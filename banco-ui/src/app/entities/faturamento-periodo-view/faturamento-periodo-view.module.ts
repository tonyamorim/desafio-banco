import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {ApplicationPipesModule} from '../../shared/pipes.module';
import {
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ChartModule,
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
import {FaturamentoPeriodoViewComponent} from "./faturamento-periodo-view.component";
import {FaturamentoPeriodoViewService} from "./faturamento-periodo-view.service";
import {FaturamentoPeriodoViewRoute} from "./faturamento-periodo-view.route";

const ENTITY_STATES = [
    ...FaturamentoPeriodoViewRoute,
];

@NgModule( {
    imports: [
        RouterModule.forChild( ENTITY_STATES ),
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
        ChartModule
    ],
    declarations: [
        FaturamentoPeriodoViewComponent
    ],
    entryComponents: [
        FaturamentoPeriodoViewComponent
    ],
    exports: [
        FaturamentoPeriodoViewComponent
    ],
    providers: [
        FaturamentoPeriodoViewService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
} )
export class FaturamentoPeriodoViewModule {
}
