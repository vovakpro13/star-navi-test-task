import { nanoid } from '@reduxjs/toolkit';

export const createRandomArray = (length: number) => {
  return Array.from(Array(length)).map(() => nanoid(20));
};
