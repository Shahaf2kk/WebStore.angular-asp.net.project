import { Component, OnInit } from '@angular/core';

import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.css']
})
export class LoadingProgressComponent implements OnInit {

  constructor(private loadingService: LoadingService) { }

  hasLoading: boolean;

  ngOnInit() {
    this.hasLoading = true;
    this.loadingService.getLoadingSubject
      .subscribe( (data: boolean) => {
        this.hasLoading = data;
      });
  }
}
