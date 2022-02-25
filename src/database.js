"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { DATABASE_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;
const client = new pg_1.Pool({
    host: DATABASE_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
});
console.log(DATABASE_HOST);
console.log(POSTGRES_PASSWORD);
exports.default = client;
