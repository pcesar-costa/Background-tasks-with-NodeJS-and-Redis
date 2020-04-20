import "dotenv/config";
import express from "express";
import BullBoard from 'bull-board';

import Sentry from '../app/lib/Sentry';
import Queue from '../app/lib/Queue';
import UserController from '../app/controllers/UserController'

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(Sentry.Handlers.requestHandler());

app.use(express.json());
app.use('/admin/queues', BullBoard.UI);
app.post('/users', UserController.store);

app.use(Sentry.Handlers.errorHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on the ${PORT} port`);
});