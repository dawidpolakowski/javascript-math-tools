var foo = new Array(100);//create a 45 element array

var n =0;
for(var i=1;i<11;i++){
for(var j=1;j<11;j++){
  foo[n] = i*j;
  n++;
   }
}

for(var i=0;i<foo.length;i++){
  document.write( '[' +  foo[i] + '] ');
  if((i+1)%10 == 0 && i>0) {document.write('<br>'); }
}