import { Rune } from './Rune';

/**
 * Summoners War Monster
 */
export class Monster {

    public static monstersNames: SWMonstersNames;

    private data: SWMonsterData;
    private runes: Rune[];

    public constructor(monsterData: SWMonsterData) {
        this.data = monsterData;
        this.runes = [];

        for (const rune of this.data.runes) {
            this.runes.push(new Rune(rune, this));
        }
    }

    public get Name(): string {
        return Monster.monstersNames[this.data.unit_master_id];
    }

    public get Id(): number {
        return this.data.unit_id;
    }

    public get Level(): number {
        return this.data.unit_level;
    }

    public get Element(): Element {
        return Element[this.data.attribute];
    }

    public get Runes(): Rune[] {
        return this.runes;
    }

}
