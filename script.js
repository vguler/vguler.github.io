var display=document.getElementById('display');
var buttons=Array.from(document.getElementsByClassName('buttons'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case '←':
                if(display.innerText)
                {
                    display.innerHTML=display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText=eval(display.innerText);
                } catch{
                    display.innerText="Eroare!";
                }
                
                break;
            
            default:
                display.innerText += e.target.innerText;
        }
    });
});