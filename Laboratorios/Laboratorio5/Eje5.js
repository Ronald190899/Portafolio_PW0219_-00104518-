var palindrome = (palabra) => {

    var isPalindrome=true;
    var original=palabra.split("");
    //console.log(original)
    var invertido=palabra.split("").reverse();

    for(var i=0;i<original.length;i++){

        if(invertido[i]!=original[i]){

            console.log("la palabra no es palindrome");
            isPalindrome=false;
            break;
        }
    }

    if(isPalindrome==true){

        console.log("si es palindrome");
    }
    
}
