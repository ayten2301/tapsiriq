function textFunction(){
    let sentence=prompt('Cumle daxil edin:');
    let array=sentence.split(' ');
    let newsentence="";

    for(let i=0;i<array.length;i++){
        newsentence+=array[i];
    if (i < arr.length - 1) {
        newsentence += ","
    }
}
alert(newsentence);
}
textFunction();