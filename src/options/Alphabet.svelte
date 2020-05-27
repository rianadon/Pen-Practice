<script context="module">
 const lowercase = 'abcdefghijklmnopqrstuvwxyz'
 const uppercase = lowercase.toUpperCase()
 const numerals = '1234567890 1234567890'
 export const defaultAlphabets = [uppercase, lowercase]

 const nonCustom = [lowercase, uppercase, numerals]
 export function describe(alphabets) {
     const hasCustom = alphabets.some(a => !nonCustom.includes(a))
     if (hasCustom) return 'Custom'
     if (alphabets[0] == numerals && alphabets.length == 1) return 'Numerals'
     if (alphabets.includes(numerals)) return 'Alphanum'
     return 'Alphabet'
 }
</script>

<script>
 export let alphabets
 let custom = 'custom woo'

 function updateCustom(e) {
     if (e.target.checked) {
         custom = prompt('Enter custom text to use')
     }
 }
</script>
<fieldset>
    <legend>Alphabet</legend>
    <label>
        <input type="checkbox" bind:group={alphabets} value={uppercase} />
        <span>Uppercase</span>
    </label>
    <label>
        <input type="checkbox" bind:group={alphabets} value={lowercase} />
        <span>Lowercase</span>
    </label>
    <label>
        <input type="checkbox" bind:group={alphabets} value={numerals} />
        <span>Numerals</span>
    </label>
    <label>
        <input type="checkbox" value={custom} on:change={updateCustom}
               bind:group={alphabets} />
        <span>Custom</span>
    </label>
</fieldset>
