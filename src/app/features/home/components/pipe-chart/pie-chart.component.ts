import { ChangeDetectionStrategy, Component, DestroyRef, effect, ElementRef, inject, input, viewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { PieChartConfig } from './interfaces/pie-chart-config';

@Component({
  selector: 'app-pipe-chart',
  imports: [],
  template: `<canvas #canvas></canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {

  canvasEl = viewChild.required<ElementRef>('canvas');
  config = input.required<PieChartConfig>();

  destroyRef = inject(DestroyRef);
  chartInstance: Chart | null = null

  constructor() {
    effect(() => {
      this.destroyChartInstance()
      this.chartInstance = this.createChartInstance()
    })

    this.destroyRef.onDestroy(() => {
      this.destroyChartInstance()
    })
  }

  private createChartInstance() {
    return new Chart(this.canvasEl().nativeElement, {
      type: 'pie',
      data: {
        labels: this.config().labels,
        datasets: [
          {
            label: this.config().dataLabel,
            data: this.config().data,
          }
        ]
      }
    });
  }

  private destroyChartInstance() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
}
