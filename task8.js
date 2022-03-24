function firstLetter(n,m){

    n=prompt('cumle daxil edin!');
    m=prompt('herf daxil edin!');

    newarr= n.split(' ');

    let b=[];
    
    for(let i=0; i<newarr.length; i++){
        
        if(newarr[i][0]==m){
            b.push(newarr[i]);
        }
    }

    console.log(b);

}


firstLetter(n,m);
