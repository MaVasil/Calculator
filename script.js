let display=document.getElementById('display');

function add(value){
    display.value+=value;
}

function clearDisplay(){
    display.value="";
}

function backspace(){
    display.value=display.value.slice(0,-1);
}

function scin(func){
    if(func==='log') display.value=`Math.log10(${display.value})`;
    else if(func=='exp') display.value=`Math.exp(${display.value})`;
    else display.value=`Math.${func}(${display.value})`;
}

function factorial(){
    let n=parseInt(display.value);
    let fact=1;
    for(let i=2;i<=n;i++){
        fact*=i;
    }
    display.value=fact;
}

function calculate(){
    try{
        let input=display.value.replace('pi','Math.PI').replace('e','Math.E');
        display.value=eval(input);
    }
    catch(e){
        display.value='Error';
    }
}