import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HomeService } from '../../services';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) { }
  selectedTabLink$: Observable<string>;

  imageSliders$: Observable<ImageSlider[]>;

  channels$: Observable<Channel[]>;

  channels: Channel[] = [];
  sub: Subscription;
  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
