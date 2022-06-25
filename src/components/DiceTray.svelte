<script lang="ts">
    import { each } from "svelte/internal";
    import DiceContainer from "./DiceContainer.svelte";
    import { 
        diceInTray,
        d4sResult, d6sResult, d8sResult, d10sResult, d12sResult, d20sResult,
        grandTotal

     } from "../stores";

    function removeDieFromTray(index: number): void {
        $diceInTray = $diceInTray.filter((v, i) => i !== index);
        d4sResult.set({total: 0, rolls: []});
        d6sResult.set({total: 0, rolls: []});
        d8sResult.set({total: 0, rolls: []});
        d10sResult.set({total: 0, rolls: []});
        d12sResult.set({total: 0, rolls: []});
        d20sResult.set({total: 0, rolls: []});
        grandTotal.set(0);
    }

</script>

<div>
    {#if $diceInTray.length === 0}
        <p>Tap the dice to get started...</p>
        
    {/if}
    {#each $diceInTray as die, index}
        {#key $diceInTray}
            <DiceContainer sides={die} onClick={() => removeDieFromTray(index)}/>
        {/key}
    {/each}
</div>

<style>
    div{
        display: flex;
        flex-wrap: wrap;
    }

</style>