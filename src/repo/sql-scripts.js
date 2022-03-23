export const initScript = `
    CREATE TABLE IF NOT EXISTS courts (
    id serial,
    address varchar NOT NULL,
    admArea varchar NOT NULL,
    disabilityFriendly varchar,
    district varchar NOT NULL,
    email varchar NOT NULL,
    hasCashMachine varchar NOT NULL,
    hasDressingRoom varchar NOT NULL,
    hasEatery varchar NOT NULL,
    hasEquipmentRental varchar NOT NULL,
    hasFirstAidPost varchar NOT NULL,
    hasMusic varchar NOT NULL,
    hasTechService varchar NOT NULL,
    hasToilet varchar NOT NULL,
    hasWifi varchar NOT NULL,
    helpPhone varchar NOT NULL,
    helpPhoneExtension varchar NOT NULL,
    lighting varchar NOT NULL,
    objectName varchar NOT NULL,
    paid varchar NOT NULL,
    geoData jsonb
);
`

export const selectAllScript = `
    SELECT * FROM courts;
`

export const insertScript = `
    INSERT INTO courts(
    address,
    admArea,
    disabilityFriendly,
    district,
    email,
    hasCashMachine,
    hasDressingRoom,
    hasEatery,
    hasEquipmentRental,
    hasFirstAidPost,
    hasMusic,
    hasTechService,
    hasToilet,
    hasWifi,
    helpPhone,
    helpPhoneExtension,
    lighting,
    objectName,
    paid,
    geoData
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);
`


