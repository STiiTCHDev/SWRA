import {Attribute} from './Stats';

export class RuneAttr {

    Type: Attribute;
    private value: number;
    Enchanted: number;
    GrindBonus: number;

    constructor(attrProperties: [number]) {
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

    get TypeName(): string {
        return Attribute[this.Type];
    }

    get Value(): number {
        return this.value + (this.GrindBonus > 0 ? this.GrindBonus : 0);
    }

    set Value(value: number) {
        this.value = value;
        this.GrindBonus = 0;
    }

    get IsEnchanted(): boolean {
        return this.Enchanted === 1;
    }

    get IsGrinded(): boolean {
        return this.GrindBonus > 0;
    }

    toString(): string {
        return this.TypeName + ' +' + this.Value;
    }

}
