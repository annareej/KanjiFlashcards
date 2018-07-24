/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var b;
//b = /^[aeiou]$/.test(c.toLowerCase());
function isVowel(c){   
       if(c==null) return false;
       return /^[aeiou]$/.test(c.toLowerCase());
   }
export default isVowel;