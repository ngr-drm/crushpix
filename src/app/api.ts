import { OpenAPIHono } from "@hono/zod-openapi";
import { createCrushPixHandler, viewCrushPixHandler, homeHandler, fetchCrushPixCodeHandler, } from "./handlers";

const api = new OpenAPIHono();

api.get('/', homeHandler);
api.post('/crushpix', createCrushPixHandler)
api.get('/crushpix/:code', fetchCrushPixCodeHandler)
api.get('/crushpix/view/:code', viewCrushPixHandler);


export default api;