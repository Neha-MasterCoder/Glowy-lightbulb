function turnItOff(){
    var img = document.getElementById ('bulb');
    img.src="https://www.w3schools.com/js/pic_bulboff.gif"
    console.log (" I will haunt you in your dreams ")
    document.getElementById('showdata').innerHTML="I will haunt you in your dreams...." 
}
function turnItOn(){
    var img = document.getElementById ('bulb');
    img.src="https://www.w3schools.com/js/pic_bulbon.gif"
    console.log (" AHHH who turned the lights on")
    document.getElementById('showdata').innerHTML="AHHHHH who turned the lights on!?!?!" 

}