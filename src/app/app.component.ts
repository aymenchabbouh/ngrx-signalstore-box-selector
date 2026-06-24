import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BoxStore } from './box.store';
import { BoxComponent } from './components/box/box.component';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { TOTAL_BOXES } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoxComponent, OptionSelectorComponent, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private store = inject(BoxStore);

  /** Array [1..10] for rendering boxes */
  boxIds = Array.from({ length: TOTAL_BOXES }, (_, i) => i + 1);

  /** Signal: whether a box is currently active */
  hasActiveBox = this.store.hasActiveBox;

  /** Signal: whether any selections exist */
  hasSelections = this.store.hasSelections;

  /** Signal: sum of all selected option values */
  totalValue = this.store.totalValue;

  /** Clear everything */
  onRemoveAll(): void {
    this.store.removeAll();
  }
}
