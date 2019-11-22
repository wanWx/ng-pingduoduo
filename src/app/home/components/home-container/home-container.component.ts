import { Component, OnInit } from '@angular/core';

import { TopMenu } from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute
  ) { }
  topMenus$: Observable<TopMenu[]>;
  ngOnInit(): void {
    this.topMenus$ = this.service.getTabs();
  }

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu.link);
    this.router.navigate(['home', topMenu.link]);
  }
}
