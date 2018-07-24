/**
 * Convert [Romaji](https://en.wikipedia.org/wiki/Romaji) to [Kana](https://en.wikipedia.org/wiki/Kana), lowercase text will result in [Hiragana](https://en.wikipedia.org/wiki/Hiragana) and uppercase text will result in [Katakana](https://en.wikipedia.org/wiki/Katakana).
 * @param  {String} [input=''] text
 * @param  {DefaultOptions} [options=defaultOptions]
 * @return {String} converted text
 * @example
 * toKana('onaji BUTTSUUJI')
 * // => 'おなじ ブッツウジ'
 * toKana('ONAJI buttsuuji')
 * // => 'オナジ ぶっつうじ'
 * toKana('座禅‘zazen’スタイル')
 * // => '座禅「ざぜん」スタイル'
 * toKana('batsuge-mu')
 * // => 'ばつげーむ'
 * toKana('!?.:/,~-‘’“”[](){}') // Punctuation conversion
 * // => '！？。：・、〜ー「」『』［］（）｛｝'
 * toKana('we', { useObsoleteKana: true })
 * // => 'ゑ'
 */

const FROM_ROMAJI = {
  '.': '。',
  ',': '、',
  ':': '：',
  '/': '・',
  '!': '！',
  '?': '？',
  '~': '〜',
  '-': 'ー',
  '‘': '「',
  '’': '」',
  '“': '『',
  '”': '』',
  '[': '［',
  ']': '］',
  '(': '（',
  ')': '）',
  '{': '｛',
  '}': '｝',

  'a': 'あ',
  'i': 'い',
  'u': 'う',
  'e': 'え',
  'o': 'お',
  'yi': 'い',
  'wu': 'う',
  'whu': 'う',
  'xa': 'ぁ',
  'xi': 'ぃ',
  'xu': 'ぅ',
  'xe': 'ぇ',
  'xo': 'ぉ',
  'xyi': 'ぃ',
  'xye': 'ぇ',
  'ye': 'いぇ',
  'wha': 'うぁ',
  'whi': 'うぃ',
  'whe': 'うぇ',
  'who': 'うぉ',
  'wi': 'うぃ',
  'we': 'うぇ',
  'va': 'ゔぁ',
  'vi': 'ゔぃ',
  'vu': 'ゔ',
  've': 'ゔぇ',
  'vo': 'ゔぉ',
  'vya': 'ゔゃ',
  'vyi': 'ゔぃ',
  'vyu': 'ゔゅ',
  'vye': 'ゔぇ',
  'vyo': 'ゔょ',
  'ka': 'か',
  'ki': 'き',
  'ku': 'く',
  'ke': 'け',
  'ko': 'こ',
  'lka': 'ヵ',
  'lke': 'ヶ',
  'xka': 'ヵ',
  'xke': 'ヶ',
  'kya': 'きゃ',
  'kyi': 'きぃ',
  'kyu': 'きゅ',
  'kye': 'きぇ',
  'kyo': 'きょ',
  'ca': 'か',
  'ci': 'き',
  'cu': 'く',
  'ce': 'け',
  'co': 'こ',
  'lca': 'ヵ',
  'lce': 'ヶ',
  'xca': 'ヵ',
  'xce': 'ヶ',
  'qya': 'くゃ',
  'qyu': 'くゅ',
  'qyo': 'くょ',
  'qwa': 'くぁ',
  'qwi': 'くぃ',
  'qwu': 'くぅ',
  'qwe': 'くぇ',
  'qwo': 'くぉ',
  'qa': 'くぁ',
  'qi': 'くぃ',
  'qe': 'くぇ',
  'qo': 'くぉ',
  'kwa': 'くぁ',
  'qyi': 'くぃ',
  'qye': 'くぇ',
  'ga': 'が',
  'gi': 'ぎ',
  'gu': 'ぐ',
  'ge': 'げ',
  'go': 'ご',
  'gya': 'ぎゃ',
  'gyi': 'ぎぃ',
  'gyu': 'ぎゅ',
  'gye': 'ぎぇ',
  'gyo': 'ぎょ',
  'gwa': 'ぐぁ',
  'gwi': 'ぐぃ',
  'gwu': 'ぐぅ',
  'gwe': 'ぐぇ',
  'gwo': 'ぐぉ',
  'sa': 'さ',
  'si': 'し',
  'shi': 'し',
  'su': 'す',
  'se': 'せ',
  'so': 'そ',
  'za': 'ざ',
  'zi': 'じ',
  'zu': 'ず',
  'ze': 'ぜ',
  'zo': 'ぞ',
  'ji': 'じ',
  'sya': 'しゃ',
  'syi': 'しぃ',
  'syu': 'しゅ',
  'sye': 'しぇ',
  'syo': 'しょ',
  'sha': 'しゃ',
  'shu': 'しゅ',
  'she': 'しぇ',
  'sho': 'しょ',
  'shya': 'しゃ', // 4 character code
  'shyu': 'しゅ', // 4 character code
  'shye': 'しぇ', // 4 character code
  'shyo': 'しょ', // 4 character code
  'swa': 'すぁ',
  'swi': 'すぃ',
  'swu': 'すぅ',
  'swe': 'すぇ',
  'swo': 'すぉ',
  'zya': 'じゃ',
  'zyi': 'じぃ',
  'zyu': 'じゅ',
  'zye': 'じぇ',
  'zyo': 'じょ',
  'ja': 'じゃ',
  'ju': 'じゅ',
  'je': 'じぇ',
  'jo': 'じょ',
  'jya': 'じゃ',
  'jyi': 'じぃ',
  'jyu': 'じゅ',
  'jye': 'じぇ',
  'jyo': 'じょ',
  'ta': 'た',
  'ti': 'ち',
  'tu': 'つ',
  'te': 'て',
  'to': 'と',
  'chi': 'ち',
  'tsu': 'つ',
  'ltu': 'っ',
  'xtu': 'っ',
  'tya': 'ちゃ',
  'tyi': 'ちぃ',
  'tyu': 'ちゅ',
  'tye': 'ちぇ',
  'tyo': 'ちょ',
  'cha': 'ちゃ',
  'chu': 'ちゅ',
  'che': 'ちぇ',
  'cho': 'ちょ',
  'cya': 'ちゃ',
  'cyi': 'ちぃ',
  'cyu': 'ちゅ',
  'cye': 'ちぇ',
  'cyo': 'ちょ',
  'chya': 'ちゃ', // 4 character code
  'chyu': 'ちゅ', // 4 character code
  'chye': 'ちぇ', // 4 character code
  'chyo': 'ちょ', // 4 character code
  'tsa': 'つぁ',
  'tsi': 'つぃ',
  'tse': 'つぇ',
  'tso': 'つぉ',
  'tha': 'てゃ',
  'thi': 'てぃ',
  'thu': 'てゅ',
  'the': 'てぇ',
  'tho': 'てょ',
  'twa': 'とぁ',
  'twi': 'とぃ',
  'twu': 'とぅ',
  'twe': 'とぇ',
  'two': 'とぉ',
  'da': 'だ',
  'di': 'ぢ',
  'du': 'づ',
  'de': 'で',
  'do': 'ど',
  'dya': 'ぢゃ',
  'dyi': 'ぢぃ',
  'dyu': 'ぢゅ',
  'dye': 'ぢぇ',
  'dyo': 'ぢょ',
  'dha': 'でゃ',
  'dhi': 'でぃ',
  'dhu': 'でゅ',
  'dhe': 'でぇ',
  'dho': 'でょ',
  'dwa': 'どぁ',
  'dwi': 'どぃ',
  'dwu': 'どぅ',
  'dwe': 'どぇ',
  'dwo': 'どぉ',
  'na': 'な',
  'ni': 'に',
  'nu': 'ぬ',
  'ne': 'ね',
  'no': 'の',
  'nya': 'にゃ',
  'nyi': 'にぃ',
  'nyu': 'にゅ',
  'nye': 'にぇ',
  'nyo': 'にょ',
  'ha': 'は',
  'hi': 'ひ',
  'hu': 'ふ',
  'he': 'へ',
  'ho': 'ほ',
  'fu': 'ふ',
  'hya': 'ひゃ',
  'hyi': 'ひぃ',
  'hyu': 'ひゅ',
  'hye': 'ひぇ',
  'hyo': 'ひょ',
  'fya': 'ふゃ',
  'fyu': 'ふゅ',
  'fyo': 'ふょ',
  'fwa': 'ふぁ',
  'fwi': 'ふぃ',
  'fwu': 'ふぅ',
  'fwe': 'ふぇ',
  'fwo': 'ふぉ',
  'fa': 'ふぁ',
  'fi': 'ふぃ',
  'fe': 'ふぇ',
  'fo': 'ふぉ',
  'fyi': 'ふぃ',
  'fye': 'ふぇ',
  'ba': 'ば',
  'bi': 'び',
  'bu': 'ぶ',
  'be': 'べ',
  'bo': 'ぼ',
  'bya': 'びゃ',
  'byi': 'びぃ',
  'byu': 'びゅ',
  'bye': 'びぇ',
  'byo': 'びょ',
  'pa': 'ぱ',
  'pi': 'ぴ',
  'pu': 'ぷ',
  'pe': 'ぺ',
  'po': 'ぽ',
  'pya': 'ぴゃ',
  'pyi': 'ぴぃ',
  'pyu': 'ぴゅ',
  'pye': 'ぴぇ',
  'pyo': 'ぴょ',
  'ma': 'ま',
  'mi': 'み',
  'mu': 'む',
  'me': 'め',
  'mo': 'も',
  'mya': 'みゃ',
  'myi': 'みぃ',
  'myu': 'みゅ',
  'mye': 'みぇ',
  'myo': 'みょ',
  'ya': 'や',
  'yu': 'ゆ',
  'yo': 'よ',
  'xya': 'ゃ',
  'xyu': 'ゅ',
  'xyo': 'ょ',
  'ra': 'ら',
  'ri': 'り',
  'ru': 'る',
  're': 'れ',
  'ro': 'ろ',
  'rya': 'りゃ',
  'ryi': 'りぃ',
  'ryu': 'りゅ',
  'rye': 'りぇ',
  'ryo': 'りょ',
  'la': 'ら',
  'li': 'り',
  'lu': 'る',
  'le': 'れ',
  'lo': 'ろ',
  'lya': 'りゃ',
  'lyi': 'りぃ',
  'lyu': 'りゅ',
  'lye': 'りぇ',
  'lyo': 'りょ',
  'wa': 'わ',
  'wo': 'を',
  'lwe': 'ゎ',
  'xwa': 'ゎ',
  'n': 'ん',
  'nn': 'ん',
  'n\'': 'ん', // n' should equal single ん
  'n ': 'ん', // n + space
  'xn': 'ん',
  'ltsu': 'っ',  // 4 character code
};

