function rot13(str) {
  let result = '';
  const aCharCode = 'A'.charCodeAt(0);
  const zCharCode = 'Z'.charCodeAt(0);
  for(let i = 0; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);
    if (charCode > zCharCode || charCode < aCharCode) {
      result += str.charAt(i);
    } else {
      result += String.fromCharCode(aCharCode + (charCode - aCharCode + 13) % 26);
    }
  }
  return result;
}

rot13("SERR PBQR PNZC");
