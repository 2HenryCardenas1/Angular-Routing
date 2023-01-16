import { NumbersLettersPipe } from './numbers-letters.pipe';

describe('NumbersLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new NumbersLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
