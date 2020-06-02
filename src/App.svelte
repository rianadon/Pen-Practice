<script>
 import { fade, fly } from 'svelte/transition';
 import { maxFonts, clean, variant, stylesheet, style, fontSize } from './fonts'
 import { recheck, defaultWidth } from './fontchecker'
 import Popup from './Popup.svelte'
 import AlphabetSettings, { defaultAlphabets, describe } from './options/Alphabet.svelte'
 import FontSettings, { defaultStyles, defaultWeights } from './options/Font.svelte'
 import PageSettings, { defaultPageSize, defaultMargin } from './options/Page.svelte'

 let visiblePopup = -1
 let sidevisible = false

 // Properties controlled by input and select elements
 let alphabets = defaultAlphabets
 let styles = defaultStyles
 let weights = defaultWeights
 let sort = 'popularity'
 let preferVariant = 'thin'
 let pageSize = defaultPageSize
 let numPages = 3
 let numCols = 2
 let margin = defaultMargin

 // Maintain the sorts that have already been fetched
 // Allows for more aggressive caching when it comes time to download
 let sortcache = new Set()

 let maxWidth = defaultWidth
 let fetchedFonts = []
 $: document.body.style.overflow = sidevisible ? 'hidden' : null
 $: nicebets = alphabets.length ? alphabets : defaultAlphabets

 $: fonts = fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBJybYSm5NLrsS7pzp1Pf0LrX62k2E8_Ns&sort=' + sort, {
     referrerPolicy: 'no-referrer',
     mode: 'cors',
     cache: sortcache.has(sort) ? 'force-cache' : 'default'
 })
     .then(res => res.json())
     .then(res => fetchedFonts = clean(res.items))
     .then(() => waitForLoad())

 $: filteredFonts = fetchedFonts.filter(font => {
     return (styles.length ? styles : defaultStyles).includes(font.category)
         && font.variants.some(f => weights.includes(f))
 })
 $: sortcache.add(sort)
 $: numFonts = filteredFonts.length
 $: numChosen = maxFonts(alphabets.length, pageSize, margin, numCols, numPages)
 $: chosenFonts = filteredFonts.slice(0, numChosen)
 $: recheck(chosenFonts, alphabets, width => maxWidth = width)
 $: if (numFonts < numChosen)  {
     for (let i = 0; i < (numCols - numFonts % numCols) % numCols; i++) {
         chosenFonts.push({
             family: 'Extra font #'+(i+1),
             variants: [100, 200, 300, 400, 500],
         })
     }
 }

 function waitForLoad() {
     if (document.readyState === 'complete') return Promise.resolve()
     return new Promise((resolve) => {
         const wait = () => {
             if (document.readyState === 'complete') setTimeout(resolve, 1000);
             else setTimeout(wait, 500)
         }
         wait()
     })
 }
</script>
{#if numCols > 2}
    <p><strong style="color: #d44">
        Using more than two columns may cut off text or print in a smaller font size. Make sure to preview your&nbsp;print!
    </strong></p>
{/if}
{#if sidevisible}
    <section class="sidebg" transition:fade
             on:click={e => sidevisible = false}></section>
    <section class="sidebar shadowed"
             transition:fly={{duration: 300, x: -250, opacity: 1}}>
        <AlphabetSettings bind:alphabets={alphabets} />
        <FontSettings bind:styles={styles} bind:weights={weights}
                      bind:sort={sort} bind:preferVariant={preferVariant} />
        <PageSettings bind:pageSize={pageSize} bind:numPages={numPages}
                      bind:numCols={numCols} bind:margin={margin} />
    </section>
{/if}
<section class="margined">
    <div class="flex buttons">
        <button class="flex disp-small" on:click={e=> sidevisible = !sidevisible}>
            Options
            <svg width="16" height="20" viewBox="0 0 16 20">
                <path d="M1 16.3944L1 3.6C1 2 2.78 1 4.1 2L13.7 8.336C14.8885 9.12754 14.8885 10.8725 13.7 11.6641L4.1094 18C2.78 19 1 18 1 16.3944Z" stroke="black" fill="url(#dark)" stroke-width="2"/>
            </svg>
        </button>
        <Popup name={describe(alphabets)} id="0" bind:visible={visiblePopup}>
            <AlphabetSettings bind:alphabets={alphabets} />
        </Popup>
        <Popup name={numFonts + ' Fonts'} id="1" bind:visible={visiblePopup}>
            <FontSettings bind:styles={styles} bind:weights={weights}
                          bind:sort={sort} bind:preferVariant={preferVariant} />
        </Popup>
        <Popup name={numPages + ' Pages'} id="2" bind:visible={visiblePopup}>
            <PageSettings bind:pageSize={pageSize} bind:numPages={numPages}
                          bind:numCols={numCols} bind:margin={margin} />
        </Popup>
        <button class="flex light" on:click={e => window.print()}>
            Print
            <svg width="27" height="24" viewBox="-1.5 -1.5 31 28" fill="none">
                <rect x="6" y="0" width="17" height="11" stroke="black" stroke-width="3" />
                <rect x="5" y="14" width="17" height="11" stroke="black" stroke-width="3" />
                <rect x="0" y="8" width="28" height="11" rx="1.5" fill="url(#dark)" stroke="black" stroke-width="3" />
            </svg>
        </button>
    </div>
</section>
<section class="fonts margined" style={`font-size: ${fontSize(maxWidth, pageSize[0], margin, numCols)}mm`}>
    {#await fonts}
        <!-- Loading screen -->
	    {#each Array(numChosen) as _}
            <div class="font">
                <div>Loading 000</div>
                <div class="fontline">{'░'.repeat(20)}</div>
                <div class="fontline blank">{'░'.repeat(20)}</div>
            </div>
        {/each}
    {:then resp}
	    {#each chosenFonts as font (font.family)}
            <div class="font" style={`width: ${100/numCols}%`}
                        data-weight={variant(font, preferVariant, weights)}>
                <div>{font.family} {variant(font, preferVariant, weights)}</div>
                {#each nicebets as text (text)}
                    <div class="fontline" style={style(font, preferVariant, weights)}>{text}</div>
                    <div class="fontline blank"style={style(font, preferVariant, weights)}>{text}</div>
                {/each}
                <link rel="stylesheet" href={stylesheet(font, preferVariant, weights)} />
            </div>
        {/each}
    {:catch error}
	    <p style="color: red">{error.message}</p>
    {/await}
</section>
