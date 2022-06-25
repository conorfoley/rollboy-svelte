<script lang="ts">
    import ClearButton from "./ClearButton.svelte";
    import DiceButtons from "./DiceButtons.svelte";
    import DiceTray from "./DiceTray.svelte";
    import RollButton from "./RollButton.svelte";
    import RollResults from "./RollResults.svelte";
</script>

<div>
    <DiceButtons/>
    <RollButton/>
    <ClearButton/>
    <DiceTray/>
    <RollResults/>
</div>

<style>
    div {
        height: 100vh;
        max-width: 64em;
        margin: 0 auto;
        padding: 0;
        background-color: #6c71c4;
        @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
        font-family: 'Source Code Pro', monospace;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>