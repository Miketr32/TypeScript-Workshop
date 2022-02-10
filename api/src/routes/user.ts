import {Response, Request, Router} from 'express';

Router.get('/', (req: Request, res: Response) => {
	res.send('soy la ruta get!');
});

Router.post('/', (req: Request, res: Response) => {
	res.send('soy la ruta post!');
});

export default Router;