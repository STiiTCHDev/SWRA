/**
 * Summoners War Rune
 */

import {RuneAttr} from './RuneAttr';
import {Attribute} from './Stats';
import {RuneSet} from './RuneSet';

export class Rune {

    private _data: SWRuneData;

    Main: RuneAttr;
    Innate: RuneAttr;
    Subs: RuneAttr[];

    constructor(runeData: SWRuneData) {
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

    get Id(): number {
        return this._data.rune_id;
    }

    get AssignedId(): number {
        return this._data.occupied_id;
    }

    get Slot(): number {
        return this._data.slot_no;
    }

    get SetName(): string {
        return RuneSet[this._data.set_id];
    }

    get Grade(): number {
        return this._data.class;
    }

    get Level(): number {
        return this._data.upgrade_curr;
    }
}
