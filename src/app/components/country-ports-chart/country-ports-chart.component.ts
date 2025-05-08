import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { CountryService } from '../../service/country.service';
import { CountryPortsData } from '../../store/country_store/country.model';


@Component({
  selector: 'app-country-ports-chart',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './country-ports-chart.component.html',
  styleUrls: ['./country-ports-chart.component.css'],
  providers: [CountryService] // Add this line
})
export class CountryPortsChartComponent implements OnInit {
  chart: any;
  isLoading = true;
  error: string | null = null;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.error = null;
    
    this.countryService.getCountriesByPortCount().subscribe({
      next: (data) => {
        this.createChart(data);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load data. Please try again later.';
        this.isLoading = false;
        console.error('Error loading data:', err);
      }
    });
  }

  createChart(data: CountryPortsData[]): void {
    // Sort data by number of ports (descending)
    const sortedData = [...data].sort((a, b) => b.numberOfPorts - a.numberOfPorts);
    
    const countryNames = sortedData.map(item => item.countryName);
    const portsCount = sortedData.map(item => item.numberOfPorts);
    const countryIds = sortedData.map(item => item.countryId);

    // Destroy previous chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create new chart
    this.chart = new Chart('portsChart', {
      type: 'bar',
      data: {
        labels: countryNames,
        datasets: [{
          label: 'Number of Ports',
          data: portsCount,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              afterLabel: (context) => {
                const index = context.dataIndex;
                return `Country ID: ${countryIds[index]}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Ports'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Country'
            }
          }
        }
      }
    });
  }

  refresh(): void {
    this.loadData();
  }
}