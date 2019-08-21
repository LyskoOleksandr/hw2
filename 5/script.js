const calculate = document.getElementById('submit');
const result = document.getElementById('result');
const cathetus = document.getElementById('form1');
const height = document.getElementById('form2');

calculate.addEventListener('click', function(){
   console.log (cathetus.value)
    if (cathetus.value === '' || isNaN(cathetus.value)){
        cathetus.classList.add('invalid');
    } else if (height.value === ''|| isNaN(height.value)){
        height.classList.add('invalid');
    } else {
        let s = (+cathetus.value * +height.value)/2;
        result.value = 'Result - ' + s;
    }
})