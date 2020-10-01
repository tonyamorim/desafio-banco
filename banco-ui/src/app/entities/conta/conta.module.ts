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
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule, registerLocaleData} from "@angular/common";
import {ContaComponent} from "./conta.component";
import {ContaService} from "./conta.service";
import {SharedModule} from "../../shared/shared.module";
import { CurrencyMaskModule } from "ng2-currency-mask";
import {AlertAppModule} from "../../components/alert-app/alert-app.module";
import {ContaDropdownComponent} from "../../components/conta/conta-dropdown.component";

registerLocaleData(localePt);
@NgModule( {
    imports: [
        CommonModule,
        BrowserModule,
        ApplicationPipesModule,
        SharedModule,
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
        CurrencyMaskModule
    ],
    declarations: [
        ContaComponent,
        ContaDropdownComponent
    ],
    entryComponents: [
        ContaComponent,
        ContaDropdownComponent
    ],
    exports: [
        ContaDropdownComponent
    ],
    providers: [
        ContaService,
        {provide: LOCALE_ID, useValue: 'pt-BR'}
        ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
} )
export class ContaModule {

}
