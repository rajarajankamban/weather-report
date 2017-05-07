import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCatalogComponentComponent } from './weather-catalog-component.component';

describe('WeatherCatalogComponentComponent', () => {
  let component: WeatherCatalogComponentComponent;
  let fixture: ComponentFixture<WeatherCatalogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCatalogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCatalogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
