import express from 'express';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const app = express();
const port = 7000;

const tokenKey = '1a2b-3c4d-5e6f-7g8h';

// Replace 'users' with your actual user data import
import * as users from './users.json';

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            tokenKey,
            (err: any, payload: any) => {
                if (err) next();
                else if (payload) {
                    for (let user of users) {
                        if (user.id === payload.id) {
                            (req as any).user = user;
                            next();
                        }
                    }

                    if (!(req as any).user) next();
                }
            }
        );
    }

    next();
});

app.post('/api/auth', (req: Request, res: Response) => {
    for (let user of users) {
        if (
            req.body.login === user.login &&
            req.body.password === user.password
        ) {
            return res.status(200).json({
                id: user.id,
                login: user.login,
                token: jwt.sign({ id: user.id }, tokenKey),
            });
        }
    }

    return res.status(404).json({ message: 'User not found' });
});

app.get('/user', (req: Request, res: Response) => {
    if ((req as any).user) return res.status(200).json((req as any).user);
    else
        return res
            .status(401)
            .json({ message: 'Not authorized' });
});

app.listen(port, () =>
    console.log(`Server listens on port ${port}`)
);