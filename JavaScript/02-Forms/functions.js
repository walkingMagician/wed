function Power()
{
	let base = document.getElementById("base").value;
	let exponent = document.getElementById("exponent").value;
	document.getElementById("power").innerHTML = base ** exponent;
}

document.addEventListener("mousemove", GetMouseCoords);
function GetMouseCoords(event)
{
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").innerHTML = `X = ${x}, Y = ${y}`;
}

function SwitchBackground()
{
    let SwitchBackground = document.getElementById("switch-background");
    /*if (SwitchBackground.style.backgroundImage === 'url("Image/moon.png")')
    {
        SwitchBackground.style.backgroundImage = 'url("Image/sun.png")';
        document.body.className = "dark";
    }
    else
        {
            SwitchBackground.style.backgroundImage = 'url("Image/moon.png")';
            document.body.className = "light";
    }*/
    let delay = document.getElementById('delay').value;
    document.body.style.transition = `background-color ${delay}s`, `color ${delay}s`;
    document.getElementById('switch-background').style.transition = `background-image ${delay}s`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}