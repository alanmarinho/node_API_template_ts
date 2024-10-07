import express from 'express';
import Visitantes from '@routes/visitantes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || (3999 as number);
const URL_DB = process.env.URL_DB as string;

const app = express();

app.use(express.json({ limit: '50mb' }));

app.use(express.json());
async function connectAndStartServer() {
  try {
    await mongoose.connect(URL_DB, {});
    console.log('Conectado ao MongoDB');

    app.get('/', (req, res) => {
      res.send('API');
    });

    app.post('/', (req, res) => {
      console.log('Requisição recebida:');
      res.send(req.body);
      return;
    });

    app.use('/api/', Visitantes);

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro de conexão:', error);
  }
}

connectAndStartServer();
