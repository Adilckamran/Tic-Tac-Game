let tictac = true;
function handleclick(adil){
    if(tictac === true){
        adil.innerHTML = '✅'
    }
    else{
        adil.innerHTML = '❌'
    }
    tictac = !tictac;
}