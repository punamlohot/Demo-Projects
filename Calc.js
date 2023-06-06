
function getValue(e)
{
	//alert("hi");
	//document.getElementById('calc').value=(e);
	//Code to append input
	
	if (document.getElementById('calc').value == '0')
	{
		document.getElementById('calc').value = e;
	}
	else 
	{
		document.getElementById('calc').value += e;
	}
}

function clearAll()
{
	document.getElementById('calc').value ='0';
	document.getElementById('subInput').value = '';
}
function removeLast()
{
	temp = document.getElementById('calc').value;
	if(temp.length>1)
	{
		document.getElementById('calc').value = temp.slice(0,-1);
	}
	else
	{
		document.getElementById('calc').value = '0';
	}
}
function solve()
{
	temp = document.getElementById('calc').value;
	document.getElementById('calc').value = eval(temp);
	
	let arr =[];
	arr.push(document.getElementById('subInput').value = temp);
	addHistory();
}
function square()
{

document.getElementById('calc').value = document.getElementById('calc').value**2;

}
function oneByx()
{
	document.getElementById('calc').value = 1/ document.getElementById('calc').value;
}
function sqrt()
{
	document.getElementById('calc').value = Math.sqrt(document.getElementById('calc').value);
}

//------------------------------------------------------------------------------------------------------------------------

function showHistory()
{
	let history = '<div class="his">';
	history+= "<p>98-6 =</p><p>92</p>";
	history+= '</div>';
	document.getElementsById('history').innerHTML = history;
}

// function showHistory() {
 	
//   }

function addHistory()
{
	let history = [];
	history.push(document.getElementById('history').innerHTML += document.getElementById('subInput').value);

	// let historySection = document.getElementById("history");
 	// historySection.innerHTML = "";
 	// for (let i = 0; i < history.length; i++) {
 	//   historySection.innerHTML += history[i] + "<br>";
 	// }
}