import { JasmineIntroService } from './jasmine-intro.service';

describe('JasmineIntroService', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  it('should add two numbers', () => {
    const service: JasmineIntroService = new JasmineIntroService();

    const result = service.addNumber(1, 2);

    expect(3).toEqual(result);
  });

  it('should subtract two numbers', () => {
    const service: JasmineIntroService = new JasmineIntroService();

    const result = service.subtractNumber(1, 2);

    expect(-1).toEqual(result);
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });
});
