import { ObjectId, Schema, model } from "mongoose";

export interface Log {
    _id: string;
    lastLogin: string;
    timeOnline: number;
};