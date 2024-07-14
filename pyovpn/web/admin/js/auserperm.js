$(function() {
    function shouldShowTOTPandAuthWarningForGroupCombobox($optionEl) {
        return ($optionEl.data('auth-and-totp-in-conflict') === true);
    }

    function showOrHideWarningForGroupCombobox() {
        const combo = $(this);
        const optionEl = combo.find('option:selected');
        const name = combo.attr('name');
        const anchor = combo.closest('tr');
        const tooltipId = `${name}-combobox-tooltip`;

        const checker = () => shouldShowTOTPandAuthWarningForGroupCombobox(optionEl);
        const displayFunc = function() {
            showTOTPandAuthWarningForGroupCombobox(
                anchor,
                tooltipId,
                ('<tr class="no-borders""><td></td><td class="selectbox-cell align-top">'
                 + '<div class="text-danger float-left"><i id="{tooltip_id}" class="fal fa-exclamation-triangle mr-1"></i>{text}</div>'
                 + '</td><td class="box-shaped-control-cell"></td><td class="box-shaped-control-cell"></td>'
                 + '<td class="box-shaped-control-cell"></td>'
                 + '<td class="box-shaped-control-cell"></td><td class="box-shaped-control-cell"></td></tr>')
            );
        };
        const hideFunc = () => hideTOTPandAuthWarningForGroupCombobox(anchor);
        showOrHideTOTPandAuthWarningAsNeeded(checker, displayFunc, hideFunc);
    }

    $('.card .auth-section :radio, .card .totp-section :radio').on(
        'change',
        showOrHideTOTPandAuthRelatedWarningsinCard);

    $('.user-group-combobox').on('change', showOrHideWarningForGroupCombobox);

    // check if warnings need to be shown on document load
    $('.card').each(showOrHideTOTPandAuthRelatedWarningsinCard);
    $('.user-group-combobox:visible').each(showOrHideWarningForGroupCombobox);
});
