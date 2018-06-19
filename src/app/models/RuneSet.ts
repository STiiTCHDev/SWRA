/**
 * Types of runes sets enum
 */
export enum RuneSet {
    Null = 0, // No Set

    Energy, // Health
    Guard, // Def
    Swift, // Speed
    Blade, // CRate
    Rage, // CDmg
    Focus, // Acc
    Endure, // Res
    Fatal, // Attack

    __unknown9,

    // Here be magic
    Despair,
    Vampire,

    __unknown12,

    Violent,
    Nemesis,
    Will,
    Shield,
    Revenge,
    Destroy,

    // Ally sets
    Fight,
    Determination,
    Enhance,
    Accuracy,
    Tolerance,

    Broken
}
