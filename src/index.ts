import { app } from './app';

const PORT: number = 80;

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
