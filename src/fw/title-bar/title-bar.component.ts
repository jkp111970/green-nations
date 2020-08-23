import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  screenService : ScreenService;

  constructor(private scrnService : ScreenService) { 
    this.screenService = scrnService;
  }

  ngOnInit(): void {
  }

}
