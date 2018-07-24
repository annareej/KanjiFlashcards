/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//import KanaDef from './KanaDef';

/*var ONE_LETTER_HIRA = {
        a: "あ",
        e: "え",
        i: "い",
        o: "お",
        u: "う"
    };

var TWO_LETTER_HIRA = {
    wa : "わ",
    wo : "を",

    ha : "は",
    he : "へ",
    hi : "ひ",
    ho : "ほ",
    fu : "ふ",

    ka : "か",
    ke : "け",
    ki : "き",
    ko : "こ",
    ku : "く",

    ma : "ま",
    me : "め",
    mi : "み",
    mo : "も",
    mu : "む",

    na : "な",
    ne : "ね",
    ni : "に",
    no : "の",
    nu : "ぬ",

    ra : "ら",
    re : "れ",
    ri : "り",
    ro : "ろ",
    ru : "る",

    sa : "さ",
    se : "せ",
    so : "そ",
    su : "す",

    ta : "た",
    te : "て",
    to : "と",

    ya : "や",
    yo : "よ",
    yu : "ゆ"
    };

var THREE_LETTER_HIRA = {
    shi : "し",
    chi : "ち",
    tsu : "つ"
    };
*/

const HIRAGANA_FROM_ROMAJI = {
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
  //'n': 'ん',
  'nn': 'ん',
  'n\'': 'ん', // n' should equal single ん
  'n ': 'ん', // n + space
  'xn': 'ん',
  'ltsu': 'っ',  // 4 character code
};
const KATAKANA_FROM_ROMAJI = {
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

  'a': 'ア',
  'i': 'イ',
  'u': 'ウ',
  'e': 'エ',
  'o': 'オ',
  
  'yi': 'イ',
  'wu': 'ウ',
  'whu': 'ウ',
  
  'xa': 'ァ',
  'xi': 'ィ',
  'xu': 'ゥ',
  'xe': 'ェ',
  'xo': 'ォ',
  'xyi': 'ィ',
  'xye': 'ェ',
  
  'ye': 'イェ',
  
  'wha': 'ウァ',
  'whi': 'ウィ',
  'whe': 'ウェ',
  'who': 'ウォ',
  'wi': 'ウィ',
  'we': 'ウェ',
  
  'va': 'ゔァ',
  'vi': 'ゔィ',
  'vu': 'ゔ',
  've': 'ゔェ',
  'vo': 'ゔォ',
  'vya': 'ゔャ',
  'vyi': 'ゔィ',
  'vyu': 'ゔュ',
  'vye': 'ゔェ',
  'vyo': 'ゔョ',
  
  'ka': 'カ',
  'ki': 'キ',
  'ku': 'ク',
  'ke': 'ケ',
  'ko': 'コ',
  
  'lka': 'ヵ',
  'lke': 'ヶ',
  
  'xka': 'ヵ',
  'xke': 'ヶ',
  
  'kya': 'キャ',
  'kyi': 'キィ',
  'kyu': 'キュ',
  'kye': 'キェ',
  'kyo': 'キョ',
  
  'ca': 'カ',
  'ci': 'キ',
  'cu': 'ク',
  'ce': 'ケ',
  'co': 'コ',
  
  'lca': 'ヵ',
  'lce': 'ヶ',
  
  'xca': 'ヵ',
  'xce': 'ヶ',
  
  'qya': 'クャ',
  'qyu': 'クュ',
  'qyo': 'クョ',
  'qwa': 'クァ',
  'qwi': 'クィ',
  'qwu': 'クゥ',
  'qwe': 'クェ',
  'qwo': 'クォ',
  
  'qa': 'クァ',
  'qi': 'クィ',
  'qe': 'クェ',
  'qo': 'クォ',
  
  'kwa': 'クァ',
  
  'qyi': 'クィ',
  'qye': 'クェ',
  
  'ga': 'ガ',
  'gi': 'ギ',
  'gu': 'グ',
  'ge': 'ゲ',
  'go': 'ゴ',
  
  'gya': 'ギャ',
  'gyi': 'ギィ',
  'gyu': 'ギュ',
  'gye': 'ギェ',
  'gyo': 'ギョ',
  
  'gwa': 'グァ',
  'gwi': 'グィ',
  'gwu': 'グゥ',
  'gwe': 'グェ',
  'gwo': 'グォ',
  
  'sa': 'サ',
  'si': 'シ',
  'shi': 'シ',
  'su': 'ス',
  'se': 'セ',
  'so': 'ソ',
  
  'za': 'ザ',
  'zi': 'ジ',
  'zu': 'ズ',
  'ze': 'ゼ',
  'zo': 'ゾ',
  
  'ji': 'ジ',
  
  'sya': 'シャ',
  'syi': 'シィ',
  'syu': 'シュ',
  'sye': 'シェ',
  'syo': 'ショ',
  'sha': 'シャ',
  'shu': 'シュ',
  'she': 'シェ',
  'sho': 'ショ',
  
  'shya': 'シャ', // 4 character code
  'shyu': 'シュ', // 4 character code
  'shye': 'シェ', // 4 character code
  'shyo': 'ショ', // 4 character code
  
  'swa': 'スァ',
  'swi': 'スィ',
  'swu': 'スゥ',
  'swe': 'スェ',
  'swo': 'スォ',
  
  'zya': 'ジャ',
  'zyi': 'ジィ',
  'zyu': 'ジュ',
  'zye': 'ジェ',
  'zyo': 'ジョ',
  
  'ja': 'ジャ',
  'ju': 'ジュ',
  'je': 'ジェ',
  'jo': 'ジョ',
  
  'jya': 'ジャ',
  'jyi': 'ジィ',
  'jyu': 'ジュ',
  'jye': 'ジェ',
  'jyo': 'ジョ',
  
  'ta': 'タ',
  'ti': 'チ',
  'tu': 'ツ',
  'te': 'テ',
  'to': 'ト',
  
  'chi': 'チ',
  'tsu': 'ツ',
  
  'ltu': 'っ',
  'xtu': 'っ',
  
  'tya': 'チャ',
  'tyi': 'チィ',
  'tyu': 'チュ',
  'tye': 'チェ',
  'tyo': 'チョ',
  
  'cha': 'チャ',
  'chu': 'チュ',
  'che': 'チェ',
  'cho': 'チョ',
  'cya': 'チャ',
  'cyi': 'チィ',
  'cyu': 'チュ',
  'cye': 'チェ',
  'cyo': 'チョ',
  
  'chya': 'チャ', // 4 character code
  'chyu': 'チュ', // 4 character code
  'chye': 'チェ', // 4 character code
  'chyo': 'チョ', // 4 character code
  
  'tsa': 'ツァ',
  'tsi': 'ツィ',
  'tse': 'ツェ',
  'tso': 'ツォ',
  
  'tha': 'テャ',
  'thi': 'ティ',
  'thu': 'テュ',
  'the': 'テェ',
  'tho': 'テョ',
  
  'twa': 'トァ',
  'twi': 'トィ',
  'twu': 'トゥ',
  'twe': 'トェ',
  'two': 'トォ',
  
  'da': 'ダ',
  'di': 'ヂ',
  'du': 'ヅ',
  'de': 'デ',
  'do': 'ド',
  
  'dya': 'ヂャ',
  'dyi': 'ヂィ',
  'dyu': 'ヂュ',
  'dye': 'ヂェ',
  'dyo': 'ヂョ',
  
  'dha': 'デャ',
  'dhi': 'ディ',
  'dhu': 'デュ',
  'dhe': 'デェ',
  'dho': 'デョ',
  
  'dwa': 'ドァ',
  'dwi': 'ドィ',
  'dwu': 'ドゥ',
  'dwe': 'ドェ',
  'dwo': 'ドォ',
  
  'na': 'ナ',
  'ni': 'ニ',
  'nu': 'ヌ',
  'ne': 'ネ',
  'no': 'ノ',
  
  'nya': 'ニャ',
  'nyi': 'ニィ',
  'nyu': 'ニュ',
  'nye': 'ニェ',
  'nyo': 'ニョ',
  
  'ha': 'ハ',
  'hi': 'ヒ',
  'hu': 'フ',
  'he': 'ヘ',
  'ho': 'ホ',
  'fu': 'フ',
  
  'hya': 'ヒャ',
  'hyi': 'ヒィ',
  'hyu': 'ヒュ',
  'hye': 'ヒェ',
  'hyo': 'ヒョ',
  
  'fya': 'フャ',
  'fyu': 'フュ',
  'fyo': 'フョ',
  'fwa': 'ファ',
  'fwi': 'フィ',
  'fwu': 'フゥ',
  'fwe': 'フェ',
  'fwo': 'フォ',
  
  'fa': 'ファ',
  'fi': 'フィ',
  'fe': 'フェ',
  'fo': 'フォ',
  
  'fyi': 'フィ',
  'fye': 'フェ',
  
  'ba': 'バ',
  'bi': 'ビ',
  'bu': 'ブ',
  'be': 'ベ',
  'bo': 'ボ',
  
  'bya': 'ビャ',
  'byi': 'ビィ',
  'byu': 'ビュ',
  'bye': 'ビェ',
  'byo': 'ビョ',
  
  'pa': 'パ',
  'pi': 'ピ',
  'pu': 'プ',
  'pe': 'ペ',
  'po': 'ポ',
  
  'pya': 'ピャ',
  'pyi': 'ピィ',
  'pyu': 'ピュ',
  'pye': 'ピェ',
  'pyo': 'ピョ',
  
  'ma': 'マ',
  'mi': 'ミ',
  'mu': 'ム',
  'me': 'メ',
  'mo': 'モ',
  
  'mya': 'ミャ',
  'myi': 'ミィ',
  'myu': 'ミュ',
  'mye': 'ミェ',
  'myo': 'ミョ',
  
  'ya': 'ヤ',
  'yu': 'ユ',
  'yo': 'ヨ',
  
  'xya': 'ャ',
  'xyu': 'ュ',
  'xyo': 'ョ',
  
  'ra': 'ラ',
  'ri': 'リ',
  'ru': 'ル',
  're': 'レ',
  'ro': 'ロ',
  
  'rya': 'リャ',
  'ryi': 'リィ',
  'ryu': 'リュ',
  'rye': 'リェ',
  'ryo': 'リョ',
  
  'la': 'ラ',
  'li': 'リ',
  'lu': 'ル',
  'le': 'レ',
  'lo': 'ロ',
  
  'lya': 'リャ',
  'lyi': 'リィ',
  'lyu': 'リュ',
  'lye': 'リェ',
  'lyo': 'リョ',
  
  'wa': 'ワ',
  'wo': 'ヲ',
  
  'lwe': 'ゎ',
  'xwa': 'ゎ',
  
  'nn': 'ン',
  'n\'': 'ン', // n' should equal single ン
  'n ': 'ン', // n + space
  'xn': 'ン',
  'ltsu': 'っ',  // 4 character code
};

