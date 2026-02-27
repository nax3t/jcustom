globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_pBBdpoiR.mjs';
import './chunks/astro/server_DSvb9i8X.mjs';
import { s as sequence } from './chunks/index_BRbGEPsd.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
