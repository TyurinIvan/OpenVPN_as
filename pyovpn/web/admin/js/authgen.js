$(function() {
    function shouldShowMFAandDefAuthWarning() {
        const defAuthMethod = $('[name="auth.module.type"]:checked').val();
        const TOTPEnabled = $('[name="vpn.server.google_auth.enable"]').is(':checked');

        return ([AuthTypes.PAS_ONLY, AuthTypes.SAML].includes(defAuthMethod) && TOTPEnabled);
    }

    function showWarnings() {
        const totpSectionEl = $('#totp-section');
        let totpWarning = totpSectionEl.data('warning-widget');
        if (!totpWarning) {
            const tooltipId = 'tooltip-target';
            totpWarning = new WidgetWithTooltip(
                TOOLTIP_POPUP_TEXT,
                `#${tooltipId}`,
                null,
                '<div class="text-danger float-right"><i id="{tooltip_id}" class="fal fa-exclamation-triangle mr-1"></i>{text}</div>',
                {'text': WIDGET_TEXT, 'tooltip_id': tooltipId},
            );

            totpSectionEl.find('.form-row .form-group:first').append(totpWarning.render());
            totpSectionEl.data('warning-widget', totpWarning);
        }

        const defaultAuthSectionEl = $('#default-auth-section');
        let authWarning = defaultAuthSectionEl.data('warning-widget');
        if (!authWarning) {
            authWarning = new Widget(
                WARNING_WIDGET_TEMPLATE,
                {'text': 'The selected authentication system is in conflict with some of the selected settings.'}
            );
            defaultAuthSectionEl.after(authWarning.render());
            defaultAuthSectionEl.data('warning-widget', authWarning);
        }

        totpWarning.show('fadeIn');
        authWarning.show('fadeIn');
    }

    function hideWarnings() {
        const totpWarning = $('#totp-section').data('warning-widget');
        const authWarning = $('#default-auth-section').data('warning-widget');
        totpWarning && totpWarning.hide('fadeOut');
        authWarning && authWarning.hide('fadeOut');
    }

    function showOrHideWarningsAsNeeded() {
        if (shouldShowMFAandDefAuthWarning()) {
            showWarnings();
        } else {
            hideWarnings();
        }
    }

    function showOrHidePasswordStrengthElementAsNeeded() {
        const checkboxEl = $('input[name="cs.cws.pwd_change"]');
        const uiEl = $("#cws_ui_pwd_strength");

        if (checkboxEl.prop('checked')) {
            uiEl.show();
        } else {
            uiEl.hide();
        }
    }

    $("input[name='cs.cws.pwd_change']").on('change', showOrHidePasswordStrengthElementAsNeeded);
    $('[name="auth.module.type"], [name="vpn.server.google_auth.enable"]').on('change', showOrHideWarningsAsNeeded);

    // do the check on page load as well
    showOrHidePasswordStrengthElementAsNeeded();
    showOrHideWarningsAsNeeded();
});
