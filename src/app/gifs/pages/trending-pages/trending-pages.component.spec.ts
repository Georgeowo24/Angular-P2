import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPagesComponent } from './trending-pages.component';

describe('TrendingPagesComponent', () => {
  let component: TrendingPagesComponent;
  let fixture: ComponentFixture<TrendingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
