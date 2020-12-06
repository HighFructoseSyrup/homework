import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCountComponent } from './gift-count.component';

describe('GiftCountComponent', () => {
  let component: GiftCountComponent;
  let fixture: ComponentFixture<GiftCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
