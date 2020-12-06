import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftDataService } from '../../services/gift-data.service';

@Component({
  selector: 'app-gift-count',
  templateUrl: './gift-count.component.html',
  styleUrls: ['./gift-count.component.scss']
})
export class GiftCountComponent implements OnInit {

  count$!: Observable<number>;
  constructor(private service: GiftDataService) { }

  ngOnInit(): void {
    this.count$ = this.service.getCountOfGiftsToBuy();
  }

}
