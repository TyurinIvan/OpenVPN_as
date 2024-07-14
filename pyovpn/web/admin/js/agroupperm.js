$(function() {
    const defGroupComboboxSelector = '#container select[name="edit:none:default_group"]';

    function shouldShowTOTPandAuthWarningForDefaultGroup() {
        const name = $(`${defGroupComboboxSelector} option:selected`).val();
        return shouldShowTOTPandAuthWarnings(name);
    }

    function showOrHideWarningsForDefGroupCombobox(anchor) {
        const showFunc = () => showTOTPandAuthWarningForGroupCombobox(
            anchor,
            'def-group-combobox-tooltip',
            '<div class="text-danger float-left mt-1"><i id="{tooltip_id}" class="fal fa-exclamation-triangle mr-1"></i>{text}</div>');
        const hideFunc = () => hideTOTPandAuthWarningForGroupCombobox(anchor);
        showOrHideTOTPandAuthWarningAsNeeded(shouldShowTOTPandAuthWarningForDefaultGroup, showFunc, hideFunc);
    }

    $('.card .auth-section :radio, .card .totp-section :radio').on('change', showOrHideTOTPandAuthRelatedWarningsinCard);
    $(defGroupComboboxSelector).on('change', function() {
        showOrHideWarningsForDefGroupCombobox($(this));
    });

    // check if warnings need to be shown on document load
    $('.card').each(showOrHideTOTPandAuthRelatedWarningsinCard);
    showOrHideWarningsForDefGroupCombobox($(defGroupComboboxSelector));
});
