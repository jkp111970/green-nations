import { Component } from '@angular/core';

import { FrameworkConfigSettings, FrameworkConfigService} from '../fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private frameworkconfigService: FrameworkConfigService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-google-bw.png', alt: 'Facebook', link: 'http://www.google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Facebook', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkconfigService.configure(config);
  }
}
