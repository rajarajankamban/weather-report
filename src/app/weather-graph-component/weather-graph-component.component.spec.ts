import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGraphComponentComponent } from './weather-graph-component.component';

describe('WeatherGraphComponentComponent', () => {
  let component: WeatherGraphComponentComponent;
  let fixture: ComponentFixture<WeatherGraphComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGraphComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGraphComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
