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
            photo.alt = "Фото";
            photo.title = "Фото";
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

document.body.onload = function tick_timer()
{
    let time = new Date();
    document.getElementById("full-time").innerHTML = time;
    
    /* time */
    document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
    document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
    document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());
    
    /* date */
    document.getElementById("year").innerHTML = addLeadingZero(time.getFullYear());
    document.getElementById("months").innerHTML = addLeadingZero(time.getMonth() + 1);
    document.getElementById("days").innerHTML = addLeadingZero(time.getDate());
    
    /* weekday */
    document.getElementById("weekday").innerHTML = time.toLocaleDateString("ru", {weekday: 'long'});
    
    // checkbox
    document.getElementById("current-date").style.visibility = document.getElementById("show-date").checked ? "visible" : "hidden";
    document.getElementById("weekday").style.visibility = document.getElementById("show-weekday").checked ? "visible" : "hidden";

    setTimeout(tick_timer, 100);
}

function addLeadingZero(number)
{
    return number < 10 ? "0" + number : number;
}

document.getElementById("btn-start").onclick = function startCoundownTimer()
{
    let targetDateControl = document.getElementById("target-date");
    let targetTimeControl = document.getElementById("target-time");
    let btnStart = document.getElementById("btn-start");
    targetDateControl.disabled = targetTimeControl.disabled = !targetDateControl.disabled;
    if (btnStart.value === "Start")
    {
        btnStart.value = "Stop";
        tickCountdown();
        //document.getElementById("target-date-value").innerHTML = targetDateControl.valueAsDate;
        //document.getElementById("target-time-value").innerHTML = targetTimeControl.valueAsDate;
    }
    else
    {
        btnStart.value = "Start";
        document.getElementById("target-date-value").innerHTML = "weiting...";
        document.getElementById("target-time-value").innerHTML = "weiting...";
    }
}

function tickCountdown()
{
    if (!document.getElementById("target-time").disabled) return;
    let now = new Date();
    let targetDateControl = document.getElementById("target-date");
    let targetTimeControl = document.getElementById("target-time");
    let targetDate = targetDateControl.valueAsDate;
    let targetTime = targetTimeControl.valueAsTime;

    // выравнивание часового пояса 
    targetDate.setHours(targetDate.getHours() + targetDate.getTimezoneOffset()/60);
    targetTime.setHours(targetTime.getHours() + targetTime.getTimezoneOffset()/60);
    
    // сводим даты и время в одну переменную 
    targetTime.setFullyear(targetDate.getFullYear());
    targetTime.setMonth(targetDate.getMonth());
    targetTime.setDatr(targetDate.getDate());

    
    document.getElementById("target-date-value").innerHTML = targetDate;
    document.getElementById("target-time-value").innerHTML = targetTime;
}