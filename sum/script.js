const submit = document.getElementById('button');
const input = document.getElementById('number');
const result = document.getElementById('result');
submit.addEventListener('click', function() {
    let summ = input.value;
    let num1 = summ[0];
    let num2 = summ[1];
    if (input.value == '' || isNaN(input.value)){
        result.value = 'Error!';
        console.log('Error!');
    } else if (summ<9 || summ>100){
        result.value = 'Error!';
        console.log ('Error!;')
    } else {
        let outnum = +num1 + +num2;
        result.value = 'Result - ' + outnum;
        console.log('Result - ' + outnum);
    }
})
