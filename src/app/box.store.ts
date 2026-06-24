import { signalStore, withState, withComputed, withMethods, withHooks, patchState } from '@ngrx/signals';
import { computed, effect } from '@angular/core';
import { BoxState, ALL_OPTIONS, TOTAL_BOXES } from './models';

const STORAGE_KEY = 'boxSelectorStateNgrx';

/** Load state from localStorage (or return defaults) */
function loadState(): BoxState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Only restore selections, NOT activeBoxId — options panel should be closed on refresh
      return { selections: parsed.selections ?? {}, activeBoxId: null };
    }
  } catch { /* ignore corrupt data */ }
  return { selections: {}, activeBoxId: null };
}

const initialState: BoxState = loadState();

export const BoxStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ selections, activeBoxId }) => ({
    // Computed: sum of all selected option values
    totalValue: computed(() => {
      return Object.values(selections()).reduce((sum, optionId) => {
        const opt = ALL_OPTIONS.find(o => o.id === optionId);
        return sum + (opt ? opt.value : 0);
      }, 0);
    }),
    
    // Computed: whether any box is active
    hasActiveBox: computed(() => activeBoxId() !== null),
    
    // Computed: whether any selections exist
    hasSelections: computed(() => Object.keys(selections()).length > 0)
  })),
  withMethods((store) => ({
    /** Select/activate a box */
    selectBox(boxId: number): void {
      patchState(store, { activeBoxId: boxId });
    },

    /** Assign an option to the active box, then auto-advance to the next box */
    selectOption(optionId: string): void {
      const currentBoxId = store.activeBoxId();
      if (currentBoxId === null) return;

      // Auto-advance: move to next box. If last box, stay on it (keep options visible)
      const nextBoxId = currentBoxId < TOTAL_BOXES ? currentBoxId + 1 : currentBoxId;

      patchState(store, (state) => ({
        selections: { ...state.selections, [currentBoxId]: optionId },
        activeBoxId: nextBoxId
      }));
    },

    /** Clear all selections and hide the option selector */
    removeAll(): void {
      patchState(store, { selections: {}, activeBoxId: null });
    }
  })),
  withHooks({
    onInit(store) {
      // Effect to save selections to localStorage whenever they change
      effect(() => {
        const selections = store.selections();
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ selections }));
      });
    }
  })
);
