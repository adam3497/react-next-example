/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
      ignoreBuildErrors: true, // Ignorar errores de compilación de TypeScript
  },
  eslint: {
      ignoreDuringBuilds: true, // Ignorar errores de ESLint durante el build
  },
};

module.exports = nextConfig;
