document.addEventListener('DOMContentLoaded', function(){

    const timeCurrent = document.querySelector('.time-current')

    function GetTime(returnType){
        let currentDateTime = new Date()

        let hours = currentDateTime.getHours().toString()
        let minutes = currentDateTime.getMinutes().toString()
        let seconds = currentDateTime.getSeconds().toString()
        
        function addZero(string){
            if(string.length < 2){
                return '0'+string
            }else{
                return string
            }
        }
        hours = addZero(hours)
        minutes = addZero(minutes)
        seconds = addZero(seconds)
    
        let currentTime = `${hours}:${minutes}:${seconds}`

        let timeInSeconds = Number(hours*3600) + Number(minutes*60) + Number(seconds)
        
        if (returnType == 1){
            return currentTime
        }else if (returnType == 0){
            return timeInSeconds
        }
    }

    const moneyDisplay = document.querySelector('.money-display')
    function UpdateEarned(time){
        const hourlyWage = document.getElementById('wage')
        let timeStarted = document.getElementById('time-start').value.toString()
        let timeParts = timeStarted.split(":")
        let timeValueInSeconds = parseInt(timeParts[0], 10)*3600 + parseInt(timeParts[1], 10)*60 
        console.log(time - timeValueInSeconds)

        let hoursWorked = parseFloat((time -timeValueInSeconds)/3600)
        let moneyMade = parseFloat(hourlyWage.value) * hoursWorked
        moneyMade = moneyMade.toFixed(4)

        moneyDisplay.innerHTML = moneyMade + ' PLN'
    }

    function UpdateTimer(){
        timeCurrent.innerHTML = GetTime(1)
    }
    setInterval(() => UpdateTimer(), 1000)


    const button = document.getElementById('calc-btn')
    button.addEventListener('click', function(){
        setInterval(() => UpdateEarned(GetTime(0)), 1000)
    })
})