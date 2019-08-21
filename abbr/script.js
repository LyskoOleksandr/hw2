const name = 'Лиско Олександр Миколайович' .split(" ");

console.log(name);
console.log('Довжина константи ' + name.length);
console.log(name.map(function(name){
    return name[0].toUpperCase();
}));