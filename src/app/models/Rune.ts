/**
 * Summoners War Rune
 */

import {RuneAttr} from './RuneAttr';
import {RuneSet} from './RuneSet';

export class Rune {

    private _data: SWRuneData;

    public Main: RuneAttr;
    public Innate: RuneAttr;
    public Subs: RuneAttr[];

    public constructor(runeData: SWRuneData) {
        this._data = runeData;

        this.Main = new RuneAttr(runeData.pri_eff);

        if (this._data.prefix_eff[0]) {
            this.Innate = new RuneAttr(runeData.prefix_eff);
        } else { this.Innate = null; }

        this.Subs = [];
        for (const sub of runeData.sec_eff) {
            this.Subs.push(new RuneAttr(sub));
        }
    }

    public get Id(): number {
        return this._data.rune_id;
    }

    public get AssignedId(): number {
        return this._data.occupied_id;
    }

    public get Slot(): number {
        return this._data.slot_no;
    }

    /**
     * Rune Set type name
     */
    public get SetName(): string {
        return RuneSet[this._data.set_id];
    }

    /**
     * Rune Grade (star number)
     */
    public get Grade(): number {
        return this._data.class;
    }

    /**
     * Rune upgrade level
     */
    public get Level(): number {
        return this._data.upgrade_curr;
    }

    /**
     * Rune Rarity (color)
     */
    public get Rarity(): number {
        return this.Subs.length;
    }
}
