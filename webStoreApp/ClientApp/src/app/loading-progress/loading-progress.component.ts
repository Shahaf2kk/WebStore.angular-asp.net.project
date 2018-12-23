import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.css']
})
export class LoadingProgressComponent implements OnInit,
OnDestroy {

  constructor(private loadingService: LoadingService) { }

  hasLoading: boolean;

  ngOnInit() {
    this.hasLoading = false;
    this.loadingService.getLoadingSubject
      .subscribe( (data: boolean) => {
        this.hasLoading = data;
      });
  }
  ngOnDestroy () {
    // this.loadingService.unsubscribe();
  }
}
