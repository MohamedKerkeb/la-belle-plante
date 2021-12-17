import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-plante',
  templateUrl: './card-plante.component.html',
  styleUrls: ['./card-plante.component.scss']
})
export class CardPlanteComponent implements OnInit {
  @Input() card: any;
  @Output() clickLike= new EventEmitter();
  constructor() { 
    this.card;
  }

  ngOnInit(): void {
    // console.log('card', this.card)
  }

  onClickLike() {
    //console.log('click')
    this.clickLike.emit()
  }
}