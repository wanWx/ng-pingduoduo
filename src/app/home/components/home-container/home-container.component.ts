import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // handleTabSelected(topMenu: TopMenu) {
  //   this.router.navigate(['home', topMenu.link]);
  // }
}
