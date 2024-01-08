import 'dotenv/config';
import jwt from 'jsonwebtoken';

const fetchdata = (req, res, next) => {

    const token = req.header('auth-token');

    if (!token) {

        res.status(401).send({ error: "Authenticate using valid authentification token" })

    }

    try {

        const { userId } = jwt.verify(token, "" + process.env.JWT_SECRET);
        req.userId = userId;
        next();

    } catch (error) {

        res.status(401).send({ error: "Authenticate using Valid Token" })

    }

}

export default fetchdata;