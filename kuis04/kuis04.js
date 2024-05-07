for(let i = 1; i <= 5; i++ ){
    let star = '';
    if (i != 1){
        for (let a = 1; a <= 5 - i; a++){
            star += ' ';
        }
        for (let b = 1; b <= i; b++){
            star += '*';
        }
    }else {
        star += '*\n';
    }
    console.log(star);
}

// for (let i = 1; i <= 5; i++) {
//   let star = '';
//   for (let a = 1; a <= 5 - i; a++) {
//     star += ' ';
//   }
//   for (let b = 1; b <= i; b++) {
//     star += '*';
//   }
//   star += '\n';
//   console.log(star);
// }


// var text = "";
// for (var x = 0; x < 5; x++) {
//     for (var y = 0; y < 5 - x - 1; y++) {
//         text += " ";
//     }
//     for (var z = 0; z <= x; z++) {
//         text += "*";
//     }
//     text += "\n"; 
// }
// console.log(text);

var text = "";
for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5 - x - 1; y++) {
        text += " ";
    }
    for (var z = 0; z <= x; z++) {
        text += "*";
    }
    text += "\n";
}
console.log(text);

// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'male'
//   };
  
//   for (const key in person) {
//     console.log(key + ': ' + person[key]);
//   }

const platform = {situs:"Gamelab", ekstensi:"ID", id:99};

let output = "";
for (let key in platform) {
  output += platform[key];
}

console.log( output );