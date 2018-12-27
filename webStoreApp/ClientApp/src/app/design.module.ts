import { NgModule } from '@angular/core';

import { ImagePipe } from './shared/image.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingProgressComponent } from './loading-progress/loading-progress.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        LoadingProgressComponent,
        ImagePipe
    ],
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatDividerModule,
        MatTooltipModule,
        MatExpansionModule,
        MatIconModule
    ],
    exports: [
        ImagePipe,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        LoadingProgressComponent,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatDividerModule,
        MatTooltipModule,
        MatExpansionModule,
        MatIconModule
    ]
})

export class DesignModule { }
