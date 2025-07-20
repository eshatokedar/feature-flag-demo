import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Simple test routes
app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint working' });
});

app.get('/', (req, res) => {
  res.send('Feature Flag API is live 🎉');
});

// Try to load flag routes
try {
  const flagRoutes = require('./routes/flag.routes');
  app.use('/flags', flagRoutes.default || flagRoutes);
  console.log('Flag routes loaded successfully');
} catch (error) {
  console.error('Error loading flag routes:', error);
}

// Try to load auth routes
try {
  const authRoutes = require('./routes/auth.routes');
  app.use('/auth', authRoutes.default || authRoutes);
  console.log('Auth routes loaded successfully');
} catch (error) {
  console.error('Error loading auth routes:', error);
}

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.send('Feature Flag API is live 🎉');
});
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

