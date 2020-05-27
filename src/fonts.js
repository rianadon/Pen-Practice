 const FONT_HEIGHT = 40 // a font takes up 4 cm of vertical height

export function pageSize(height, margin, cols, pages) {
    cols = Math.max(cols, 1) || 1
    pages = Math.max(pages, 1) || 1
    return Math.floor( (height-margin) / FONT_HEIGHT) * cols * pages
}

export function clean(fonts) {
    return fonts.map(font => ({
        ...font,
        variants: font.variants.filter(v => !v.includes('italic')).map(variant => {
            if (variant == 'regular') return 400
            return parseInt(variant)
        })
    }))
}

export function variant(font, preferVariant, weights) {
    const matching = font.variants.filter(f => weights.includes(f))
    if (preferVariant === 'fat') return matching[matching.length - 1]
    return matching[0]
}

export function stylesheet(font, preferVariant, weights) {
    return 'https://fonts.googleapis.com/css?family='+encodeURIComponent(font.family) + ':' + variant(font, preferVariant, weights)
}

export function style(font, preferVariant, weights) {
    const weight = variant(font, preferVariant, weights)
    return [
        `font-family: "${font.family}"`,
        `font-weight: ${weight}`,
    ].join(';')
}
