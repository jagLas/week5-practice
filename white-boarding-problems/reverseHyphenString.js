function reverseHyphenString(string) {
    const array = string.split('-');
    array.reverse();
    return array.join('-');
}

//time O(n) space O(n)

console.log(reverseHyphenString("Go-to-the-store")) // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"