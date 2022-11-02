import { connect, ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = () => connect(`${process.env.MONGODB_URL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
} as ConnectOptions,
(err) => {
    if(!err) console.log('Connected to MongoDB !');
    else console.log(`Could not connect to MongoDB : ${err}`);
});

export default connectToDatabase;