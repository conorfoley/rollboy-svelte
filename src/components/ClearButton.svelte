<script lang="ts">
    import { 
        diceInTray, grandTotal,
        d4sResult, d6sResult, d8sResult, d10sResult, d12sResult, d20sResult,
     } from "../stores";

    function handleClick(){
        d4sResult.set({total: 0, rolls: []});
        d6sResult.set({total: 0, rolls: []});
        d8sResult.set({total: 0, rolls: []});
        d10sResult.set({total: 0, rolls: []});
        d12sResult.set({total: 0, rolls: []});
        d20sResult.set({total: 0, rolls: []});
        grandTotal.set(0);
        diceInTray.set([]);
    }
</script>

<button on:click={handleClick}>
    Clear
</button>

<style>
    button {
        width: 100%;
        height: 3rem;
        font-size: xx-large;
        color: white;
        background-color: #303030;
        border: none;
        transition: all .1337s ease-in-out;
        font-family: inherit
    }
    button:hover{
        filter: brightness(1.1);
    }
    button:active {
        transform: scale(1.04);
        border-radius: 1rem;
    }
</style>