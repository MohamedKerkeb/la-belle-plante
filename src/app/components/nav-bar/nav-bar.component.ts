import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  likeCounter: number;

  constructor(private callApiService: CallApiService) {
    this.likeCounter = 0;
   }

  ngOnInit(): void {
    this.callApiService.planLiked$.subscribe(
      () => {
        console.log('Get new event from Subject')
        this.likeCounter ++
      }
    )
  }

}
