function multiplication() {
	var x, y, z;
    x = parseInt(document.getElementById('x').value);
    y = parseInt(document.getElementById('y').value);

    var z = x * y;

	if (x===0 || y===0)   
    {
        alert('Отсутствуют значения параметров.');
	let result = "Ошибка!";
        document.getElementById('out').innerHTML = result;
    }
	
    if (x<0 || y<0)
    {
        alert('Некорректный ввод! Введите положительные числа.'); 
	let result = "Ошибка!";
        document.getElementById('out').innerHTML = result;
    }

    if (isNaN(x)==true || isNaN(y)==true) 
    {    alert('Заполните все поля.');
	let result = "Ошибка!";
        document.getElementById('out').innerHTML = result;
    }
	
    else
        document.getElementById('result').innerHTML = z;
    
}
window.addEventListener('DOMContentLoaded', function (multiplication) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result-cl");
    d.addEventListener("click", multiplication);
 });
