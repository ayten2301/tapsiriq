function sameWords(){
    let firstsentence=prompt('Sozlerden ibaret array daxil edin:');
    let secondsentence=prompt('Sozlerden ibaret array daxil edin:');

    let a=firstsentence.split(' ');
    let b=secondsentence.split(' ');
    let same=[];

    for(let i=0;i<firstsentence.length; i++){
        for(let j=0;j<secondsentence.length;j++){
            if(a[i]=b[j]){
                same.push(a[j]);
            }
        }
    }
    alert(same);
}
sameWords();