

function palindrome(chaine1) {
    for (let i = 0 ; i <= Math.floor((chaine1.length - 1) / 2) ; i++) {
          if( chaine1[i] != chaine1[chaine1.length-1 -i]){
             console.log("faux");
             return;
          }
          
        
    }

console.log("vrai");
}
// la boucle if on compare la premiere lettre  ici le premier rang indice 0 on compare au dernier element chaine1[chaine1.length -1 -i] je compare le premier et le derniet , le 2em et l'avant dernier 
// si un element est deja comparer , et il reste un unique element , pas besoin de le comparer car il est seule 
 palindrome("kayak");
 palindrome("abba");
 palindrome("tims");
 palindrome("abab");
