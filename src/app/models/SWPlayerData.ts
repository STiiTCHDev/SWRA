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
    attribute: number;
    resist: number;
    create_time: string;
    unit_level: number;
    spd: number;
    exp_gain_rate: number;
    critical_rate: number;
    runes: SWRuneData[];
    exp_gained: number;
    unit_id: number;
    source: number;
    unit_master_id: number;
    building_id: number;
    accuracy: number;
    trans_items: any[];
    wizard_id: number;
    class: number;
    pos_x: number;
    pos_y: number;
    costume_master_id: number;
    skills: [[number]];
    atk: number;
    experience: number;
    island_id: number;
    critical_damage: number;
    homunculus: number;
    homunculus_name: string;
    def: number;
    con: number;
}

interface SWMonstersNames {
    [key: string]: string;
}
