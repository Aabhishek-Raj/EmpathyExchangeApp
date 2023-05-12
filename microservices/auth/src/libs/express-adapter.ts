import { Request, Response } from 'express'

export function expressAdapter(controller: Function) {
    return async (req: Request, res: Response) => {

        // try {
            const httpRequest = await {
                body: req.body,
                query: req.query, 
                params: req.params,
                method: req.method,
                path: req.path,
                headers: {
                    'Content-Type': req.get('Content-Type'),
                    Referer: req.get('referer'),
                    'User-Agent': req.get('User-Agent') 
                }
            }

            const httpResponse = await controller(httpRequest)

            if (httpResponse.headers) {
                res.set(httpResponse.headers)
            }
            // if(req.path.includes('/signup' || '/signin')) {
            //     req.session = {
            //         jwt: 'httpResponse.body.userJwt'
            //     }
            // }

            res.status(httpResponse.statusCode).send(httpResponse.body)

        // } catch (error) {
        //    throw
        // } 
    }
}