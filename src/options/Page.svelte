<script context="module">
 const A4 = [210, 297]
 const A5 = [148, 210]
 const A6 = [105, 148]
 const LEGAL = [216, 356]
 const LETTER = [216, 279]

 export const defaultPageSize = LETTER
 export const defaultMargin = 25
</script>
<script>
 export let pageSize
 export let numPages
 export let numCols
 export let margin

 const id = Math.floor(Math.random() * 10000)

 let custom = [100, 100]
 function updateCustom(e) {
     if (e.target.checked) {
         const width = parseFloat(prompt('Enter the width of your page in inches'))
         const height = parseFloat(prompt('Enter the height of your page in inches'))
         console.log(width, height)
         if (!isNaN(width) && !isNaN(height)) {
             custom = [25.4 * width, 25.4 * height]
         }
     }
 }
</script>
<div>
    <fieldset>
        <legend>Page Type</legend>
        <label>
            <input type="radio" bind:group={pageSize} value={A4} />
            <span>A4</span>
        </label>
        <label>
            <input type="radio" bind:group={pageSize} value={A5} />
            <span>A5</span>
        </label>
        <label>
            <input type="radio" bind:group={pageSize} value={A6}/>
            <span>A6</span>
        </label>
        <label>
            <input type="radio" bind:group={pageSize} value={LETTER}/>
            <span>Letter</span>
        </label>
        <label>
            <input type="radio" bind:group={pageSize} value={LEGAL}/>
            <span>Legal</span>
        </label>
        <label>
            <input type="radio" value={custom} on:change={updateCustom}
                   bind:group={pageSize} />
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
