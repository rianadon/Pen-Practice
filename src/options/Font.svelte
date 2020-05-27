<script context="module">
 export const defaultStyles = ['serif', 'sans-serif']
 export const defaultWeights = [100, 200, 300]
</script>
<script>
 export let styles
 export let weights
 export let sort
 export let preferVariant
</script>
<div>
    <fieldset>
        <legend>Styles</legend>
        <label>
            <input type="checkbox" bind:group={styles} value="serif" />
            <span>Serif</span>
        </label>
        <label>
            <input type="checkbox" bind:group={styles} value="sans-serif" />
            <span>Sans-Serif</span>
        </label>
        <label>
            <input type="checkbox" bind:group={styles} value="display" />
            <span>Display</span>
        </label>
        <label>
            <input type="checkbox" bind:group={styles} value="handwriting" />
            <span>Handwriting</span>
        </label>
        <label>
            <input type="checkbox" bind:group={styles} value="monospace" />
            <span>Monospace</span>
        </label>
    </fieldset>
    <div class="highlightable margintop">
        <select bind:value={sort}>
            <option value="alpha">Alphabetical</option>
            <option value="date">Recent First</option>
            <option value="popularity">Popular first</option>
            <option value="trending">Trending first</option>
        </select>
        <div class="highlight"></div>
    </div>
</div>
<div>
    <fieldset>
        <legend>Weights</legend>
        <label>
            <input type="checkbox" bind:group={weights} value={100} />
            <span>Thin</span>
        </label>
        <label>
            <input type="checkbox" bind:group={weights} value={200} />
            <span>Extra Light</span>
        </label>
        <label>
            <input type="checkbox" bind:group={weights} value={300} />
            <span>Light</span>
        </label>
        <label>
            <input type="checkbox" bind:group={weights} value={400} />
            <span>Regular</span>
        </label>
        <label>
            <input type="checkbox" bind:group={weights} value={500} />
            <span>Medium</span>
        </label>
    </fieldset>
    <div class="highlightable margintop">
        <select bind:value={preferVariant}>
            <option value="fat">Show thick</option>
            <option value="thin">Show thin</option>
        </select>
        <div class="highlight"></div>
    </div>
</div>
