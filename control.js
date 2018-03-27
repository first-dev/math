function ope(app){
  var ca = document.getElementsByClassName('calc')[0];
  var gr = document.getElementsByClassName('grapher')[0];
  var so = document.getElementsByClassName('solver')[0];
  var co = document.getElementsByClassName('converter')[0];
  var se = document.getElementsByClassName('setting')[0];
  ca.style.display='none';
  gr.style.display='none';
  so.style.display='none';
  co.style.display='none';
  se.style.display='none';
  for(i=0;i<5;i++){
    document.getElementsByTagName('I')[i].classList.remove("active");
  }
  document.getElementsByTagName('I')[app].classList.add("active");
  switch(app){
    case 0:
      ca.style.display='block';
      gr.style.display='none';
      so.style.display='none';
      co.style.display='none';
      so.style.display='none';
    break;
    case 1:
      ca.style.display='none';
      gr.style.display='block';
      so.style.display='none';
      co.style.display='none';
      so.style.display='none';
    break;
    case 2:
      ca.style.display='none';
      gr.style.display='none';
      so.style.display='block';
      co.style.display='none';
      so.style.display='none';
    break;
    case 3:
      ca.style.display='none';
      gr.style.display='none';
      so.style.display='none';
      co.style.display='block';
      so.style.display='none';
    break;
    case 4:
      ca.style.display='none';
      gr.style.display='none';
      so.style.display='none';
      co.style.display='none';
      so.style.display='block';
    break;
  }

}
function bars(x){
  x.classList.toggle("change");
  x.classList.toggle("closeC");
  document.getElementsByClassName('icon-bar')[0].classList.toggle("closeI");
}
function grapher_control_graph_all(){
  clean('oij');
  clean('gr');
  oij();
  for(j=0;j<objects.length;j++){
    if(objects[j].status==1)
      graph(j);
  }
}
function grapher_control(x){
  function grapher_control_display(div,action){
      switch (action) {
        case 'open':
          document.getElementById(div).style.display = 'block';
        break;
        case 'close':
          document.getElementById(div).style.display = 'none';
        break;
      }
  }
  function grapher_control_close_all_add_obj(){
    grapher_add_put_status.function=0;
    grapher_add_put_status.point=0;
    grapher_add_put_status.circle=0;
    grapher_add_put_status.polygonal=0;
  }
  switch(x){
	case 0://add
    if(grapher_bar_put_status.add==0){
	    grapher_control_display('add','open');
      grapher_control_display('move','close');
      grapher_control_display('edit','close');
      grapher_bar_put_status.add=1;
      grapher_bar_put_status.edit=0;
      grapher_bar_put_status.move=0;
    }
    else{
      grapher_control_display('add','close');
      grapher_bar_put_status.edit=0;
      grapher_bar_put_status.add=0;
      grapher_bar_put_status.move=0;
    }
	break;
	case 1://edit
    if(grapher_bar_put_status.edit==0){
	    grapher_control_display('edit','open');
      grapher_control_display('move','close');
      grapher_control_display('add','close');
      grapher_bar_put_status.edit=1;
      grapher_bar_put_status.move=0;
      grapher_bar_put_status.add=0;
    }
    else{
      grapher_control_display('edit','close');
      grapher_bar_put_status.edit=0;
      grapher_bar_put_status.add=0;
      grapher_bar_put_status.move=0;
    }
	break;
	case 2://move
    if(grapher_bar_put_status.move==0){
	    grapher_control_display('move','open');
      grapher_control_display('add','close');
      grapher_control_display('edit','close');
      grapher_bar_put_status.move=1;
      grapher_bar_put_status.edit=0;
      grapher_bar_put_status.add=0;
    }
    else{
      grapher_control_display('move','close');
      grapher_bar_put_status.edit=0;
      grapher_bar_put_status.add=0;
      grapher_bar_put_status.move=0;
    }
	break;
	case 3://zoom_in
		zoom*=(zoom<200)?1.2:1;
    grapher_control_graph_all();
	break;
	case 4://zoom_out
		zoom/=1.2;
    grapher_control_graph_all();
	break;
  case 5://move_up
    position.y-=s;
    grapher_control_graph_all();
  break;
  case 6://move_down
    position.y+=s;
    grapher_control_graph_all();
  break;
  case 7://move_right
    position.x-=s;
    grapher_control_graph_all();
  break;
  case 8://move_left
    position.x+=s;
    grapher_control_graph_all();
  break;
  case 9://add_function
    if(grapher_add_put_status.function==0){
	    grapher_control_display('add_function','open');
      grapher_control_display('add_point','close');
      grapher_control_display('add_circle','close');
      grapher_control_display('add_polygonal','close');
      grapher_control_close_all_add_obj();
      grapher_add_put_status.function=1;
      document.querySelector('#add table tr td').style.BorderBottomColor='red';
    }
    else{
      grapher_control_display('add_function','close');
      grapher_control_close_all_add_obj();
      document.querySelector('#add table tr td').style.BorderBottomColor='lightgray';
    }
  break;
  case 10://add_point
    if(grapher_add_put_status.point==0){
	    grapher_control_display('add_function','close');
      grapher_control_display('add_point','open');
      grapher_control_display('add_circle','close');
      grapher_control_display('add_polygonal','close');
      grapher_control_close_all_add_obj();
      grapher_add_put_status.point=1;
    }
    else{
      grapher_control_display('add_point','close');
      grapher_control_close_all_add_obj();
    }
  break;
  case 11://add_circle
    if(grapher_add_put_status.circle==0){
	    grapher_control_display('add_function','close');
      grapher_control_display('add_point','close');
      grapher_control_display('add_circle','open');
      grapher_control_display('add_polygonal','close');
      grapher_control_close_all_add_obj();
      grapher_add_put_status.circle=1;
    }
    else{
      grapher_control_display('add_circle','close');
      grapher_control_close_all_add_obj();
    }
  break;
  case 12://add_polygonal
    if(grapher_add_put_status.polygonal==0){
	    grapher_control_display('add_function','close');
      grapher_control_display('add_point','close');
      grapher_control_display('add_circle','close');
      grapher_control_display('add_polygonal','open');
      grapher_control_close_all_add_obj();
      grapher_add_put_status.polygonal=1;
    }
    else{
      grapher_control_display('add_polygonal','close');
      grapher_control_close_all_add_obj();
    }
  break;
  }
}
function create(create_type){
  function create_check_data(element,property){
    function create_check_data_comparison(property,value){
      var result;
      for(i=0;i<objects.length;i++){
        eval('result=(objects[i].'+property+'=="'+value+'");');
        if(result==true){break;}
      }
      return result;
    }
    var name = document.querySelector('#add_'+element+' input[name=name]');
    var eq = document.querySelector('#add_'+element+' input[name=eq]');
    var x = document.querySelector('#add_'+element+' input[name=x]');
    var y = document.querySelector('#add_'+element+' input[name=y]');
    var r = document.querySelector('#add_'+element+' input[name=r]');
    var width = document.querySelector('#add_'+element+' input[name=width]');
    var error = document.querySelector('#add_'+element+' #error_message');
    var result=1;
    switch(element){
      case 'function':
        switch(property){
          case 'name':
            if(name.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a name';
              result=0;
            }
            else if(create_check_data_comparison('name',name.value)){
              error.style.display='block';
              error.innerHTML='There is another object have the same name. Please enter another one';
              result=0;
            }
          break;
          case 'eq':
            var func = get_eq_ready(eq.value),x=0;
            try{
              eval('func = ' + func+';');
            }
            catch(err) {
              if(eq.value==''){
                error.style.display='block';
                error.innerHTML='Please enter an Equation';
                result=0;
              }
              else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(func)){
                error.style.display='block';
                error.innerHTML='This equation you entered is incorrect. Please enter another one';
                result=0;
              }
            }
          break;
          case 'width':
            if(width.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a width';
              result=0;
            }
            else if(width.value*0!=0){
              error.style.display='block';
              error.innerHTML='The width you entered is incorrect. Please enter another one';
              result=0;
            }
          break;
        }
      break;
      case 'point':
        switch(property){
          case 'name':
            if(name.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a name';
              result=0;
            }
            else if(create_check_data_comparison('name',name.value)){
              error.style.display='block';
              error.innerHTML='There is another object have the same name. Please enter another one';
              result=0;
            }
          break;
          case 'x':
              try{
                  eval('var x_changed = ' + get_eq_ready(x.value)+';');
              }
              catch(err){
                if(x.value==''){
                  error.style.display='block';
                  error.innerHTML='Please enter a X';
                  result=0;
                }
                else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(x_changed)){
                  error.style.display='block';
                  error.innerHTML='This X you entered is incorrect. Please enter another one';
                  result=0;
                }
              }
          break;
          case 'y':
              try{
                  eval('var y_changed = ' + get_eq_ready(y.value)+';');
              }
              catch(err){
                if(y.value==''){
                  error.style.display='block';
                  error.innerHTML='Please enter an Y';
                  result=0;
                }
                else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(y_changed)){
                  error.style.display='block';
                  error.innerHTML='This Y you entered is incorrect. Please enter another one';
                  result=0;
                }
              }
          break;
          case 'width':
            if(width.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a width';
              result=0;
            }
            else if(width.value*0!=0){
              error.style.display='block';
              error.innerHTML='The width you entered is incorrect. Please enter another one';
              result=0;
            }
          break;
        }
      break;
      case 'circle':
        switch(property){
          case 'name':
            if(name.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a name';
              result=0;
            }
            else if(create_check_data_comparison('name',name.value)){
              error.style.display='block';
              error.innerHTML='There is another object have the same name. Please enter another one';
              result=0;
            }
          break;
          case 'x':
              try{
                  eval('var x_changed = ' + get_eq_ready(x.value)+';');
              }
              catch(err){
                if(x.value==''){
                  error.style.display='block';
                  error.innerHTML='Please enter a X';
                  result=0;
                }
                else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(x_changed)){
                  error.style.display='block';
                  error.innerHTML='This X you entered is incorrect. Please enter another one';
                  result=0;
                }
              }
          break;
          case 'y':
              try{
                  eval('var y_changed = ' + get_eq_ready(y.value)+';');
              }
              catch(err){
                if(y.value==''){
                  error.style.display='block';
                  error.innerHTML='Please enter an Y';
                  result=0;
                }
                else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(y_changed)){
                  error.style.display='block';
                  error.innerHTML='This Y you entered is incorrect. Please enter another one';
                  result=0;
                }
              }
          break;
          case 'r':
              try{
                  eval('var r_changed = ' + get_eq_ready(r.value)+';');
              }
              catch(err){
                if(r.value==''){
                  error.style.display='block';
                  error.innerHTML='Please enter an R';
                  result=0;
                }
                else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(r_changed)){
                  error.style.display='block';
                  error.innerHTML='This R you entered is incorrect. Please enter another one';
                  result=0;
                }
                else if(r_changed<0){
                    error.style.display='block';
                    error.innerHTML='The R can\'t be negative. Please enter another one';
                    result=0;
                }
              }
          break;
          case 'width':
            if(width.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a width';
              result=0;
            }
            else if(width.value*0!=0){
              error.style.display='block';
              error.innerHTML='The width you entered is incorrect. Please enter another one';
              result=0;
            }
          break;
      }
      break;
      case 'polygonal':
        switch(property){
          case 'name':
            if(name.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a name';
              result=0;
            }
            else if(create_check_data_comparison('name',name.value)){
              error.style.display='block';
              error.innerHTML='There is another object have the same name. Please enter another one';
              result=0;
            }
          break;
          case 'x':
              try{
                  eval('var x_changed0 = [' + get_eq_ready(x.value)+'];');
                  var x_changed=0;
                  for(i=0;i<x_changed0.length;i++){
                    x_changed+=x_changed0[i];
                  }
              }
              catch(err){
                if(x.value==''){
                  error.style.display='block';
                  error.innerHTML='Please enter a X';
                  result=0;
                }
                else if(!isNaN(eval(get_eq_ready(x.value)))){
                    error.style.display='block';
                    error.innerHTML='You entered just one X. Please enter another values';
                    result=0;
                    alert('done');
                }
                else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(x_changed)){
                  error.style.display='block';
                  error.innerHTML='This X you entered is incorrect. Please enter another one';
                  result=0;
                }
              }
          break;
          case 'y':
              try{
                  eval('var y_changed0 = [' + get_eq_ready(y.value)+'];');
                  var y_changed=0;
                  for(i=0;i<y_changed0.length;i++){
                    y_changed+=y_changed0[i];
                  }
              }
              catch(err){
                if(y.value==''){
                  error.style.display='block';
                  error.innerHTML='Please enter an Y';
                  result=0;
                }
                else if(err.name=='SyntaxError' || err.name=='EvalError' || isNaN(y_changed)){
                  error.style.display='block';
                  error.innerHTML='This Y you entered is incorrect. Please enter another one';
                  result=0;
                }
              }
          break;
          case 'width':
            if(width.value==''){
              error.style.display='block';
              error.innerHTML='Please enter a width';
              result=0;
            }
            else if(width.value*0!=0){
              error.style.display='block';
              error.innerHTML='The width you entered is incorrect. Please enter another one';
              result=0;
            }
          break;
        }
      break;
    }
    return result;
  }
  switch (create_type) {
    case 0://create_function
      var name = document.querySelector('#add_function input[name=name]');
      var eq = document.querySelector('#add_function input[name=eq]');
      var width = document.querySelector('#add_function input[name=width]');
      var color = document.querySelector('#add_function input[name=color]');
      if(create_check_data('function','name') && create_check_data('function','eq') && create_check_data('function','width')){
        new_obj(1,name.value,'f',color.value,width.value,eq.value,0,0,0);
        name.value='';
        width.value='';
        eq.value='';
        document.querySelector('#add_function #error_message').style.display='none';
      }
    break;
    case 1://create_point
      var name = document.querySelector('#add_point input[name=name]');
      var x = document.querySelector('#add_point input[name=x]');
      var y = document.querySelector('#add_point input[name=y]');
      var width = document.querySelector('#add_point input[name=width]');
      var color = document.querySelector('#add_point input[name=color]');
      if(create_check_data('point','name') && create_check_data('point','x') && create_check_data('point','y') && create_check_data('point','width')){
        new_obj(1,name.value,'p',color.value,width.value,0,x.value,y.value,0);
        name.value='';
        width.value='';
        x.value='';
        y.value='';
        document.querySelector('#add_point #error_message').style.display='none';
      }
    break;
    case 2://create_circle
      var name = document.querySelector('#add_circle input[name=name]');
      var x = document.querySelector('#add_circle input[name=x]');
      var y = document.querySelector('#add_circle input[name=y]');
      var r = document.querySelector('#add_circle input[name=r]');
      var width = document.querySelector('#add_circle input[name=width]');
      var color = document.querySelector('#add_circle input[name=color]');
      if(create_check_data('circle','name') && create_check_data('circle','r') && create_check_data('circle','x') && create_check_data('circle','y') && create_check_data('circle','width')){
        new_obj(1,name.value,'c',color.value,width.value,0,x.value,y.value,r.value);
        name.value='';
        width.value='';
        x.value='';
        y.value='';
        r.value='';
        document.querySelector('#add_circle #error_message').style.display='none';
      }
    break;
    case 3://create_polygonal
      var name = document.querySelector('#add_polygonal input[name=name]');
      var width = document.querySelector('#add_polygonal input[name=width]');
      var color = document.querySelector('#add_polygonal input[name=color]');
      var x = document.querySelector('#add_polygonal input[name=x]');
      var y = document.querySelector('#add_polygonal input[name=y]');
      if(create_check_data('polygonal','name') && create_check_data('polygonal','x') && create_check_data('polygonal','y') && create_check_data('polygonal','width')){
        new_obj(1,name.value,'po',color.value,width.value,0,eval('['+x+']'),eval('['+y+']'),0);
        name.value='';
        width.value='';
        document.querySelector('#add_polygonal input[name=y]').value='';
        document.querySelector('#add_polygonal input[name=x]').value='';
        document.querySelector('#add_polygonal #error_message').style.display='none';
      }
    break;
  }
  grapher_control_graph_all();
}
//document.querySelector('') - get element by css selector
