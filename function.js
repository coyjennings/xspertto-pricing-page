<script src="https://cdnjs.cloudflare.com/ajax/libs/floatthead/2.2.1/jquery.floatThead.min.js"></script>
<script type="text/javascript">

{/* Typescript errors don't solve it */}
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

    {/* plan-comparison-table--collapsed */}
    (function($){

        function compare_feature() {

            $('.rv_button').click(function (event) {
                event.preventDefault();

                if (!$('.plan-comparison-table').hasClass('plan-comparison-table--collapsed')) {
                    $('.plan-comparison-table').addClass('plan-comparison-table--collapsed');
                }
                else {
                    $('.plan-comparison-table').removeClass('plan-comparison-table--collapsed');
                }

            });

        }

        $(window).load(function() {
            compare_feature();
        });

    })(jQuery);

    jQuery(document).ready(function() {

        jQuery('#price').hide();
        jQuery('#price_show').click(function(e){
            e.preventDefault();
            jQuery("#price").slideToggle();
            jQuery('#price_show').toggleClass('opened closed');
        });

        jQuery('#visitor').hide();
        jQuery('#visitor_show').click(function(e){
            e.preventDefault();
            jQuery("#visitor").slideToggle();
            jQuery('#visitor_show').toggleClass('opened closed');
        });

    });

</script>

<script src="https://code.jquery.com/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/floatthead"></script>
    <script>
    $(document).ready(function () {
        var $table = $('#tablepress-1');

        $("#compare_button").on("click", function() {
            var el = $(this);
            el.text() == el.data("text-swap")
                ? el.text(el.data("text-original"))
                : el.text(el.data("text-swap"));
            el.text() == el.data("text-swap")
                ? $table.floatThead({top: 65})
                : $table.floatThead('destroy');
        });
    });
</script>