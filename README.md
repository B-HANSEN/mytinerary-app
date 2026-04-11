# MYtinerary

A travel itinerary platform where users can browse cities, explore curated itineraries created by local insiders, and save their favourites.

## Features

- Browse and search cities
- View itineraries per city with ratings, duration, price, and hashtags
- Activities and comments per itinerary
- User registration and login (email/password or Google OAuth)
- Authenticated users can create itineraries and manage favourites

## Tech Stack

**Backend**
- [Hono](https://hono.dev/) — lightweight web framework
- [Mongoose 8](https://mongoosejs.com/) + MongoDB Atlas
- JWT authentication via `jsonwebtoken`
- Password hashing via `bcryptjs`
- ESM modules throughout

**Frontend**
- React 16.14 + Redux Toolkit
- React Router 5
- Material-UI v4 + Bootstrap 4
- Google OAuth via `@react-oauth/google`
- Axios for API requests

## Prerequisites

- Node.js >= 22
- npm >= 10
- MongoDB Atlas account

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/B-HANSEN/mytinerary-app.git
cd mytinerary-app
npm run setup
```

### 2. Configure environment

Create `config/default.json` (not committed):

```json
{
  "mongoURI": "mongodb+srv://<user>:<password>@<cluster>.mongodb.net/mytinerary-app?retryWrites=true&w=majority",
  "jwtSecret": "your_jwt_secret"
}
```

Create `client/.env` (not committed):

```
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

### 3. Run in development

```bash
npm run dev
```

- Backend: `http://localhost:5001`
- Frontend: `http://localhost:3000`

### 4. Build for production

```bash
npm run build
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run setup` | Install all dependencies (root + client) |
| `npm run dev` | Run backend and frontend concurrently |
| `npm start` | Start production server |
| `npm run build` | Build React client |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## API Routes

All routes are prefixed with `/api`.

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/auth` | Login with email/password | — |
| GET | `/auth/user` | Get current user | ✓ |
| GET | `/users` | List all users | — |
| POST | `/users` | Register new user | — |
| POST | `/users/social` | Register/login via Google | — |
| GET | `/cities` | List all cities | — |
| POST | `/cities` | Create city | — |
| GET | `/cities/:id` | Get single city | — |
| DELETE | `/cities/:id` | Delete city | — |
| GET | `/itineraries/:cityId` | Get itineraries for a city | — |
| POST | `/itineraries` | Create itinerary | — |
| PUT | `/itineraries/:id/rating` | Update rating | — |
| DELETE | `/itineraries/:id` | Delete itinerary | — |
| GET | `/activities/:itinId` | Get activities for itinerary | — |
| POST | `/activities` | Create activity | — |
| GET | `/comments/:itinId` | Get comments for itinerary | — |
| POST | `/comments` | Add comment | — |
| GET | `/favorites/users/:id` | Get user favourites | — |
| PUT | `/favorites/users/:id` | Add favourite | — |
| DELETE | `/favorites/users/:id/:favId` | Remove favourite | — |

## Project Structure

```
mytinerary-app/
├── server.js               # Entry point
├── config/                 # Credentials (not committed)
├── middleware/             # JWT auth middleware
├── models/                 # Mongoose schemas
├── routes/api/             # API route handlers
├── uploads/                # Avatar uploads
└── client/
    └── src/
        ├── Views/          # Page components
        ├── components/     # Reusable components
        ├── actions/        # Redux actions
        ├── reducers/       # Redux reducers
        └── store.js        # Redux store
```

## Authentication

- **JWT** — issued on login/register, expires in 1 hour, sent via `x-auth-token` header
- **Google OAuth 2.0** — handled client-side via `@react-oauth/google`, verified server-side by email lookup
