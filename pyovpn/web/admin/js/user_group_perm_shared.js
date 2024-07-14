function getAuthMethodSelector(name) {
    const authMethodElName = $.escapeSelector(`edit:${name}:user_auth_type`);
    const defaultPrefix = 'default_';
    return `[name="${authMethodElName}"]`;
}

function getTOTPSettingSelector(name) {
    const totpSettingElName = $.escapeSelector(`edit:${name}:prop_google_auth`);
    return `[name="${totpSettingElName}"]`;
}

function getCardSelector(name) {
    return `#${$.escapeSelector(name)}-card`;
}

function getSelectedAuthMethod(name) {
    const selector = getAuthMethodSelector(name);
    const authMethodEl = $(`${selector}:checked`);

    if (!authMethodEl.length) {
        return null;
    }
    return authMethodEl.data('actual-value');
}

function isTOTPAuthEnabled(name) {
    const selector = getTOTPSettingSelector(name);
    const totpAuthEl = $(`${selector}:checked`);
    if (!totpAuthEl.length) {
        return null;
    }
    return totpAuthEl.data('actual-value');
}

function shouldShowTOTPandAuthWarnings(name) {
    const selectedAuthMethod = getSelectedAuthMethod(name);
    const TOTPEnabled = isTOTPAuthEnabled(name);
    return ([AuthTypes.PAS_ONLY, AuthTypes.SAML].includes(selectedAuthMethod) && TOTPEnabled);
}

function showTOTPandAuthRelatedWarningsinCard(name) {
    const cardEl = $(getCardSelector(name));
    let cardWidgets = cardEl.data('warning-widgets');

    if (!cardWidgets) {
        cardWidgets = new Map();

        const tooltipId = `${name}-tooltip-target`;
        let totpWarning = new WidgetWithTooltip(
            TOOLTIP_POPUP_TEXT,
            `#${$.escapeSelector(tooltipId)}`,
            null,
            '<div class="text-danger float-left ml-1"><i id="{tooltip_id}" class="fal fa-exclamation-triangle mr-1"></i>{text}</div>',
            {'text': 'Conflict', 'tooltip_id': tooltipId},
        );
        cardEl.find('.totp-section').after(totpWarning.render());
        cardWidgets.set('totp', totpWarning);

        let authWarning = new Widget(
            WARNING_WIDGET_TEMPLATE,
            {'text': 'The selected authentication system is in conflict with some of the selected settings.'}
        );
        cardEl.find('.as-card-body').prepend(authWarning.render());
        cardWidgets.set('auth', authWarning);

        cardEl.data('warning-widgets', cardWidgets);
    }

    for ([name, widget] of cardWidgets) {
        widget.show('fadeIn');
    }
}

function hideTOTPandAuthRelatedWarningsinCard(name) {
    const cardWidgets = $(getCardSelector(name)).data('warning-widgets');
    if (cardWidgets) {
        for ([name, widget] of cardWidgets) {
            widget.hide('fadeOut');
        }
    }
}

function showOrHideTOTPandAuthRelatedWarningsinCard() {
    const name = $(this).closest('tr').attr('id').replace('-card', '');
    const checker = () => shouldShowTOTPandAuthWarnings(name);
    const showFunc = () => showTOTPandAuthRelatedWarningsinCard(name);
    const hideFunc = () => hideTOTPandAuthRelatedWarningsinCard(name);

    showOrHideTOTPandAuthWarningAsNeeded(checker, showFunc, hideFunc);
}

function showTOTPandAuthWarningForGroupCombobox($anchorElement, tooltipId, widgetTemplate) {
    let widget = $anchorElement.data('warning-widget');

    if(!widget) {
        widget = new WidgetWithTooltip(
            ('Using the settings from this group may result in TOTP MFA being enabled for either SAML or PAS-only '
             + 'authenticated users, which is not supported'),
            `#${$.escapeSelector(tooltipId)}`,
            null,
            widgetTemplate,
            {'text': WIDGET_TEXT, 'tooltip_id': tooltipId},
        );
        $anchorElement.after(widget.render());
        $anchorElement.data('warning-widget', widget);
    }
    widget.show('fadeIn');
}

function hideTOTPandAuthWarningForGroupCombobox($anchorElement) {
    let widget = $anchorElement.data('warning-widget');

    if (widget) {
        widget.hide('fadeOut');
    }
}

function showOrHideTOTPandAuthWarningAsNeeded(checker, showFunc, hideFunc) {
    if (checker()) {
        showFunc();
    } else {
        hideFunc();
    }
}
