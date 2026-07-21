import request from 'supertest';
import { Router } from 'express';

import { createApp } from '@/app';

const app = createApp(Router());

describe('Health Check', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'UP' });
    expect(res.headers['x-content-type-options']).toBe('nosniff');
  });

  it('should expose the configured API router', async () => {
    const router = Router();
    router.get('/probe', (_req, res) => res.json({ ok: true }));
    const routedApp = createApp(router);

    const res = await request(routedApp).get('/api/probe');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
