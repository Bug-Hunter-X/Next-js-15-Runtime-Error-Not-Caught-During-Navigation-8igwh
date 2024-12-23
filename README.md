# Next.js 15 Runtime Error During Navigation

This repository demonstrates a bug in Next.js 15 where a runtime error on a page causes the entire application to crash when navigating to that page. The error is not gracefully handled, leading to a broken user experience.

## Description
The issue occurs when a page contains a runtime error, such as referencing an undefined variable. When navigating to this page, Next.js does not catch the error and the application throws an error, resulting in a blank or broken screen. This behavior is undesirable as it affects the user's ability to interact with the application.

## Setup
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to `/about`

## Expected Behavior
Next.js should gracefully handle runtime errors on individual pages without crashing the entire application. It is expected to display a user-friendly error message or fallback UI instead.

## Actual Behavior
The application crashes when navigating to the `/about` page due to an unhandled runtime error.  This is not ideal from a user experience perspective.

## Solution
The provided solution demonstrates proper error handling using try-catch blocks.  This ensures a better user experience by providing feedback to the user rather than a crashing application. 