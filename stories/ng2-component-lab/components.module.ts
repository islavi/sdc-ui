import { NgModule } from "@angular/core";
import { KeysPipe } from "./utils/pipes/keys.pipe";
import { BrowserModule } from '@angular/platform-browser';
import { ColorsTable } from "./components/colors-table.component";
import { FormElementsModule } from "../../src/angular/form-elements/form-elements.module";
import { ButtonsModule } from "../../src/angular/buttons/buttons.module";
import { TileModule } from "../../src/angular/tiles/tile.module";
import { PopupMenuModule } from "../../src/angular/popup-menu/popup-menu.module";
import { ChecklistModule } from "../../src/angular/checklist/checklist.module";
import { InfiniteScrollModule } from "../../src/angular/infinite-scroll/infinite-scroll.module";
import { FilterBarModule } from "../../src/angular/filterbar/filter-bar.module";
import { SearchBarModule } from "../../src/angular/searchbar/search-bar.module";
import { SearchFilterPipe } from "./pipes/search-filter-pipe";
import { AutoCompleteModule } from "../../src/angular/autocomplete/autocomplete.module";
import { TagCloudModule } from './../../src/angular/tag-cloud/tag-cloud.module';
import { TabsModule } from "../../src/angular/tabs/tabs.module";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe,
        KeysPipe,
        SearchFilterPipe
    ],
    imports: [
        BrowserModule,
        FormElementsModule,
        ButtonsModule,
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        FilterBarModule,
        SearchBarModule,
        InfiniteScrollModule,
        AutoCompleteModule,
        TagCloudModule,
        TabsModule
    ],
    entryComponents: [],
    exports: [
        BrowserModule,
        ColorsTable,
        FormElementsModule,
        ButtonsModule,
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        FilterBarModule,
        SearchBarModule,
        InfiniteScrollModule,
        AutoCompleteModule,
        PopupMenuModule,
        SearchFilterPipe,
        TagCloudModule,
        TabsModule
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {
}
