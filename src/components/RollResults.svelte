<script>
    import { grandTotal, d4sResult, d6sResult, d8sResult, d10sResult, d12sResult, d20sResult } from "../stores";
</script>

<div>
    <p>
        {#if $d4sResult.total !== 0}
            {$d4sResult.rolls.length}D4: {$d4sResult.rolls}
        {/if}
        
        {#if $d6sResult.total !== 0}
            {$d6sResult.rolls.length}D6: {$d6sResult.rolls}
        {/if}
        
        {#if $d8sResult.total !== 0}
            {$d8sResult.rolls.length}D8: {$d8sResult.rolls}
        {/if}
        
        {#if $d10sResult.total !== 0}
            {$d10sResult.rolls.length}D10: {$d10sResult.rolls}
        {/if}
        
        {#if $d12sResult.total !== 0}
            {$d12sResult.rolls.length}D12: {$d12sResult.rolls}
        {/if}
        
        {#if $d20sResult.total !== 0}
            {$d20sResult.rolls.length}D20: {$d20sResult.rolls}
        {/if}
    </p>
    <p>
    {#if $grandTotal !== 0}
        TOTAL: {$grandTotal}
    {/if}
    </p>
</div>

<style>
    div {
        font-size: x-large;
    }

</style>