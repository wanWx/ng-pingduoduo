import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HomeService } from '../../services';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Ad, Product } from 'src/app/shared';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private service: HomeService
  ) { }
  selectedTabLink$: Observable<string>;

  imageSliders$: Observable<ImageSlider[]>;

  channels$: Observable<Channel[]>;

  ad$: Observable<Ad>;

  products$: Observable<Product[]>;

  channels: Channel[] = [];
  sub: Subscription;
  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsTab(tab))
    );
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
