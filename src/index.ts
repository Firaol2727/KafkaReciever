import express,{Request,Response} from 'express';
import { InitializeDatabase } from './helpers/database';
import { subscribeToKafka,publishToKafka,ConnectAndInstantiateProducerAndConsumer } from './helpers/KafkaHelper';
import bodyParser from 'body-parser';
import morganBody from 'morgan-body';
import morgan from "morgan";
import responseTime from "response-time";
import CartRouter from './routes/cart/Cart.router';
import OrderRouter from './routes/cart/Order.router';
import ProductRouter from './routes/product/Product.router';
import CategoryRouter from './routes/product/Category.router';
import Prometheus from "prom-client";
import { Order } from './models/carts/Orders';
const app = express();
const port = 3000;

// run().catch(console.error)
InitializeDatabase();
ConnectAndInstantiateProducerAndConsumer();
subscribeToKafka();
app.use(morgan("combined"));
/**
 * Morgan Body Logger
 */
morganBody(app, { maxBodyLength: 1000000 });
/**
 * Tracking Response Time
 */
const PrometheusMetric = {
  requestCounter: new Prometheus.Counter({
    name: "throughput",
    help: "Number of requests served.",
  }),
  responseTimeSummary: new Prometheus.Summary({
    name: "response_time",
    help: "Latency in Percentiles.",
  }),
  responseTimeHistogram: new Prometheus.Histogram({
    name: "response_time_histogram",
    help: "Latency in Histogram.",
    buckets: [0.1, 0.25, 0.5, 1, 2.5, 5, 10],
  }),
};
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Request Counter
 */
app.use((request, response, next) => {
  PrometheusMetric.requestCounter.inc();
  next();
});
/**
 * Response Time
 */
app.use(
  responseTime((request, response, time) => {
    PrometheusMetric.responseTimeSummary.observe(time);
    PrometheusMetric.responseTimeHistogram.observe(time);
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/cart",CartRouter);
app.use("/order",OrderRouter);
app.use("/product",ProductRouter);
app.use("/category",CategoryRouter);
// app.use("/cart", CartRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});