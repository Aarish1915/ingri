import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { globalLimiter } from './middlewares/rateLimiter.middleware.mjs';
import dotenv from 'dotenv';

dotenv.config();

// Route Imports
import productRoutes from './routes/products.routes.mjs';
import ordersRoutes from './routes/orders.routes.mjs';
import adminRoutes from './routes/admin.routes.mjs';
import pincodesRoutes from './routes/pincodes.routes.mjs';
import reservationRoutes from './routes/reservations.routes.mjs';
import blogRoutes from './routes/blogs.routes.mjs';
import promotionRoutes from './routes/promotions.routes.mjs';
import authRoutes from './routes/auth.routes.mjs';
import addressesRoutes from './routes/addresses.routes.mjs';
import recipesRoutes from './routes/recipes.routes.mjs';

const app = express();

// 1. Security Middlewares
app.use(helmet());
app.use(cors());

app.use('/api/', globalLimiter);

// 2. Body Parsers (with size limits for DOS protection)
app.use(express.json({ limit: '1mb' })); 
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// 3. Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 4. API Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/pincodes', pincodesRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/addresses', addressesRoutes);
app.use('/api/recipes', recipesRoutes);

// 5. Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Global Error]:', err.stack);
  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

export default app;
