import constants from 'namespace-constants';

// export const PROPERTY_FILTER
export const HIT_LEVEL_FILTER = constants([
    //FILTER_NAME
    'FILTER_HIGH',
    'FILTER_MID',
    'FILTER_LOW',
]);

export const CRUSH_FILTER = constants([
    'FILTER_HIGH_CRUSH',
    'FILTER_LOW_CRUSH',
    'FILTER_MID_CRUSH',
    'FILTER_ALL_CRUSH',
]);

export const ON_BLOCK_FILTER = constants([
    'FILTER_ALL_PLUS_ON_BLOCK',
    'FILTER_ALL_NEGATIVE_ON_BLOCK',
    'FILTER_ALL_PUNISHABLE_ON_BLOCK',
    'FILTER_ALL_NEUTRAL_ON_BLOCK',
    'FILTER_HEAVY_NEGATIVE_ON_BLOCK',
    'FILTER_HEAVY_PLUS_ON_BLOCK',
]);

export const ON_HIT_FILTER = constants([
    'FILTER_ALL_PLUS_ON_HIT',
    'FILTER_ALL_NEGATIVE_ON_HIT',
    'FILTER_ALL_NEUTRAL_ON_HIT',
]);

export const SPEED_FILTER = constants([
    'FILTER_10_FRAME_ATTACKS',
    'FILTER_11_FRAME_ATTACKS',
    'FILTER_12_FRAME_ATTACKS',
    'FILTER_13_FRAME_ATTACKS',
    'FILTER_14_FRAME_ATTACKS',
    'FILTER_15_FRAME_ATTACKS',
    'FILTER_16_FRAME_ATTACKS',
]);

export const GIF_FILTER = constants([
    'HAS_GIF',
    'HAS_NO_GIF',
]);