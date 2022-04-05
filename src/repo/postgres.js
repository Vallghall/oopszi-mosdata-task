import { Sequelize, DataTypes, Model } from "@sequelize/core"
import dotenv from "dotenv";
dotenv.config()
import {logger} from "../logger/logger.js";

const _uri = process.env.DATABASE_URL

export const sequelize = new Sequelize(_uri, {
    logging: logger.debug.bind(logger)
})

try {
    await sequelize.authenticate()
    logger.info("Connection to postgres db was successful")
} catch (err) {
    logger.error("Connection to postgres db was unsuccessful")
}

export class Courts extends Model {}

Courts.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    Address: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    AdmArea: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    DisabilityFriendly: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    District: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    Email: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HasCashMachine: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HasDressingRoom: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
        primaryKey: true,
    },

    HasEatery: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
        primaryKey: true,
    },

    HasEquipmentRental: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HasFirstAidPost: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HasMusic: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HasTechService: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HasToilet: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HasWifi: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HelpPhone: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    HelpPhoneExtension: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    Lighting: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    ObjectName: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    Paid: {
        type: DataTypes.STRING,
        defaultValue: "Информация отсутствует",
    },

    GeoData: {
        type: DataTypes.JSONB,
    },
}, {
    sequelize,
    modelName: "Courts",
})

await sequelize.sync({ force: true })
