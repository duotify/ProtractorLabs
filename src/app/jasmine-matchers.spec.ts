describe('Jasmine Matchers', () => {

  it('should use nothing', () => {
    expect().nothing();
  });

  it('should use not', () => {
    expect(false).not.toBe(true);
  });

  it('should use toBe', () => {
    // 相當於 === 比對
    const thing = 'abc';
    expect(thing).toBe('abc');
  });

  it('should use toEqual', () => {
    const bigObject = {'foo': ['bar', 'baz']};
    expect(bigObject).toEqual({'foo': ['bar', 'baz']});
  });

  it('should use toBeCloseTo', () => {
    const number = 4.1234;
    expect(number).toBeCloseTo(4.123456, 3);
  });

  it('should use toBeDefined', () => {
    expect('foo').toBeDefined();
    // expect(void 0).toBeDefined(); failed
  });

  it('should use toBeFalsy', () => {
    // what is Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    expect('').toBeFalsy();
  });

  it('should use toBeTruthy', () => {
    // what is truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
    expect('a').toBeTruthy();

  });
  it('should use toBeGreaterThan', () => {
    expect(5).toBeGreaterThan(3);
  });

  it('should use toBeLessThan', () => {
    expect(-5).toBeLessThan(0);
  });

  it('should use toBeGreaterThanOrEqual', () => {
    expect(25).toBeGreaterThanOrEqual(25);
  });

  it('should use toBeLessThanOrEqual', () => {
    expect(3).toBeLessThanOrEqual(4);
  });

  it('should use toBeNaN', () => {
    // what is NaN: https://developer.mozilla.org/en-US/docs/Glossary/NaN
    expect(NaN).toBeNaN();
  });

  it('should use toBeNull', () => {
    expect(null).toBeNull();
  });


  it('should use toBeUndefined', () => {
    expect(undefined).toBeUndefined();
  });

  it('should use toContain', () => {
    expect(['a', 'b', 'c']).toContain('a');
    expect('abcdefg').toContain('cde');
  });

  it('should use toMatch', () => {
    expect('my string').toMatch(/string$/);
  });
});

