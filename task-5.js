const inputRef=document.querySelector('input#name-input');
const spanRef = document.querySelector('span#name-output');


inputRef.addEventListener('input', function (event) {
    spanRef.textContent = event.target.value;
    if (spanRef.textContent === '') {
        spanRef.textContent = 'незнакомец';
    }
});