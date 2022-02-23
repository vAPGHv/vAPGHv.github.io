jQuery('document').ready(function() {

    var t1='';

    function re(bbb, nnn) {

        jQuery(bbb).on("click", function () {

            t1 = t1 + nnn;

            jQuery('.result').html(
                'Получается: ' + t1
            );

        });

    }

    re('.b1', '1')
    re('.b2', '2')
    re('.b3', '3')
    re('.bd', '/')

    re('.b4', '4')
    re('.b5', '5')
    re('.b6', '6')
    re('.bm', '*')

    re('.b7', '7')
    re('.b8', '8')
    re('.b9', '9')
    re('.bmin', '-')

    re('.b0', '0')
    jQuery('.br').on("click", function () {

        jQuery('.result').html(
            'Получается: ' + eval(t1)
        );

        t1 = '';

    });
    jQuery('.bc').on("click", function () {

        jQuery('.result').html(
            'Получается: 0'
        );

        t1 = '';

    });
    re('.bplu', '+')

});
