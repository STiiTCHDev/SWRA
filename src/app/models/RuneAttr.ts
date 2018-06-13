import {Attribute} from './Stats';

export class RuneAttr {
    Type: Attribute;
    Value: number;

    constructor(type: Attribute, value: number) {
        this.Type = type;
        this.Value = value;
    }

    get TypeName(): string {
        return Attribute[this.Type];
    }
}
