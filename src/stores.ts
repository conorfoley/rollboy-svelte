import { writable, derived } from "svelte/store";

export const diceInTray = writable(new Array<number>());

export const d4s = derived(diceInTray, $diceInTray => {
    let count = 0;
    count = $diceInTray.filter(d => d === 4).length;
    return count;
});

export const d6s = derived(diceInTray, $diceInTray => {
    let count = 0;
    count = $diceInTray.filter(d => d === 6).length;
    return count;
});

export const d8s = derived(diceInTray, $diceInTray => {
    let count = 0;
    count = $diceInTray.filter(d => d === 8).length;
    return count;
});

export const d10s = derived(diceInTray, $diceInTray => {
    let count = 0;
    count = $diceInTray.filter(d => d === 10).length;
    return count;
});

export const d12s = derived(diceInTray, $diceInTray => {
    let count = 0;
    count = $diceInTray.filter(d => d === 12).length;
    return count;
});

export const d20s = derived(diceInTray, $diceInTray => {
    let count = 0;
    count = $diceInTray.filter(d => d === 20).length;
    return count;
});

export const d4sResult = writable({ total: 0, rolls: new Array<number>() });
export const d6sResult = writable({ total: 0, rolls: new Array<number>() });
export const d8sResult = writable({ total: 0, rolls: new Array<number>() });
export const d10sResult = writable({ total: 0, rolls: new Array<number>() });
export const d12sResult = writable({ total: 0, rolls: new Array<number>() });
export const d20sResult = writable({ total: 0, rolls: new Array<number>() });

export const grandTotal = writable(0);