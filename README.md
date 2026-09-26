# FitLog — Workout Library

FitLog is a modern workout library built with Next.js. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track completed exercises.

## Live Project

Add your deployed project URL here after deployment.

## Features

* Browse a complete workout library with responsive workout cards.
* View detailed workout information including equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
* Add workouts to today's plan with a maximum limit of five workouts.
* Save workouts for later and manage saved workouts.
* Mark planned workouts as completed with toast notifications.
* Remove planned and saved workouts with toast notifications.
* Sort workouts by duration, calories, or rating.
* Plan and saved workout counters update dynamically in the navbar.
* Persist planned, saved, and completed workouts using localStorage.
* Responsive design for mobile, tablet, and desktop devices.
* Custom loading, error, and 404 pages.
* Dynamic workout details using the single-workout API endpoint.

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* Next.js App Router
* React Toastify
* REST API
* LocalStorage

## API

### All Workouts

https://api.api-store.workers.dev/api/fitlog


Used to fetch the complete workout library.

### Single Workout

https://api.api-store.workers.dev/api/fitlog/:id


Used to fetch individual workout details.

## Main Pages

### Home

The home page contains:

* Responsive navigation bar
* Hero section
* Workout library
* Responsive workout cards
* Workout statistics
* Footer

### Workout Details

Each workout has a dynamic details page containing:

* Workout image
* Workout name
* Description
* Muscle groups
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Instructions
* Add to today's plan
* Save for later

### My Plan

The My Plan page allows users to manage their workout selections.

#### Today's Plan

* Maximum five workouts
* Exercise count
* Total workout minutes
* Total calories
* Sort by duration, calories, or rating
* View workout details
* Mark workouts as done
* Remove workouts from the plan
* Toast notification after completing or removing a workout
* Empty state when no workout has been added

#### Saved Workouts

* View saved workouts
* View workout details
* Remove saved workouts
* Toast notification after removing a workout
* Empty state when no workout has been saved

## Project Structure

src/
├── app/
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── my-plan/
│   │   ├── page.tsx
│   │   └── MyPlanContent.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
│
├── components/
│   ├── Shared/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   └── Footer.tsx
│   │
│   └── Workout/
│       ├── WorkoutSection.tsx
│       ├── WorkoutCard.tsx
│       └── WorkoutActions.tsx
│
├── providers/
│   └── FitLogProvider.tsx
│
├── services/
│   └── workout.services.ts
│
└── types/
    └── workout.type.ts


## Local Development

Install the project dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

http://localhost:3000


## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Responsive Design

FitLog is designed to work across:

* Mobile devices
* Tablets
* Desktop screens

The navigation, hero section, workout cards, workout details, and My Plan page adapt to different screen sizes.

## Data Persistence

FitLog uses browser `localStorage` to preserve:

* Planned workouts
* Saved workouts
* Completed workouts

This allows users to keep their workout selections after refreshing the page.

## Error Handling

The application includes:

* Loading state while data is being fetched
* Custom error page for unexpected errors
* Custom 404 page for invalid routes or workouts
* Toast notifications for workout actions

## Git & Version Control

The project was developed using Git with multiple meaningful commits throughout the development process.

## Author

Developed as a workout library project using Next.js, TypeScript, Tailwind CSS, and REST APIs.
