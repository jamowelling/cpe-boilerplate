import { Component, OnInit } from '@angular/core';
import { GlobalConfigService } from './services/global-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public headerLinks: any[] = [];

  constructor(private globalConfigService: GlobalConfigService) {}

  ngOnInit() {
    this.globalConfigService.getGlobalConfig().subscribe((data) => {
      // TODO improve this logic when more than one global component may come through
      if (data[0]) {
        const header = data[0].blocks[0];
        const {
          attrs: { links = [] },
        } = header;
        this.headerLinks = links;
      }
    });
  }
}
