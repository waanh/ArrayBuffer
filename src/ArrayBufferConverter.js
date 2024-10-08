export default class ArrayBufferConverter {
    load(buffer) {
      this.buffer = buffer;
    }
  
    toString() {
      const bufferView = new Uint16Array(this.buffer);
      let result = '';
      for (const code of bufferView) {
        result += String.fromCharCode(code);
      }
      return result;
    }
  }
  