<script lang="ts">
    import { 
        d4s, d6s, d8s, d10s, d12s, d20s,
        d4sResult, d6sResult, d8sResult, d10sResult, d12sResult, d20sResult,
        grandTotal,
     } from "../stores";
    
    function handleClick(){
        grandTotal.set(0);

        let d4Rolls = new Array<number>(); 
        for (let i = 0; i < $d4s; i++){
            d4Rolls.push(rollDie(4));
            let d4Total = d4Rolls.reduce((partialSum, a) => partialSum + a, 0);
            $d4sResult = {total: d4Total, rolls: d4Rolls}
        }

        let d6Rolls = new Array<number>(); 
        for (let i = 0; i < $d6s; i++){
            d6Rolls.push(rollDie(6));
            let d6Total = d6Rolls.reduce((partialSum, a) => partialSum + a, 0);
            $d6sResult = {total: d6Total, rolls: d6Rolls}
        }

        let d8Rolls = new Array<number>(); 
        for (let i = 0; i < $d8s; i++){
            d8Rolls.push(rollDie(8));
            let d8Total = d8Rolls.reduce((partialSum, a) => partialSum + a, 0);
            $d8sResult = {total: d8Total, rolls: d8Rolls}
        }

        let d10Rolls = new Array<number>(); 
        for (let i = 0; i < $d10s; i++){
            d10Rolls.push(rollDie(10));
            let d10Total = d10Rolls.reduce((partialSum, a) => partialSum + a, 0);
            $d10sResult = {total: d10Total, rolls: d10Rolls}
        }

        let d12Rolls = new Array<number>(); 
        for (let i = 0; i < $d12s; i++){
            d12Rolls.push(rollDie(12));
            let d12Total = d12Rolls.reduce((partialSum, a) => partialSum + a, 0);
            $d12sResult = {total: d12Total, rolls: d12Rolls}
        }

        let d20Rolls = new Array<number>(); 
        for (let i = 0; i < $d20s; i++){
            d20Rolls.push(rollDie(20));
            let d20Total = d20Rolls.reduce((partialSum, a) => partialSum + a, 0);
            $d20sResult = {total: d20Total, rolls: d20Rolls}
        }

        $grandTotal = $d4sResult.total + $d6sResult.total + $d8sResult.total + $d10sResult.total + $d12sResult.total + $d20sResult.total;
    }

    function rollDie(sides: number): number {
        let rollResult = Math.floor(Math.random() * sides) + 1;
        return rollResult;
    }
</script>

<button on:click={handleClick}>
    Roll!
</button>

<style>
    button {
        width: 100%;
        height: 3rem;
        font-size: xx-large;
        color: white;
        background-color: #b58900;
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