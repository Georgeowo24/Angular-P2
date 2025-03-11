import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaardPagesComponent } from './dashboaard-pages.component';

describe('DashboaardPagesComponent', () => {
  let component: DashboaardPagesComponent;
  let fixture: ComponentFixture<DashboaardPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboaardPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboaardPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
