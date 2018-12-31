import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading-progress/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebStorE';

  loading: boolean;
  constructor(private loadingService: LoadingService) {}
  ngOnInit() {
    this.loading = true;
    this.loadingService.getLoadingSubject
      .subscribe((data: boolean) => this.loading = data);
  }
}
