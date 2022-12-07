function calcular() {
  let array = [     [75],
                    [95 ,64],
                    [17, 47 ,82],
                    [18 ,35 ,87 ,10],
                    [20 ,04 ,82 ,47, 65],
                    [19 ,01 ,23 ,75 ,03, 34],
                    [88 ,02 ,77 ,73 ,07, 63 ,67],
                    [99 ,65 ,04 ,28 ,06 ,16 ,70 ,92],
                    [41 ,41 ,26 ,56 ,83 ,40 ,80 ,70 ,33],
                    [41 ,48 ,72 ,33 ,47 ,32 ,37 ,16 ,94 ,29],
                    [53 ,71 ,44 ,65 ,25 ,43, 91, 52 ,97 ,51 ,14],
                    [70 ,11, 33 ,28, 77 ,73 ,17, 78 ,39 ,68 ,17 ,57],
                    [91, 71 ,52 ,38 ,17, 14 ,91 ,43 ,58 ,50 ,27, 29 ,48],
                    [63, 66 ,04 ,68, 89, 53 ,67, 30 ,73 ,16 ,69, 87 ,40 ,31],
                    [04 ,62 ,98 ,27 ,23 ,9 ,70 ,98 ,73 ,93 ,38, 53, 60, 04 ,23] ];

var d=0;
var b=0;
var cont=75;
let recorrido=[75];
let recorrido2=[];
var fil=0, col=0;
for (let a=1 ; a<=14; a++){  
      if (array[a][b]>array[a][b+1]) {
      cont=cont+array[a][b];
      recorrido[a]=array[a][b];
      recorrido2[a-1]=a;
      recorrido2[a]=b;
      }
      else {
      cont=cont+array[a][b+1];
      recorrido[a]=array[a][b+1];
      recorrido2[a-1]=a;
      recorrido2[a]=b+1;
      b=b+1;
      }
}
document.getElementById("recorrido").innerHTML += "recorrido: ";
for (let index = 0; index <=14; index++) {
document.getElementById("recorrido").innerHTML += "[" + recorrido[index] + "] ";
}
document.getElementById("resultado").innerHTML += "resultado: "+cont;

for (let j = 0; j <=14; j++) {
for (let o = 0; o <=d; o++) {
  if (recorrido[j]==array[j][o]) {
    document.getElementById("piramide").innerHTML += '<spam style="color: red;">' + "[" + array[j][o] + "] " + '</spam>';
  }
  else{
    document.getElementById("piramide").innerHTML +="[" + array[j][o] + "]";
  }
}
document.getElementById("piramide").innerHTML +='<p>'+'</p>';
d=d+1;
}
}
