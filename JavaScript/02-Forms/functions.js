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
    let delay = document.getElementById('delay').value;
    document.body.style.transition = `background-color ${delay}s`, `color ${delay}s`;
    document.getElementById('switch-background').style.transition = `background-image ${delay}s`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}

function UploadPhoto(input)
{
    let photo = document.getElementById("photo");
    
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        
        reader.onload = function(e) {
            photo.src = e.target.result;
            photo.alt = "Фото студента";
            photo.title = "Фото студента";
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

function ToggleForm(formId) {
    const form = document.getElementById(formId);
    const toggleIcon = form.previousElementSibling.querySelector('.toggle-icon');
    
    form.classList.toggle('collapsed');
    
    if (form.classList.contains('collapsed')) {
        toggleIcon.textContent = '+';
    } else {
        toggleIcon.textContent = '−';
    }
}