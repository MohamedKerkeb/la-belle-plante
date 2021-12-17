import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-avis',
  templateUrl: './star-avis.component.html',
  styleUrls: ['./star-avis.component.scss']
})
export class StarAvisComponent implements OnInit {

  starState: string[];

  constructor() {
    this.starState = ['star','star', 'star', 'star', 'star']
  }

  

  ngOnInit(): void {
  }



  mouse(index: number) {
    console.log(index)
    for (let i = 0; i < this.starState.length; i++) {
      if(i <= index) {
        this.starState[i] = 'star-fill';
      } else {
        this.starState[i] = 'star';
  
      }
    }
    // this.stars.map((el:any, i) => {
    //   if (i === i) {
    //     el.name = "star-fill"
    //   } else {
    //     el.name = "star"
    //   }
    // })
  
    //i == index ? el.name = "star-fill" : el.name = "star")
    
  }
  onMouseLeave() {
    //this.starState = ['star','star', 'star', 'star', 'star']
    // seconde solution
    this.starState = this.starState.map((el:any) => el = "star")

  }
}
