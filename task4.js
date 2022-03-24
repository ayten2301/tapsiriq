function fourthFunction(){
    let number=prompt('Vergulle ayrilmis ededler daxil edin');
    let array=number.split(',');
    let boyuk=[];
    let sum=0;
    let avg=0;
    for(let i=0;i<array.length;i++){
        sum=Number(sum)+Number(array[i]);
        avg=Number(sum)/array.length;
        if(Number(array[i])>i){
            boyuk.push(Number(array[i]));
        }
    }
    alert(boyuk);
}
fourthFunction();
