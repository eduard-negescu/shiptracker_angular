import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPortsChartComponent } from './country-ports-chart.component';

describe('CountryPortsChartComponent', () => {
  let component: CountryPortsChartComponent;
  let fixture: ComponentFixture<CountryPortsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPortsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPortsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
