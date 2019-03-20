import * as Koa from 'koa';
import * as Router from 'koa-router';

const routeOptions: Router.IRouterOptions = {
  prefix: '/api'
}

const router = new Router(routeOptions);

router.get('/job-offers', (ctx: Koa.Context) => {
  const jobOffers: any[] = [
    {
      "id": 1,
      "title": "Remplacement dans la Drôme"
    }, {
      "id": 2,
      "title": "Remplacement à Val Thorens"
    }, {
      "id": 3,
      "title": "Remplacement à Perpignan"
    }
  ]
  ctx.body = jobOffers;
});

export { router };
