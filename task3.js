function evenFunction(){
    let number=prompt('Vergulle ayrilan ededler daxil edi;');
    let array=number.split(',');
    let cuteded=[];
    for (let i=0;i<array.length;i++){
        if(Number(array[i]) % 2===0){
            cuteded.push(Number(array[i]));
        }
    }
    alert(cuteded);
}
evenFunction();