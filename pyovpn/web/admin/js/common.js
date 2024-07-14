$(function () {
    // Spinner for 'Exit Remove View/Edit' button [AS-681]
    $("#exit-remote-view-edit-btn").click(function(){
        $("#exit-remote-view-edit-btn").hide();
        $("#exit-remote-view-edit-spin").show();
    });

    // Make boostrap toggles behave as radio buttons
    $('.bt-radio').on('change', function bt_radio_toggle() {
        $('.bt-radio').unbind('change', bt_radio_toggle);
        var group = "input:checkbox[name='"+$(this).attr("name")+"']";
        var my_id = $(this).attr("id");
        $(group).each(function () {
            var some_id = $(this).attr('id');
            if (my_id != some_id) {
                $(this).bootstrapToggle('off');
            } else {
                $(this).bootstrapToggle('on');
            }
        });
        $('.bt-radio').bind('change', bt_radio_toggle);
    });
});
