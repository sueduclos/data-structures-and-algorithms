'use strict';

 /*

{}	                    TRUE
{}(){}	                TRUE
()[[Extra Characters]]	TRUE
(){}[[]]	              TRUE
{}{Code}[Fellows](())	  TRUE
[({}]	                  FALSE
(](	                    FALSE
{(})	                  FALSE

Input	  Output	Why
{	  FALSE	error unmatched opening { remaining.
)	  FALSE	error closing ) arrived without corresponding opening.
[}	FALSE	error closing }. Doesn’t match opening (.

*/

const multiBracketValidation = require('./multi-bracket-validation.js');

describe('happy path', () => {
  it('{} > true', () => {
    expect(validator('{}')).toBe(true);
  });
  it('{} > true', () => {
    expect(validator('{}(){}')).toBe(true);
  });
  it('{} > true', () => {
    expect(validator('()[[Extra Characters]]')).toBe(true);
  });
  it('{} > true', () => {
    expect(validator('(){}[[]]')).toBe(true);
  });
  it('{} > true', () => {
    expect(validator('{}{Code}[Fellows](())	')).toBe(true);
  });
} )

describe('expected failures', () => {
  it('{} > true', () => {
    expect(validator('[({}]')).toBe(false);
  });
  it('{} > true', () => {
    expect(validator('(](')).toBe(false);
  });
  it('{} > true', () => {
    expect(validator('{(})')).toBe(false);
  });
} )

describe('edge cases', () => {
  it('{} > true', () => {
    expect(validator('{')).toBe(false);
  });
  it('{} > true', () => {
    expect(validator('(](')).toBe(false);
  });
  it('{} > true', () => {
    expect(validator('{(})')).toBe(false);
  });
} )
