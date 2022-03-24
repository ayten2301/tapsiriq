function firstFunction(){
let text=prompt('Bosluqlarin sayini tapmaq ucun metn daxil edin:');
seperated=text.split(' ');

let sum=0;
let b;
for(let i=0;i<separated.length;i++){
    b=separated[i].length;
    sum+=b;
}
alert(text.length-sum);
}
firstFunction;
