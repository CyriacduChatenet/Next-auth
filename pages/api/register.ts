import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '@utils/db';
import User from '@models/user';

connectToDatabase();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        try {
            const { username, email, password } = req.body;

            const newUser = await new User({username, email, password});
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(400).send('Error, this methods is not supported by this endpoint !');
    }
};