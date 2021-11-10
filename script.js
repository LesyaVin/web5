function multiplication() {
	var x, y, z;
    x = parseInt(document.getElementById('x').value);
    y = parseInt(document.getElementById('y').value);

    var z = x * y;

	if (x===0 || y===0)   
    {
	let dr = "Ошибка!";
        document.getElementById('result').innerHTML = dr ;
 	alert('Отсутствуют значения параметров.');
    }
    else{	
   	 if (x<0 || y<0)
   	 {
		let dr  = "Ошибка!";
   	     document.getElementById('result').innerHTML = dr ;
		 alert('Некорректный ввод! Введите положительные числа.'); 
  	  }
	else{

   		 if (isNaN(x)==true || isNaN(y)==true) 
   		 { 	let dr  = "Ошибка!";
    		    document.getElementById('result').innerHTML = dr ;
			alert('Заполните все поля.');
  		  }
	
   			 else
   			 { document.getElementById('result').innerHTML = z;}
   			 }
	}
	
    
}
window.addEventListener('DOMContentLoaded', function (multiplication) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result");
    d.addEventListener("click", multiplication);
 });
