function graph(objId){
  var result=1;
  var c = document.getElementById("gr");
  var ml = c.getContext("2d");
  var z = zoom;
  var px=z*position.x;
  var py=-z*position.y;
  ml.beginPath();
  ml.lineWidth = objects[objId].width || 2;
  ml.strokeStyle = objects[objId].color || 'black';
  switch(objects[objId].type){
    case 'p':
      ml.arc(eval(get_eq_ready(objects[objId].x))*z+w/2+px,-eval(get_eq_ready(objects[objId].y))*z+h/2+py,objects[objId].width,0,2*Math.PI);
      ml.fillStyle=objects[objId].color;
      ml.fill();
    break;
    case 'v':

    break;
    case 'f':
      var func = get_eq_ready(objects[objId].eq).replace(/x/g,'(x/z)');
      var y,ys;
      for(x=-px-w/2;x<-px+w/2;x++){
        try{
          eval('y = ' + func+';');
          eval('ys = ' + func.replace(/x/g,'(x+1)')+';');
          var yfin = -y*z+h/2+py;
          var ysfin = -ys*z+h/2+py;
          yfin = (yfin>h)?h+objects[objId].width:yfin;
          yfin = (yfin<0)?-objects[objId].width:yfin;
          ysfin = (ysfin>h)?h+objects[objId].width:ysfin;
          ysfin = (ysfin<0)?-objects[objId].width:ysfin;
            ml.moveTo(x+w/2+px,yfin);
            ml.lineTo(x+w/2+px+1,ysfin);
        }
        catch(err) {
          if(err.name=='SyntaxError' || err.name=='EvalError' || y==undefined || ys==undefined){
            result=0;
            break;
          }
        }
      }
    break;
    case 'po':
    for(i=0;i<objects[objId].x.length;i++){
      ml.moveTo(objects[objId].x[i]*z+w/2+px,-objects[objId].y[i]*z+h/2+py);
      ml.lineTo(objects[objId].x[i+1]*z+w/2+px,-objects[objId].y[i+1]*z+h/2+py);
    }
    break;
    case 'c':
      ml.arc(eval(get_eq_ready(objects[objId].x))*z+w/2+px,-eval(get_eq_ready(objects[objId].y))*z+h/2+py,eval(get_eq_ready(objects[objId].r))*z,0,2*Math.PI);
    break;
  }
  ml.stroke();
  return result;
}
function sqrt(sq,n){
  var sqrt_result;
  if(n==undefined){
    sqrt_result=Math.sqrt(sq);
  }
  else{
    sqrt_result=Math.pow(sq,1/n);
  }
  return sqrt_result;
}
function nrt(x,n){
  return Math.pow(x,1/n);
}
function get_eq_ready(func){
function xC(dr,pos){
  for(i=0;i<func.length;i++){
    if(func.substring(i,i+1)==dr && (pos=='bef' || pos=='tow')){
      switch(func.substring(i-1,i)){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case 'x':
        case ')':
        case 'π':
        case 'E':
        func=func.substring(0,i)+"*"+dr+func.substring(i+1,func.length);
      }
    }
  }
  for(i=0;i<func.length;i++){
    if(func.substring(i,i+1)==dr && (pos=='aft' || pos=='tow')){
      switch(func.substring(i+1,i+2)){
        case '(':
        case 'M':
        func=func.substring(0,i)+dr+"*"+func.substring(i+1,func.length);
      }
    }
  }
}
func = func.replace(/cos/g,'Math.cos');
func = func.replace(/sin/g,'Math.sin');
func = func.replace(/tan/g,'Math.tan');
func = func.replace(/aCos/g,'Math.acos');
func = func.replace(/aSin/g,'Math.asin');
func = func.replace(/aTan/g,'Math.atan');
func = func.replace(/aTAn2/g,'Math.atan2');
func = func.replace(/abs/g,'Math.abs');
func = func.replace(/log/g,'Math.log');
func = func.replace(/√/g,'sqrt');
func = func.replace(/pow/g,'Math.pow');
func = func.replace(/x²/g,'Math.pow(x,2)');
func = func.replace(/π/g,'Math.PI');
func = func.replace(/e/g,'Math.E');
func = func.replace(/SQRT2/g,'Math.SQRT2');
func = func.replace(/LN2/g,'Math.LN2');
func = func.replace(/LOG2E/g,'Math.LOG2E');
func = func.replace(/×/g,'*');
func = func.replace(/÷/g,'/');
xC("x",'tow');
xC("M",'bef');
xC("(",'bef');
xC(")",'aft');
return '('+func+')';
}
