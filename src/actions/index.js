export const A_LIFE_PLUS = 'A_LIFE_PLUS';
export const A_LIFE_MINUS = 'A_LIFE_MINUS';
export const B_LIFE_PLUS = 'B_LIFE_PLUS';
export const B_LIFE_MINUS = 'B_LIFE_MINUS';

export const ALifePlus = ALife => ({
  type: A_LIFE_PLUS,
  ALife
});

export const ALifeMinus = ALife => ({
  type: A_LIFE_MINUS,
  ALife
});

export const BLifePlus = BLife => ({
  type: B_LIFE_PLUS,
  BLife
});

export const BLifeMinus = BLife => ({
  type: B_LIFE_MINUS,
  BLife
});