import { randomUUID } from "node:crypto"
import { getDb } from "../db/mongo"
import { Home } from "./views/Home"
import ViewCode from "./views/ViewCode"
import CrushPix from "./views/CrushPix"

const db = await getDb()
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

  await db.collection('lovers').insertOne(doc);
  return c.redirect(`/crushpix/${doc.endtoend}?created=1`);
};

export const viewCrushPixHandler = async (c: any) => {
  const endtoend = c.req.param('code')
  const doc = await db.collection('lovers').findOne({ endtoend: endtoend });

  return c.html(
    <CrushPix code={endtoend} target={doc?.target} message={doc?.message} wpp={doc?.wpp} value={doc?.value} />
  );
};

export const fetchCrushPixCodeHandler = async (c: any) => {
  const endtoend = c.req.param('code');
  const created = c.req.query('created') === '1';
  const doc = await db.collection('lovers').findOne({ endtoend: endtoend });
  const rawWpp = doc?.wpp.replace(/\D/g, '');

  const wpp = `+55${rawWpp}`;

  const crushpixURL = `https://crushpix.onrender.com/crushpix/view/${endtoend}`
  return c.html(
    <ViewCode code={endtoend} wpp={wpp} crushpixURL={crushpixURL} created={created} />
  );
};