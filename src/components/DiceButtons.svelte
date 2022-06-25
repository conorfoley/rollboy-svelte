<script lang="ts">
    import DiceContainer from "./DiceContainer.svelte";
    import { diceInTray, grandTotal, d4sResult, d6sResult, d8sResult, d10sResult, d12sResult, d20sResult } from '../stores';

    function addDie(s: number) : void {
        $diceInTray = [...$diceInTray, s];
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
    <DiceContainer sides={4} onClick={() => addDie(4)}/>
    <DiceContainer sides={6} onClick={() => addDie(6)}/>
    <DiceContainer sides={8} onClick={() => addDie(8)}/>
    <DiceContainer sides={10} onClick={() => addDie(10)}/>
    <DiceContainer sides={12} onClick={() => addDie(12)}/>
    <DiceContainer sides={20} onClick={() => addDie(20)}/>
</div>

<style>
    div {
        display: flex;
        background-color: black;
    }
</style>