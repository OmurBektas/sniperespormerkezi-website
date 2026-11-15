export function withoutStandardSystem(systems) {
    return systems.filter(system =>
        system.titleTR?.trim().toUpperCase() !== 'STANDART' &&
        system.titleEN?.trim().toUpperCase() !== 'STANDARD'
    );
}
