import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TopMenu } from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute
  ) { }
  topMenus$: Observable<TopMenu[]>;

  selectedTabLink$: Observable<string>;

  ngOnInit(): void {
    this.topMenus$ = this.service.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      tap(value => console.log(value)),
      map(params => params.get('tabLink'))
    );
  }

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu.link);
    this.router.navigate(['home', topMenu.link]);
  }
}
