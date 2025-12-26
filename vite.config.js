// vite.config.js
import { defineConfig } from 'vite';
// Если используете React, Vue, Svelte и т.д. — добавьте нужный плагин
// import react from '@vitejs/plugin-react'  // пример для React

export default defineConfig({
  // plugins: [react()],  // раскомментируйте, если нужен плагин
  base: '/englishWithsJS/',  // Вот здесь правильно!
});