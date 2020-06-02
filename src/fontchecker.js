/**
 * Module for checking when new fonts are loaded
 * and recomputing their widths when things change
 */

let checkerTimeout
const sizeTable = new Map()
export const defaultWidth = 19
let maxSize = defaultWidth
const bodyFont = 'Arima Madurai'

// Arbitrary - the font size at which fonts
// are drawn onto a canas for measuring.
const RENDER_SIZE = 12

// Interaval to check for new fonts
const CHECK_TIMEOUT = 1000

// Set up canvas for measuring text
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const BASE = 'serif' // base font; assume we never load this font
const BASE_STR = 'ABCDEFG123456❀😀ʘ‿ʘ'

function fontStr(font, size) {
    return `${size}px "${font}"`
}

/** Returns width of str in font  as a multiple of font size */
function fontWidth(font, str) {
    ctx.font = fontStr(font, RENDER_SIZE)
    return ctx.measureText(str).width / RENDER_SIZE
}

function alphabetWidth(font, alphabets) {
    return Math.max(...alphabets.map(a => fontWidth(font, a)))
}

function isLoaded(font) {
    try {
        return document.fonts.check(fontStr(font, RENDER_SIZE))
    } catch (e) {
        // If FontSet API not available, fall back to using canvas
        if (font == bodyFont) return true;
        if (!sizeTable.has(BASE)) {
            sizeTable.set(BASE, fontWidth(BASE, BASE_STR))
        }
        return fontWidth(font, BASE_STR) != sizeTable.get(BASE)
    }
}

function check(fonts, alphabets, onMaxUpdate) {
    let max = 0
    let allLoaded = true
    const not = []
    for (const fontObj of fonts) {
        const font = fontObj.family
        if (sizeTable.has(font)) continue
        if (!isLoaded(font)) {
            allLoaded = false
            not.push(font)
            continue
        }
        console.log('-', font)
        const size = alphabetWidth(font, alphabets)
        sizeTable.set(font, size)
        if (size > max) max = size
    }
    if (max > maxSize) {
        maxSize = max
        onMaxUpdate(maxSize)
    }
    if (!allLoaded) {
        console.log('Some fonts not yet loaded:', not.join(', '))
        checkerTimeout = setTimeout(check, CHECK_TIMEOUT, fonts,
                                    alphabets, onMaxUpdate)
    }
}

export function recheck(fonts, alphabets, onMaxUpdate) {
    console.log('Font recheck')
    maxSize = defaultWidth
    sizeTable.clear()
    clearTimeout(checkerTimeout)
    checkerTimeout = setTimeout(check, CHECK_TIMEOUT, fonts,
                                alphabets, onMaxUpdate)
}
