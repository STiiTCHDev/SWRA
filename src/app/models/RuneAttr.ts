import {Attribute} from './enums/Stats';

export class RuneAttr {

    public Type: Attribute;
    private value: number;
    public Enchanted: number;
    public GrindBonus: number;

    public constructor(attrProperties: [number]) {
        this.Type = attrProperties[0];
        this.value = attrProperties[1];
        this.Enchanted = -1;
        this.GrindBonus = -1;

        if (attrProperties[2] !== undefined) {
            this.Enchanted = attrProperties[2];
        }

        if (attrProperties[3] !== undefined) {
            this.GrindBonus = attrProperties[3];
        }
    }

    public get TypeName(): string {
        return Attribute[this.Type];
    }

    public get Value(): number {
        return this.value + (this.GrindBonus > 0 ? this.GrindBonus : 0);
    }

    public set Value(value: number) {
        this.value = value;
        this.GrindBonus = 0;
    }

    public get IsEnchanted(): boolean {
        return this.Enchanted === 1;
    }

    public get IsGrinded(): boolean {
        return this.GrindBonus > 0;
    }

    public toString(): string {
        return this.TypeName + ' +' + this.Value;
    }

}
