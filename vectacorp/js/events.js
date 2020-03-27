$(document).ready(function(){
    $("#btn1").click( (e) => {
    // e.stopPropagation();
    // let text = $(this).text()
    let text = e.target.innerText
    alert(`Button with the text "${text}" was clicked`)
})
    $("#btn2").bind(
        'click', (e) => {
            // e.stopPropagation();
            // let text = $(this).text()
            let text = e.target.innerText
            alert(`Button with the text "${text}" was clicked`)
        }
    )
    $("#btn3").on(
        'click',   (e) =>  {
            // e.stopPropagation();
            // let text = $(this).text()
            let text = e.target.innerText
            alert(`Button with the text "${text}" was clicked`)
        }
    )
    $("body").on(
        'click', '#btn4, #btn5', (e) =>  {
            // e.stopPropagation();
            // let text = $(this).text()
            let text = e.target.innerText
            alert(`Button with the text "${text}" was clicked`)
        }
    )

    // Step 20
    $('#square').css({'width': '400px', 'height': '400px', 'border-style':'solid'})
    $("#square").on({
        click:   (e) =>  {
            let eventType = e.type
            $(`#${e.target.id}`).css('background-color', 'yellow')
            alert(`DIV event:  "${eventType}"`)
        },
        mouseenter: (e) =>  {

            let eventType = e.type
            $(`#${e.target.id}`).css('background-color', 'red')
            console.log(`DIV event:  "${eventType}"`)
        },
        mouseleave: (e) =>  {

            let eventType = e.type

            $(`#${e.target.id}`).css('background-color', 'blue')

            console.log(`DIV event:  "${eventType}"`)
        }

    }
    )

// Step 21
    $('span').on({
        click: function(){
            $(this).text('Mouse Clicked');
        },
        mouseenter: function(){
            $(this).text('Mouse Enter');
        },
        mouseleave: function(){
            $(this).text('Mouse leave');
        },

    })
// Step 22
    $('a').click( function (e) {
        e.preventDefault()
        $(this).css('color', 'red')
        console.log(e.target.nodeName)
        alert(e.target.nodeName)
    })
// Step 23
    $( window ).resize(function() {

        $('#size').text(`STEP 22.
                    Width: ${ $( window ).width() }, Height: ${ $( window ).height() }`)
    });
// Step 24
    $('#step24').focusin(
        function () {
            $(this).css('background-color', 'gray')
        }
    )
    $('#step24').focusout(
        function () {
            $(this).css('background-color', 'white')
        }
    )
// STEP 25
    $("form").validate({

        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            }
        },
        // Specify validation error messages
        messages: {
            name: "Please enter your firstname",
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid

        submitHandler: function(form) {
            form.submit();
        }
    });
});

