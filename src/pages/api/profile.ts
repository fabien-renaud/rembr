import auth0 from 'utils/auth0';
import {NextApiRequest, NextApiResponse} from 'next';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    await auth0.handleProfile(req, res)
        .catch(error => {
            res.status(error.status || 500).end(error.message);
        });
};

export default login;
