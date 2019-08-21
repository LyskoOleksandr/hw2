const input = document.getElementById('input');
const button = document.getElementById('calculation');

button.addEventListener('click', function(){
    let punctMark = input.value;
    switch (punctMark) {
        case (' '):
            alert('Це пробіл!');
            break;
        case ('.'):
            alert('Це крапка!');
            break;
        case (','):
            alert('Це кома!');
            break;
        case ('!'):
            alert('Це знак оклику!');
            break;
        case ('?'):
            alert('Це знак питання!');
            break;
        case ('`'):
            alert('Це апостроф!');
            break;
        case ('-'):
            alert('Це дефіс!');
            break;
        case (':'):
            alert('Це двокрапка!');
            break;
        case (';'):
            alert('Це крапка з комою!');
            break;
        default :
            alert('Це не розділовий знак!');
    };

});
