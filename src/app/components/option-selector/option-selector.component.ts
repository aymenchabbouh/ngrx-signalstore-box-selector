import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { BoxStore } from '../../box.store';
import { OPTION_CATEGORIES } from '../../models';

@Component({
  selector: 'app-option-selector',
  standalone: true,
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionSelectorComponent {
  private store = inject(BoxStore);

  /** Option categories to display */
  categories = OPTION_CATEGORIES;

  /** Currently selected option ID for the active box (to highlight it) */
  currentOptionId = computed(() => {
    const activeId = this.store.activeBoxId();
    if (activeId === null) return null;
    return this.store.selections()[activeId] ?? null;
  });

  /** When user picks an option */
  onOptionClick(optionId: string): void {
    this.store.selectOption(optionId);
  }

  getColumnLimit(totalOptions: number): number {
    switch (true) {
      case totalOptions <= 20: return Math.ceil(totalOptions / 2);
      default: return 20;
    }
  }
}
