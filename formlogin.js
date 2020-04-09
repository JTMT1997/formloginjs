var p = document.getElementsByTagName('p')[0].style.color = 'red';
var label = document.getElementsByTagName('label')[0].style.color = 'green';
var input = document.getElementsByTagName('input')[0].style.background ='black';
var input = document.getElementsByTagName('input')[0].style.color ='white';
var input2 = document.getElementsByTagName('input')[1].style.background ='black';
var input2 = document.getElementsByTagName('input')[1].style.color ='white';
var a = document.getElementsByTagName('form')[0].style.background = 'yellow';
var button = document.getElementsByTagName('Button')[0].style.background='black';
var tulisbutton = document.getElementsByTagName('Button')[0].style.color = 'white'	

function kl () {
					
	var login = document.login.username.value;
	var pw    = document.login.password.value;

		if (login==="jtumbur11@gmail.com" && pw==="unj") {

				swal("Correct", "You clicked the button!", "success");		
		}else if(login==false && pw==false){
				alert('silahkan isi');
		}else {
				swal("Silahkan login ulang");
			  }
	  }

function mouseOver() {
  document.getElementsByTagName('button')[0].style.color = 'red';
  document.getElementsByTagName('button')[0].style.background = 'blue';
					 }

function mouseOut() {
  document.getElementsByTagName('button')[0].style.background = 'black';
  document.getElementsByTagName('button')[0].style.color = "white";
					}

function input0()   {
  document.getElementsByTagName('input')[0].style.background = 'black';
  document.getElementsByTagName('input')[0].style.color = "white";
				    }

function input1()   {
  document.getElementsByTagName('input')[1].style.background = 'black';
  document.getElementsByTagName('input')[1].style.color = "white";
                    }

function inputEmail() {
 var x = document.getElementsByTagName("input")[0].style.background='red';
                      }

function inputPasswords() {
 var y = document.getElementsByTagName("input")[1].style.background='red';
                          }