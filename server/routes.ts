import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve assets (images, KML files, etc.)
  app.use('/assets', express.static(path.join(process.cwd(), 'public', 'assets'), {
    setHeaders: (res, filePath) => {
      if (path.extname(filePath).toLowerCase() === '.kml') {
        res.setHeader('Content-Type', 'application/vnd.google-earth.kml+xml');
      }
    }
  }));

  // Serve public base assets
  app.use(express.static(path.join(process.cwd(), 'public')));

  const httpServer = createServer(app);

  return httpServer;
}
