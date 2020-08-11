import {NextApiRequest, NextApiResponse} from 'next';
import auth0 from 'utils/auth0';

const login = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    await auth0.handleProfile(req, res).catch(error => {
        res.status(error.status || 500).end(error.message);
    });
};

export default login;
