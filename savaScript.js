var objects=[];
function add_obj(status,name,type,color,width,eq,x,y,r){
  switch(type){
    case 'p':
    case 'v':
	  case 'po':
      this.x=x;
      this.y=y;
    break;
    case 'f':
      this.eq=eq;
    break;
    case 'c':
      this.x=x;
      this.y=y;
      this.r=r;
    break;
  }
  this.type=type;
  this.width=width;
  this.status=status;
  this.color=color;
  this.name=name;
  this.change=function(old,nw){
    switch(old){
      case 'status':
        this.status=nw;
      break;
      case 'name':
        this.name=nw;
      break;
      case 'type':
        this.type=nw;
      break;
      case 'color':
        this.color=nw;
      break;
      case 'width':
        this.width=nw;
      break;
      case 'eq':
        this.eq=nw;
      break;
      case 'x':
        this.x=nw;
      break;
      case 'y':
        this.y=nw;
      break;
      case 'r':
        this.r=nw;
      break;
      }
    }
  }
function new_obj(status,name,type,color,width,eq,x,y,r){
  objects.push(new add_obj(status,name,type,color,width,eq,x,y,r));
}
var events=[];
function add_event(objId,property,old_value,new_value){
  this.obiId=objId;
  this.property=property;
  this.old_value=old_value;
  this.new_value=new_value;
}
function new_event(objId,property,old_value,new_value){
  sequence.push(new add_event(objId,property,old_value,new_value));
}
