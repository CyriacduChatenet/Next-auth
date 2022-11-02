import { model, Schema } from 'mongoose';

import IUser from '@type/user';

const userSchema = new Schema<IUser>({
    username : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    },
});

const User = model<IUser>('users', userSchema);

export default User;