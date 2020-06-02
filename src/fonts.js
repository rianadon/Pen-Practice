import { defaultWidth} from './fontchecker'

/** Determins the height of a block of fonts */
function blockHeight(nAlphabets, fontSize) {
    return (fontSize*1.5 + 0.6) * 2*nAlphabets + fontSize*1.5 + 2.4
}

/** Determines the number of fonts that should be displayed */
export function maxFonts(nAlphabets, size, margin, cols, pages) {
    const [width, height] = size
    cols = Math.max(cols, 1) || 1
    pages = Math.max(pages, 1) || 1
    const blockh = blockHeight(nAlphabets, fontSize(defaultWidth, width, margin, cols))
    return Math.floor( (height-margin) / blockh) * cols * pages
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

export function fontSize(width, pageWidth, margin, columns) {
    return ((pageWidth - margin) / columns - 2.4) / width
}
