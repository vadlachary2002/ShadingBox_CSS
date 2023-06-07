function cip(){
  var st = document.getElementById('input').value;



  if(st==""){
    document.getElementById('res').innerHTML ="Please enter a string "

  }
  else {
    var mn = "";

    for (var i = 0; i < st.length; i++) {
      if(i%2==0){

        var n = st.charCodeAt(i);
        var m = n;
        if(m>77 & m<91){
          m=m-77+64;
        }
        else if(m>109 & m<123){
          m=m-109+96;
        }
        else{
          m=n+13;
        }
        var l = String.fromCharCode(m);
        var mn = mn + l;

      }
      else {

        var n = st.charCodeAt(i);
        var m = n;

        if(m>86 & m<91){
          m=m-86+65;
        }
        else if(m>118 & m<123){
          m=m-118+96;

        }
        else{
          var m = n + 5;
        }
        var l = String.fromCharCode(m);
        var mn = mn + l;

      }


    }



    document.getElementById('res').innerHTML =mn;



  }
}