function getChunk(text,start,end){
    return text.slice(start,end);
}

function getChunkSize(max = 0, remaining = 0) {
  return Math.min(max, remaining);
}

function isCharConsonant(char = '', includeY = true) {
  if (isEmpty(char)) return false;
  const regexp = includeY ? /[bcdfghjklmnpqrstvwxyz]/ : /[bcdfghjklmnpqrstvwxz]/;
  return char.toLowerCase().charAt(0).search(regexp) !== -1;
}

function toKana(input) {
  // Final output array
  const kana = [];
  // Position in the string that is being evaluated
  let cursor = 0;
  const len = input.length;
  const maxChunk = 3;
  let chunkSize = 3;
  let chunk = '';
  let chunkLC = '';

  // Steps through the string pulling out chunks of characters. Each chunk will be evaluated
  // against the romaji to kana table. If there is no match, the last character in the chunk
  // is dropped and the chunk is reevaluated. If nothing matches, the character is assumed
  // to be invalid or punctuation or other and gets passed through.
  while (cursor < len) {
    let kanaChar = null;
    chunkSize = getChunkSize(maxChunk, len - cursor);
    while (chunkSize > 0) {
      chunk = getChunk(input, cursor, cursor + chunkSize);
      chunkLC = chunk.toLowerCase();
      // Handle super-rare edge cases with 4 char chunks (like ltsu, chya, shya)
      

      kanaChar = FROM_ROMAJI[chunkLC];
      // console.log(`${chunkLC}, ${cursor}x${chunkSize}:${chunk} => ${kanaChar}`); // DEBUG
      if (kanaChar != null) {
        break;
      }
      // Step down the chunk size.
      // If chunkSize was 4, step down twice.
      if (chunkSize === 4) {
        chunkSize -= 2;
      } else {
        chunkSize -= 1;
      }
    }

    // Passthrough undefined values
    if (kanaChar == null) {
      kanaChar = chunk;
    }

    kana.push(kanaChar);
    cursor += chunkSize || 1;
  }

  return kana.join('');
}



