export interface Option {
  id: string;
  label: string;
  value: number;
}

export interface OptionCategory {
  name: string;
  options: Option[];
}

export interface BoxState {
  selections: Record<number, string>;
  activeBoxId: number | null;
}

export const TOTAL_BOXES = 10;

/**
 * Mock options grouped by category.
 * Labels are the visual symbols displayed to the user.
 * Values are the hidden numeric scores used for total calculation.
 */
export const OPTION_CATEGORIES: OptionCategory[] = [
  {
    name: 'front salto\'s',
    options: [
      { id: 'fs1', label: '.-o', value: 0.1 },
      { id: 'f2', label: '.-<', value: 0.2 },
      { id: 'fs3', label: '.1', value: 0.3 },
      { id: 'fs4', label: '.2', value: 0.5 },
      { id: 'fs5', label: '.3', value: 0.7 },
      { id: 'fs6', label: '.4', value: 1.0 },
      { id: 'fs7', label: '.--o', value: 1.1 },
      { id: 'fs8', label: '.--<', value: 1.2 },
    ]
  },
  {
    name: 'back salto\'s',
    options: [
      { id: 'bs1', label: '-o', value: 0.1 },
      { id: 'bs2', label: '-<', value: 0.2 },
      { id: 'bs3', label: '-/', value: 0.3 },
      { id: 'bs4', label: '-ox', value: 0.5 },
      { id: 'bs5', label: '-<x', value: 0.6 },
      { id: 'bs6', label: '1./', value: 0.7 },
      { id: 'bs7', label: '2.', value: 0.8 },
      { id: 'bs8', label: '3.', value: 1.1 },
      { id: 'bs9', label: '4.', value: 1.3 },
      { id: 'bs10', label: '5.', value: 1.5 },
      { id: 'bs11', label: '6.', value: 1.7 },
      { id: 'bs12', label: '7.', value: 2.0 },
      { id: 'bs13', label: '8.', value: 2.4 },
      { id: 'bs14', label: '--o', value: 2.3 },
      { id: 'bs15', label: '--<', value: 2.8 },
      { id: 'bs16', label: '--/', value: 3.0 },
      { id: 'bs17', label: '--ox/', value: 3.4 },
      { id: 'bs18', label: '--<x/', value: 3.6 },
      { id: 'bs19', label: '1-o', value: 0.1 },
      { id: 'bs20', label: '1-<', value: 0.2 },
      { id: 'bs21', label: '-1o', value: 0.3 },
      { id: 'bs22', label: '-1<', value: 0.5 },
      { id: 'bs23', label: '-1/', value: 0.6 },
      { id: 'bs24', label: '.-1o', value: 0.7 },
      { id: 'bs25', label: '.-1<', value: 0.8 },
      { id: 'bs26', label: '2-o', value: 1.1 },
      { id: 'bs27', label: '2-<', value: 1.3 },
      { id: 'bs28', label: '2-/', value: 1.5 },
      { id: 'bs29', label: '21/', value: 1.7 },
      { id: 'bs30', label: '22/', value: 2.4 },
      { id: 'bs31', label: '22/', value: 2.3 },
      { id: 'bs32', label: '23o', value: 2.8 },
      { id: 'bs33', label: '23/', value: 3.0 },
      { id: 'bs34', label: '24o', value: 2.8 },
      { id: 'bs35', label: '24/', value: 3.0 },
      { id: 'bs36', label: '44/', value: 3.4 },
      { id: 'bs37', label: '22/', value: 3.6 },
      { id: 'bs38', label: '-o', value: 0.1 },
      { id: 'bs39', label: '-<', value: 0.2 },
      { id: 'bs40', label: '-/', value: 0.3 },
      { id: 'bs41', label: '-ox', value: 0.5 },
      { id: 'bs42', label: '-<x', value: 0.6 },
      { id: 'bs43', label: '1./', value: 0.7 },
      { id: 'bs44', label: '2.', value: 0.8 },
      { id: 'bs45', label: '2.', value: 0.8 },

    ]
  },
  {
    name: 'Other',
    options: [
      { id: 'os1', label: '(', value: 0.0 },
      { id: 'os2', label: 'H', value: 0.0 },
      { id: 'os3', label: 'F', value: 0.0 },
      { id: 'os4', label: 'Λ', value: 0.0 },
    ]
  }
];

export const ALL_OPTIONS: Option[] = OPTION_CATEGORIES.flatMap(c => c.options);
