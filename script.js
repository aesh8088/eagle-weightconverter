let input = document.getElementById('input');
let output = document.getElementById("output");
let button = document.getElementById('weight-btn')


/* IST Method without using button element */


/*  input.addEventListener('input', () =>{
   let val = input.value;
    let out = val*2.205;

    output.innerHTML = out.toFixed(2);
    })  */


    /* Second Method by using button element */

button.addEventListener('click', () => {
    let val = input.value;
    let out = val*2.205;

    output.innerHTML = out.toFixed(2);
})


