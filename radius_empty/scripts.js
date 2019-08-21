// s=pi*R*R;

const submit = document.getElementById('submit');
const error = document.getElementById('error');
const result = document.getElementById('result');
const input = document.getElementById('radius');

submit.addEventListener('click', function() {
    if (input.value == '' || isNaN(input.value)){
        console.error('Error!');
        error.innerHTML = 'Request';
        input.value = '';
    } else {
        let circleArea = Math.PI * Math.pow(input.value, 2);
        result.innerHTML = 'Area of circle ' + circleArea.toFixed(2);
        setTimeout(function(){
            result.innerHTML = '';
        }, 5000);
    }
});
