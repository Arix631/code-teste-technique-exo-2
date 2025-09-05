

function palindrome(chaine1) {
    for (let i = 0 ; i <= Math.floor((chaine1.length - 1) / 2) ; i++) {
          if( chaine1[i] != chaine1[chaine1.length-1 -i]){
             console.log("faux");
             return;
          }
          
        
    }

console.log("vrai"); 
}


 palindrome("kayak");
 palindrome("abba");
 palindrome("tims");
 palindrome("abab");
