function validate(){
  var firstname=document.getElementById('username').Value;
  var firstname=document.getElementById('password').Value;
  if(username=="admin"&& password=="user")
  {
    alert('login succesfully');
    return false;
  }else{
    alert('login failed');
  }



}