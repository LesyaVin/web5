function multiplication() {
	var x, y, z;
    x = parseInt(document.getElementById('x').value);
    y = parseInt(document.getElementById('y').value);

    var z = x * y;

	if (x===0 || y===0)   
    {
        alert('Отсутствуют значения параметров.');
	let dat = "Ошибка!";
        document.getElementById('result ').innerHTML = dat;
    }
	
    if (x<0 || y<0)
    {
        alert('Некорректный ввод! Введите положительные числа.'); 
	let dat = "Ошибка!";
        document.getElementById('result ').innerHTML = dat;
    }

    if (isNaN(x)==true || isNaN(y)==true) 
    {    alert('Заполните все поля.');
	let dat = "Ошибка!";
        document.getElementById('result ').innerHTML = dat;
    }
	
    else
        document.getElementById('result').innerHTML = z;
    
}
window.addEventListener('DOMContentLoaded', function (multiplication) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result-cl");
    d.addEventListener("click", multiplication);
 });
