/**
 * Summoners War Rune
 */
import {RuneAttr} from './RuneAttr';
import {RuneSet} from './enums/RuneSet';
import {Monster} from './Monster';


export class Rune {

    /**
     * Raw Rune data
     */
    private _data: SWRuneData;

    /**
     * Monster owner
     */
    private _owner: Monster;

    /**
     * Rune Main attribute
     */
    public Main: RuneAttr;

    /**
     * Rune Innate attribute
     */
    public Innate: RuneAttr;

    /**
     * Rune Subs attributes array
     */
    public Subs: RuneAttr[];

    public constructor(runeData: SWRuneData, owner: Monster = null) {
        this._data = runeData;

        this.Main = new RuneAttr(runeData.pri_eff);

        if (this._data.prefix_eff[0]) {
            this.Innate = new RuneAttr(runeData.prefix_eff);
        } else { this.Innate = null; }

        this.Subs = [];
        for (const sub of runeData.sec_eff) {
            this.Subs.push(new RuneAttr(sub));
        }

        if (owner !== undefined) {
            this._owner = owner;
        }
    }

    public get Id(): number {
        return this._data.rune_id;
    }

    public get AssignedId(): number {
        return this._data.occupied_id;
    }

    public get IsAssigned(): boolean {
        return this._data.occupied_id !== 0;
    }

    public get Slot(): number {
        return this._data.slot_no;
    }

    /**
     * Rune Set type name
     */
    public get SetTypeName(): string {
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

    public get Owner(): Monster {
        if (this._owner !== undefined) {
            return this._owner;
        }

        return null;
    }
}
