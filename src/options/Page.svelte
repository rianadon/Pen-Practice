<script context="module">
 export const defaultPageHeight = 279
</script>
<script>
 export let pageHeight
 export let numPages
 export let numCols
 export let margin

 const id = Math.floor(Math.random() * 10000)

 let custom = defaultPageHeight - 1
 function updateCustom(e) {
     if (e.target.checked) {
         const inch = parseFloat(prompt('Enter the height of your page in inches'))
         if (!isNaN(inch)) custom = 25.4 * inch
     }
 }
</script>
<div>
    <fieldset>
        <legend>Page Type</legend>
        <label>
            <input type="radio" bind:group={pageHeight} value={297} />
            <span>A4</span>
        </label>
        <label>
            <input type="radio" bind:group={pageHeight} value={210} />
            <span>A5</span>
        </label>
        <label>
            <input type="radio" bind:group={pageHeight} value={148}/>
            <span>A6</span>
        </label>
        <label>
            <input type="radio" bind:group={pageHeight} value={279}/>
            <span>Letter</span>
        </label>
        <label>
            <input type="radio" bind:group={pageHeight} value={356}/>
            <span>Legal</span>
        </label>
        <label>
            <input type="radio" bind:group={pageHeight}
                         on:change={updateCustom} value={custom} />
            <span>Custom</span>
        </label>
    </fieldset>
</div>
<div>
    <label class="fieldset-label" for={'page'+id}>
        Pages
    </label>
    <div class="highlightable margin-normal">
        <input type="number" min="1" id={'page'+id} bind:value={numPages} />
        <div class="highlight"></div>
    </div>

    <label class="fieldset-label" for={'cols'+id}>
        Columns
    </label>
    <div class="highlightable margin-normal">
        <input type="number" min="1" id={'cols'+id} bind:value={numCols} />
        <div class="highlight"></div>
    </div>

    <label class="fieldset-label" for={'margins'+id}>
        Margins
    </label>
    <div class="highlightable margin-normal">
        <select id={'margins'+id} bind:value={margin}>
            <option value={50}>1 in</option>
            <option value={25}>.5 in</option>
            <option value={0}>No</option>
        </select>
        <div class="highlight"></div>
    </div>
</div>
