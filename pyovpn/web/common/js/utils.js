function renderTemplate(template, values) {
    for (const [name, text] of Object.entries(values)) {
        template = template.replaceAll(`{${name}}`, text);
    }
    return template;
}

