import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingProgressComponent } from './loading-progress/loading-progress.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        LoadingProgressComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSelectModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule,
        MatInputModule,
        LoadingProgressComponent,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSelectModule
    ]
})

export class DesignModule { }
