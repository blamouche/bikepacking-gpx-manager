# bikepacking-gpx-manager-1 Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-10-20

## Active Technologies
- Vanilla JavaScript ES6+ (no transpilation) + Leaflet.js 1.9.4 (map rendering), existing GPX parsing library (002-poi-management)
- Vanilla JavaScript ES6+ (no transpilation) + Leaflet.js 1.9.4, existing GPX parsing/generation library (inline in index.html) (003-auto-save-reminder)
- Browser localStorage/IndexedDB for tracking personal data state (GPX uploads, custom waypoints, custom POIs) (003-auto-save-reminder)

## Project Structure
```
backend/
frontend/
tests/
```

## Commands
npm test && npm run lint

## Code Style
Vanilla JavaScript ES6+ (no transpilation): Follow standard conventions

## Recent Changes
- 003-auto-save-reminder: Added Vanilla JavaScript ES6+ (no transpilation) + Leaflet.js 1.9.4, existing GPX parsing/generation library (inline in index.html)
- 002-poi-management: Added Vanilla JavaScript ES6+ (no transpilation) + Leaflet.js 1.9.4 (map rendering), existing GPX parsing library

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
