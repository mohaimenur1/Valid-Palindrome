function isPalindrome(str) {
  const formattedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
