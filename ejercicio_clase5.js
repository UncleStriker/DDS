//debe crear un programa que señale
// si una palabra es palindromo

function palindromoCheck(str){
    const strReversed = str.split("").reverse().join("");
    return strReversed === str ? "es palindromo" : "no es palindromo "
}
console.log(palindromoCheck("oso"));
console.log(palindromoCheck("hola"));
console.log(palindromoCheck("omo"));
console.log(palindromoCheck("anitalavalatina"));