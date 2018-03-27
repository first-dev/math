function oij(){
  var canvas=document.getElementById('oij');
  var gr = canvas.getContext('2d');
  s *= (s*zoom/50<1)?5:1;
  s /= (s*zoom/50>5)?5:1;
  var px=zoom*position.x;
  var py=-zoom*position.y;
  gr.beginPath();
  gr.font = '15px Arial';
  gr.textAlign = "end";
  var oij_text;
  for(i=h/2-Math.floor(h/(zoom*2))*zoom-py;i<h-py;i+=zoom){
	if(Math.round((h/2-i)/zoom)%s!=0){continue;}
    gr.moveTo(0,i+py);
    gr.lineTo(w,i+py);
    oij_text=(w/2-2+px<w)?w/2-2+px:w-3;
    if(oij_text<0){
      oij_text=3;
      gr.textAlign = "start";
      if(Math.round(h/2-i)!=0){gr.fillText(Math.round((h/2-i)/zoom),oij_text,i+13+py);}
      gr.lineWidth = 1;
      gr.strokeStyle = 'gray';
      gr.stroke();
      gr.beginPath();
      gr.textAlign = "end";
    }
    else {
      if(Math.round(h/2-i)!=0){gr.fillText(Math.round((h/2-i)/zoom),oij_text,i+13+py);}
    }
  }
  for(i=w/2-Math.floor(w/(zoom*2))*zoom-px;i<w-px;i+=zoom){
	if(Math.round((i-w/2)/zoom)%s!=0){continue;}
    gr.moveTo(i+px,0);
    gr.lineTo(i+px,h);
    oij_text=(h/2+13+py<h)?h/2+13+py:h-10;
    oij_text=(h/2+13+py<13)?13:oij_text;
    if(Math.round(i-w/2)==0 && (h/2+13+py>=h-10|| h/2+13+py<13)){continue;}
      gr.fillText(Math.round((i-w/2)/zoom),i-2+px,oij_text);
  }
  gr.lineWidth = 1;
  gr.strokeStyle = 'gray';
  gr.stroke();
  gr.beginPath();
  gr.moveTo(w/2+px,0);
  gr.lineTo(w/2+px,h);
  gr.moveTo(0,h/2+py);
  gr.lineTo(w,h/2+py);
  gr.lineWidth = 2;
  gr.strokeStyle = 'black';
  gr.stroke();
}
function clean(canId){
  document.getElementById(canId).getContext("2d").clearRect(0,0,w,h);
}