function isVowel(char){
    if(char.length == 1)
    {
        return /[aeiou]/.test(char);
    }
}

function getChunk(text,start,end){
    return text.slice(start,end);
}

function toKana(input, IMEKatakana, IMEHiragana){
    var chunk = '';
    var word = [];
    var chunkMAX = 3;
    var chunkSize = 0;
    var cursor = 0;
    var length = input.length;
    
        while(cursor < length){
            var kana = null;
            chunkSize = Math.min(chunkMAX, length - cursor);
            while(chunkSize > 0){
                chunk = getChunk(input,cursor,cursor+chunkSize);    
                chunk = chunk.toLowerCase();
 
                /*if (chunkSize == 1){
                    kana = ONE_LETTER_HIRA[chunk];
                }
                if (chunkSize == 2){
                    kana = TWO_LETTER_HIRA[chunk];
                }           
                if(chunkSize == 3){
                    kana = THREE_LETTER_HIRA[input];
                }*/
            
                if(!isVowel(chunk.charAt(0)) && chunk.charAt(0) !== 'n'){
                    if(chunk.charAt(0) === chunk.charAt(1)){
                        if(IMEHiragana === true){
                            chunkSize = 1;
                            chunk = 'っ';
                        }else{
                            chunkSize = 1;
                            chunk = 'っ';
                        }
                        
                    }
                }
                
                if(IMEKatakana === true && IMEHiragana === false){
                    kana = KATAKANA_FROM_ROMAJI[chunk];
                }
                if(IMEHiragana === true && IMEKatakana === false){
                    kana = HIRAGANA_FROM_ROMAJI[chunk];
                }
                
                
            
                
                
                if(kana != null){
                    break;
                }
                
                if(chunkSize === 4){
                    chunkSize -= 2;
                }else{
                    chunkSize -= 1;
                }
                
                
            }
            
            if(kana == null){
                kana = chunk;
            }
            
            //else{
            //    kana = input;
            //}
            //kana = chunk;
            //if(kana != null){
             //   cursor+=chunkSize
             //   chunkSize = 0;
             //   word.push(kana);
             //   kana = null;
            //}
            //else{kana=chunk}
            
            
            
            //chunkSize = 0;
            
            console.log(cursor)
            console.log(chunk);
            console.log(chunkSize);
            word.push(kana);
            cursor += chunkSize || 1;
        }
    return word.join("");
}//function


