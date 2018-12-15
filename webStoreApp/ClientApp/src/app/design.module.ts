import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatExpansionModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatExpansionModule
    ]
})

export class DesignModule { }
