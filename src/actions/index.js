export const A_LIFE_PLUS = 'A_LIFE_PLUS';
export const A_LIFE_MINUS = 'A_LIFE_MINUS';
export const A_LIFE_RESET = 'A_LIFE_RESET';
export const B_LIFE_PLUS = 'B_LIFE_PLUS';
export const B_LIFE_MINUS = 'B_LIFE_MINUS';
export const B_LIFE_RESET = 'B_LIFE_RESET';

export const aLifePlus = aLife => ({
  type: A_LIFE_PLUS,
  aLife
});

export const aLifeMinus = aLife => ({
  type: A_LIFE_MINUS,
  aLife
});

export const aLifeReset = aLife => ({
  type: A_LIFE_RESET,
  aLife
});

export const bLifePlus = bLife => ({
  type: B_LIFE_PLUS,
  bLife
});

export const bLifeMinus = bLife => ({
  type: B_LIFE_MINUS,
  bLife
});

export const bLifeReset = bLife => ({
  type: B_LIFE_RESET,
  bLife
});