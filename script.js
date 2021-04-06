function convCtoF(cel){
        
    var cel = document.getElementById('inC').value
    var res1 = document.getElementById('outC')

    document.getElementById('inC').value = ''

    farConv = (cel * 9/5 + 32)
    res1.innerHTML = farConv
    
}

function convFtoC(far){
    
    var far = document.getElementById('inF').value
    var res2 = document.getElementById('outF')

    document.getElementById('inF').value = ''
    

    celConv = ((far - 32) * 5/9 )
    
    var n = celConv;
    var x = n.toFixed(2);
    n = parseFloat(x);
    celConv = n

    res2.innerHTML = celConv
     
}