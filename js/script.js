const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=> {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
});


// function longestConsec(strarr, k) {
//     if (strarr.length == 0 || k > strarr.length || k <= 0) {
//         return '';
//     }
//     let arr = [];
//     for (let i = 0; i < strarr.length - (k-1); i++) {
//         arr.push(strarr.slice(i, i+k).join(''));
//     }
//     return arr.sort((a, b) => b.length - a.length);
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));
// console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));