import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'email',
        password: 'pass',
        techs: ['A', 'B', {title: 'JS', experience: 100}]
    });
    return response.json({nessage: 'Hello World'});
}