import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import connectToDatabase from '@utils/db';
import User from '@models/user';

dotenv.config();

connectToDatabase();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        try {
            const { email, password } = req.body;

            const findUserInDB = await User.find({email});

            if(email !== findUserInDB[0].email || email === null || email === '') {
                res.status(400).send('Email is invalid');
            } else if(password !== findUserInDB[0].password || password === null || password === '') {
                res.status(400).send('Password is invalid');
            } else {
                const token = jwt.sign({email, password}, `${process.env.JWT_KEY}`);
                res.status(200).json({token : token});
            }
        } catch (err) {
            res.status(400).json({error : err});
        }
    } else {
        res.status(400).send('Error, this methods is not supported by this endpoint !');
    }
};