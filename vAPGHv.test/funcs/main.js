jQuery('document').ready(function() {
    
    document.getElementById("whitet").style.display="none";

    var test;

    test = confirm("Вы уверены?)"); // запрос подтверждения

    if (test != true)
    {
        jQuery('body').remove();
    }

    jQuery(".darkt").on("click", function () {

        jQuery('.bod').html(

            '<link href="style/dark-style.css" rel="stylesheet">'

        )
        
        document.getElementById("darkt").style.display="none";
        document.getElementById("whitet").style.display="";


    });

    jQuery(".whitet").on("click", function () {

        jQuery('.bod').html(

            '<link href="style/style.css" rel="stylesheet">'

        )
        
         document.getElementById("whitet").style.display="none";
         document.getElementById("darkt").style.display="";

    });

})
