import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GiftItem } from '../../models';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftListComponent implements OnInit {

  @Input() items: GiftItem[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
