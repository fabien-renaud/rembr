import {NextApiRequest, NextApiResponse} from 'next';
import auth0 from 'utils/auth0';

const callback = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    await auth0.handleCallback(req, res, {redirectTo: '/'}).catch(error => {
        res.status(error.status || 400).end(error.message);
    });
};

export default callback;
