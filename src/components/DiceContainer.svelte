<script lang="ts">
    export let sides = 0;
    let src = `images/d${sides}.svg`;
    export let onClick = () => {};
</script>

<button on:click={onClick}>
   <img {src} alt="{sides} sided die" />
</button>

<style>
    button {
        transition: all .1337s ease-in-out;
        background-color: transparent;
        padding: .25rem;
        width: 16.66%;
        border: none;
    }
    button:hover{
        transform: scale(1.1);
        border-radius: 1rem;
    }
    button:active {
        transform: scale(1.337);
    }
    img {
        background-color: transparent;
    }
</style>

