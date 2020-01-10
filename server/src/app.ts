import dotenv from "dotenv";
dotenv.config();

import Koa from "koa";
import Router from "koa-router";
import "reflect-metadata";
import { createConnection } from "typeorm";

import server from "./graphql";
import api from "./api";

const { PORT } = process.env;
const app = new Koa();
const router = new Router();

server.applyMiddleware({ app });

router.use(api.routes());
app.use(router.routes());

createConnection().then(() => {
  console.log("db connection");
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at ${server.graphqlPath}`)
  );
});
