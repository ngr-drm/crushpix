import { randomUUID } from "node:crypto"
import { client } from "../db/mongo"
import { Home } from "./views/Home"
import ViewCode from "./views/ViewCode"
import CrushPix from "./views/CrushPix"

export const homeHandler = (c: any) => {
  return c.html(<Home />);
};

export const createCrushPixHandler = async (c: any) => {
  const data = await c.req.formData();
  const target = data.get('target');
  const message = data.get('message');
  const wpp = data.get('wpp');
  const value = data.get('value');

  const doc = {
    endtoend: randomUUID(),
    target: target,
    message: message,
    wpp: wpp,
    value: value,
  }

  await client.db().collection('crushpix').insertOne(doc);
  return c.redirect(`/crushpix/${doc.endtoend}`);
};

export const viewCrushPixHandler = async (c: any) => {
  const endtoend = c.req.param('code')
  const doc = await client.db().collection('crushpix').findOne({ endtoend: endtoend });

  return c.html(
    <CrushPix code={endtoend} target={doc?.target} message={doc?.message} wpp={doc?.wpp} value={doc?.value} />
  );
};

export const fetchCrushPixCodeHandler = async (c: any) => {
  const endtoend = c.req.param('code');
  const doc = await client.db().collection('crushpix').findOne({ endtoend: endtoend });
  const wpp = `+55${doc?.wpp.replace(" ", "")}`
  console.log(wpp)
  return c.html(
    <ViewCode code={endtoend} wpp={wpp} />
  );
};