$(document).ready(function(){
$("#btn1").click( (e) => {
    // e.stopPropagation();
    // let text = $(this).text()
    let text = e.target.innerText
    alert(`Button with the text "${text}" was clicked`)
})
    $("#btn2").click( (e) => {
    // e.stopPropagation();
    // let text = $(this).text()
    let text = e.target.innerText
    alert(`Button with the text "${text}" was clicked`)
})

});

