<script type="text/javascript">

    (function($){

        function dvcs_switch_pricing_periods() {

            $('.dvcs_switch_btn_1').click(function (event) {
                event.preventDefault();

                if (!$('.dvcs_switch_btn_1').hasClass('dvcs_active')) {

                    $('.dvcs_switch_btn_2').removeClass('dvcs_active');
                    $('.dvcs_switch_btn_1').addClass('dvcs_active');

                    $('.dvcs_pricing_2').removeClass('dvcs_active');
                    $('.dvcs_pricing_1').addClass('dvcs_active');

                }

            });

            $('.dvcs_switch_btn_2').click(function (event) {
                event.preventDefault();

                if (!$('.dvcs_switch_btn_2').hasClass('dvcs_active')) {

                    $('.dvcs_switch_btn_1').removeClass('dvcs_active');
                    $('.dvcs_switch_btn_2').addClass('dvcs_active');

                    $('.dvcs_pricing_1').removeClass('dvcs_active');
                    $('.dvcs_pricing_2').addClass('dvcs_active');

                }

            });

        }

        $(window).load(function() {
            dvcs_switch_pricing_periods();
        });

    })(jQuery);

</script>