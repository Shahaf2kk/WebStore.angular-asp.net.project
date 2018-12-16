import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule
    ]
})

export class DesignModule { }
