import { Rune } from './Rune';

/**
 * SW Monster class
 */
export class Monster {

    public static monstersNames: SWMonstersNames;

    private data: SWMonsterData;
    private runes: Rune[];

    /**
     * Constructor
     * @param monsterData monster data
     */
    public constructor(monsterData: SWMonsterData) {
        this.data = monsterData;
        this.runes = [];

        for (const rune of this.data.runes) {
            this.runes.push(new Rune(rune, this));
        }
    }

    /**
     * Monster name
     * @returns monster name
     */
    public get Name(): string {
        return Monster.monstersNames[this.data.unit_master_id];
    }

    /**
     * Monster id
     * @returns monster id
     */
    public get Id(): number {
        return this.data.unit_id;
    }

    /**
     * Monster level
     * @returns monster level
     */
    public get Level(): number {
        return this.data.unit_level;
    }

    /**
     * Monster element
     * @returns monster element
     */
    public get Element(): Element {
        return Element[this.data.attribute];
    }

    /**
     * Monster runes array
     * @returns monster runes
     */
    public get Runes(): Rune[] {
        return this.runes;
    }

}
