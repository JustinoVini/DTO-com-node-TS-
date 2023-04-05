// importação do express no sistema.
import express, { Application, Request, Response } from 'express';

// inicialização da variavel que vai receber os valores do express no sistema 
const app: Application = express();

// definindo a porta 
const port = 3000;

// body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// definindo a rota
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    // retorna a mensagem de sucesso.
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` });
});

try {
    app.listen(port, () => {
        console.log(`Server Running on http://localhost:${port}`);
    })
} catch (error) {
    console.log(`Error occured`);
}
