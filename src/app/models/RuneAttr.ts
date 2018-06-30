import {Attribute} from './enums/Stats';

/**
 * SW Rune Attribute class
 */
export class RuneAttr {

    private type: Attribute;
    private value: number;
    private enchanted: number;
    private grindBonus: number;

    /**
     * Constructor
     * @param attrProperties rune attribute property array (data) 
     */
    public constructor(attrProperties: [number]) {
        this.type = attrProperties[0];
        this.value = attrProperties[1];
        this.enchanted = -1;
        this.grindBonus = -1;

        if (attrProperties[2] !== undefined) {
            this.enchanted = attrProperties[2];
        }

        if (attrProperties[3] !== undefined) {
            this.grindBonus = attrProperties[3];
        }
    }

    /**
     * Rune attribute type
     * @returns attribute type
     */
    public get Type(): Attribute {
        return this.type;
    }

    /**
     * Rune attribute type name
     * @returns attribute type name
     */
    public get TypeName(): string {
        return Attribute[this.type];
    }

    /**
     * Rune attribute value
     * @returns attribute value
     */
    public get Value(): number {
        return this.value + (this.grindBonus > 0 ? this.grindBonus : 0);
    }

    /* Not required to provide ability to modify a rune at this moment.
    public set Value(value: number) {
        this.value = value;
        this.grindBonus = 0;
    }*/

    /**
     * Rune attribute enchanted value
     * @returns attribute enchanted value
     */
    public get Enchanted(): number {
        return this.enchanted;
    }

    /**
     * Check if attribute is enchanted
     * @returns is enchanted
     */
    public get IsEnchanted(): boolean {
        return this.enchanted === 1;
    }

    /**
     * Rune attribute grind bonus
     * @returns attribute grind bonus
     */
    public get GrindBonus(): number {
        return this.grindBonus;
    }

    /**
     * Check  if attribute is grinded
     * @returns attribute type name
     */
    public get IsGrinded(): boolean {
        return this.grindBonus > 0;
    }

    /**
     * Format attribute data to display
     * @returns attribute type name + value (string)
     */
    public toString(): string {
        return this.TypeName + ' +' + this.Value;
    }

}
