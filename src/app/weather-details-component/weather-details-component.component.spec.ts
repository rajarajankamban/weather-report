import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsComponentComponent } from './weather-details-component.component';

describe('WeatherDetailsComponentComponent', () => {
  let component: WeatherDetailsComponentComponent;
  let fixture: ComponentFixture<WeatherDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
