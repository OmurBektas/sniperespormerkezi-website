export function archiveDate(value) {
    const text = String(value || '').trim();
    const local = text.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
    if (local) return Date.UTC(Number(local[3]), Number(local[2]) - 1, Number(local[1]));
    return Date.parse(text) || 0;
}

export function isFirstTournament(item) {
    return archiveDate(item.date) === Date.UTC(2026, 2, 8)
        || /8\s+mart\s+2026/i.test(item.title || '')
        || item.folderName === '8-mart-2026';
}

export function archiveMediaUrl(path) {
    if (typeof path !== 'string' || !path.trim()) return '';
    try {
        const url = new URL(path.trim(), document.baseURI);
        return ['https:', 'http:', 'file:'].includes(url.protocol) ? url.href.replaceAll('"', '%22') : '';
    } catch {
        return '';
    }
}

export function escapeArchiveText(value) {
    const node = document.createElement('span');
    node.textContent = String(value ?? '');
    return node.innerHTML;
}
