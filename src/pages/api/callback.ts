import auth0 from 'utils/auth0';
import {NextApiRequest, NextApiResponse} from 'next';

const callback = async (req: NextApiRequest, res: NextApiResponse) => {
    await auth0.handleCallback(req, res, {redirectTo: '/'})
        .catch(error => {
            res.status(error.status || 400).end(error.message);
        });
};

export default callback;
