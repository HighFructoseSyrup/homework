import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFeatureComponent } from './gift-feature.component';

describe('GiftFeatureComponent', () => {
  let component: GiftFeatureComponent;
  let fixture: ComponentFixture<GiftFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
