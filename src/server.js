import "dotenv/config";
import express from "express";
import BullBoard from 'bull-board';

import Sentry from '../app/config/sentry';
import UserController from '../app/controllers/UserController'
import Queue from '../app/lib/Queue';

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(Sentry.Handlers.requestHandler());

app.use(express.json());
app.use('/admin/queues', BullBoard.UI);
app.post('/users', UserController.store);

// function to test Sentry
app.get('/debug-sentry', function mainHandler(req, res) {
    throw new Error('My first Sentry error!');
});

app.use(Sentry.Handlers.errorHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on the ${PORT} port`);
});