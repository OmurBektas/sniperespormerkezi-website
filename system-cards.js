export function visibleSystemCards(systems) {
    return systems.filter(system =>
        system.showOnSite === true || (
            system.titleTR?.trim().toUpperCase() !== 'STANDART' &&
            system.titleEN?.trim().toUpperCase() !== 'STANDARD'
        )
    );
}

export function escapeSystemText(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}
