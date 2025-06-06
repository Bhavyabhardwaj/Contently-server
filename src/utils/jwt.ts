import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (payload: any) => {
    return jwt.sign(payload, JWT_SECRET);
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
}