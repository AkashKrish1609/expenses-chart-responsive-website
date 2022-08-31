async function theData(){
    const response = await fetch("data.json");
    const data = await response.json();
     
    data.forEach(function(element){
        const day = element.day;
        const amount = element.amount;
        const html = document.querySelector("span."+day);
        html.style.height = amount+"%";

        const hoverLegend = document.querySelector("legend."+day);
        hoverLegend.innerText = "$"+amount;

        
    });

} 

theData();

function dayColor(){
    
    var today = new Date();
    var dayName =  today.toLocaleDateString(undefined, {weekday: "short"}).toLowerCase();

    const colorChange = document.querySelectorAll(".bar-graph");
    const diffDay = document.querySelector("span."+dayName);

    colorChange.forEach(function(element){
        if(element.classList.contains(dayName)){

            diffDay.classList.add("bg-change");
        }
    })

}


dayColor();
    