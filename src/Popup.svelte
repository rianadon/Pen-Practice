<script>
 export let name
 export let visible
 export let id
</script>
<div class="popup-container">
    <button class="flex no-disp-small"
            on:click={e=> visible = (visible === id) ? -1 : id}>
        {name}
        <svg width="20" height="16" viewBox="0 0 20 16">
            <path d="M3.6 1H16.3944C18 1 18.9446 2.78029 18 4.1094L11.6641 13.7C10.8725 14.8885 9.12754 14.8885 8.3359 13.7L1.94145 4.1C1 2.78029 2 1 3.6 1Z" fill="url(#dark)" stroke="black" stroke-width="2"/>
        </svg>
    </button>
    <div class="center-popup" class:hide={visible !== id}>
        <div class="popup shadowed flex">
            <slot></slot>
        </div>
    </div>
</div>
