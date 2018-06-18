interface SWPlayerData {
    runes: SWRuneData[];
    unit_list: SWMonsterData[];
}

interface SWRuneData {
    // Slot
    slot_no: number;
    // Set
    set_id: number;


    occupied_type: number;
    extra: number;
    sell_value: number;
    // Main
    pri_eff: [number];
    // Innate
    prefix_eff: [number];

    rank: number;
    occupied_id: number;
    // Subs
    sec_eff: [[number]];
    wizard_id: number;
    // Level
    upgrade_curr: number;
    rune_id: number;
    base_value: number;
    // Grade
    class: number;

    upgrade_limit: number;
}

interface SWMonsterData {
    runes: SWRuneData[];
}
