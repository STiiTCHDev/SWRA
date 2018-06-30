import {RuneAttr} from './RuneAttr';
import {RuneSet} from './enums/RuneSet';
import {Monster} from './Monster';

/**
 * SW Rune class
 */
export class Rune {

    private data: SWRuneData;
    private owner: Monster;

    private main: RuneAttr;
    private innate: RuneAttr;
    private subs: RuneAttr[];

    /**
     * Constructor
     * @param runeData rune data
     * @param owner rune owner (monster)
     */
    public constructor(runeData: SWRuneData, owner: Monster = null) {
        this.data = runeData;

        this.main = new RuneAttr(runeData.pri_eff);

        if (this.data.prefix_eff[0]) {
            this.innate = new RuneAttr(runeData.prefix_eff);
        } else { this.innate = null; }

        this.subs = [];
        for (const sub of runeData.sec_eff) {
            this.Subs.push(new RuneAttr(sub));
        }

        if (owner !== undefined) {
            this.owner = owner;
        }
    }

    /**
     * Rune id
     * @returns id
     */
    public get Id(): number {
        return this.data.rune_id;
    }

    /**
     * Rune assigned id (corresponding to monster owner id)
     * @returns assigned id
     */
    public get AssignedId(): number {
        return this.data.occupied_id;
    }

    /**
     * Check if rune is assigned to a monster
     * @returns is assigned
     */
    public get IsAssigned(): boolean {
        return this.data.occupied_id !== 0;
    }

    /**
     * Rune slot
     * @returns slot number
     */
    public get Slot(): number {
        return this.data.slot_no;
    }

    /**
     * Rune set type name
     * @returns set type name
     */
    public get SetTypeName(): string {
        return RuneSet[this.data.set_id];
    }

    /**
     * Rune grade (star number)
     * @returns grade
     */
    public get Grade(): number {
        return this.data.class;
    }

    /**
     * Rune level (upgrade state)
     * @returns level
     */
    public get Level(): number {
        return this.data.upgrade_curr;
    }

    /**
     * Rune rarity (color)
     * @returns rarity
     */
    public get Rarity(): number {
        return this.Subs.length;
    }

    /**
     * Rune monster owner
     * @returns owner monster
     */
    public get Owner(): Monster {
        if (this.owner !== undefined) {
            return this.owner;
        }

        return null;
    }

    /**
     * Rune main attribute
     * @returns main attribute
     */
    public get Main(): RuneAttr {
        return this.main;
    }

    /**
     * Rune innate attribute
     * @returns innate attribute
     */
    public get Innate(): RuneAttr {
        return this.innate;
    }

    /**
     * Rune subs attributes array
     * @returns subs attributes
     */
    public get Subs(): RuneAttr[] {
        return this.subs;
    }
}
