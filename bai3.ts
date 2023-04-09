function change(str:string) {
    let arr = str.split('')
    arr.reverse();
    let reverseStr = arr.join('')
    return reverseStr
}

console.log(change('abcd'))