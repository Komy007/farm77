# FarmEstate - Cambodia 77ha Mango Farm

This project is a premium property showcase website for a 77-hectare mango farm in Tang Krasang, Cambodia. It features a modern, responsive design with multilingual support (Korean, English) and integrated Google Earth (KML) visualization.

## Features

- **Premium UI**: Modern, glassmorphism-inspired design with smooth animations.
- **Multilingual Support**: Seamless switching between Korean and English.
- **Interactive Map**: Integration with Google Earth KML data for precise property visualization.
- **Photo Gallery**: Comprehensive aerial and ground-level property photos.
- **Legal Documents**: Secure display of land title certificates and survey maps.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Lucide React.
- **Backend**: Express.js, TypeScript.
- **Database**: Drizzle ORM (PostgreSQL).
- **Deployment**: Vercel (Serverless Functions).

## Project Structure

- `client/`: React frontend source code.
- `server/`: Express backend source code.
- `shared/`: Shared types and database schema.
- `public/`: Static assets, including the `assets/` subdirectory for farm-specific content.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

1. Connect this repository to Vercel.
2. The project is pre-configured with `vercel.json` for serverless deployment.
3. Vercel will automatically handle build and deployment of the frontend and backend.

## License

All rights reserved. Property of FarmEstate Cambodia.
