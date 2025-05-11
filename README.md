# Auto Spot (React + Node.js)

A full-stack application built with React (Vite) on the front-end and Node.js/Express with MongoDB on the back-end. Auto spot was created as a university project for internet technologies course. Simple web site that allows users to look throu the lis of cars for sale and add their own offer, then they can delete or update this offer. I also add an admin account that provides basic admin features like offers and users management

## Features

- **User Authentication**
  - JWT-based signup/login
  - Password hashing with bcrypt
- **Protected Routes**
  - Users can CRUD their own offers
  - Admin can manage all users & offers
- **Full CRUD**
  - Create, Read, Update, Delete car listings
- **Security**
  - CORS enabled
  - Environment-based configuration
- **Database**
  - MongoDB with Mongoose ODM

## Live Demo

- https://auto-spot-kappa.vercel.app/

## Tech Stack

- Frontend: React, Vite, React Router, Tailwind CSS, Context API, Axios
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, CORS
- Deployment: Vercel (frontend), Render (backend)

## Project Structure

```
auto-spot/
├── client/         # React frontend
└── server/         # Express backend
```

## Getting Started

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```
