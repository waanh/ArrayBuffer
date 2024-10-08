import ArrayBufferConverter from '../src/ArrayBufferConverter';
import { getBuffer } from '../src/getBuffer';

test('should load buffer and convert it to string', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
