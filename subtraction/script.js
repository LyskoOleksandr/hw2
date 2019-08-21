let a = prompt('Введіть число "a"');
let b = prompt('Введіть число "b"');
let c = a/b;
let n;
if (c.toFixed(2) == Math.round(c)) {
    console.log('Результат - ' + c);
} else {
    console.log('а не можна поділити на b');
}
