
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

function addHistory() {
    var historyHTML = '';

    for (var i = 0; i < inp_Val.length; i++) {
        historyHTML += sub_Inp[i] + inp_Val[i] + "<br>";
    }

    hisBox.innerHTML = historyHTML;
}

function clearHistory() {
			hisBox.innerHTML = "";
		}

function toggleHistory() {

    if (hisDiv.style.display === 'none' || hisDiv.style.display === '') {
        hisDiv.style.display = 'block';
    } else {
        hisDiv.style.display = 'none';
    }
}
