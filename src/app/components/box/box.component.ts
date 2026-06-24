import { Component, ChangeDetectionStrategy, input, inject, computed } from '@angular/core';
import { BoxStore } from '../../box.store';
import { ALL_OPTIONS } from '../../models';

@Component({
  selector: 'app-box',
  standalone: true,
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {
  /** Box ID (1–10) passed from parent as a signal input */
  boxId = input.required<number>();

  private store = inject(BoxStore);

  /** Computed: the option object currently selected for this box */
  selectedOption = computed(() => {
    const id = this.store.selections()[this.boxId()];
    if (!id) return null;
    return ALL_OPTIONS.find(o => o.id === id) ?? null;
  });

  /** Computed: whether this box is the currently active one */
  isActive = computed(() => this.store.activeBoxId() === this.boxId());

  /** Click handler — activate this box */
  onBoxClick(): void {
    this.store.selectBox(this.boxId());
  }
}
