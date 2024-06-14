# API Documentation

## Overview

This document provides an overview and description of the various endpoints available in the API.

### Base URL

`/api`

---

## Endpoints

### Auth

- **Base Path**: `/auth`

  - **Route**: `/`

    - **Description**: Base route for authentication.

  - **Route**: `/change-password`

    - **Description**: Endpoint for changing the user's password.
    - **File**: `route.ts`

  - **Route**: `/update-password`

    - **Description**: Endpoint for updating the user's password.
    - **File**: `route.ts`

  - **Route**: `/blockchain-data`

    - **Description**: Endpoint to retrieve cryptocurrency market values.
    - **File**: `route.ts`

  - **Route**: `[...nextauth]`
    - **Description**: Endpoint to handle login and logout functionalities.
    - **File**: `route.ts`

---

### Comments

- **Base Path**: `/comments`

  - **Route**: `/:id`
    - **Description**: Endpoint to manage comments by ID.
    - **File**: `route.ts`

---

### Minters

- **Base Path**: `/minters`

  - **Route**: `/:id`

    - **Description**: Endpoint to manage minters by ID.
    - **File**: `route.ts`

  - **Route**: `/toggle-searchability`

    - **Description**: Endpoint to toggle the searchability of a minter.
    - **File**: `route.ts`

  - **Route**: `/follow`
    - **Description**: Endpoint to follow a minter.
    - **File**: `route.ts`

---

### PFP (Profile Pictures)

- **Base Path**: `/pfp`

  - **Route**: `/:minterId`
    - **Description**: Endpoint to manage profile pictures by minter ID.
    - **File**: `route.ts`

---

### NFTs

- **Base Path**: `/nfts`

  - **Route**: `/:id`

    - **Description**: Endpoint to manage NFTs by ID.
    - **File**: `route.ts`

  - **Route**: `/:id/:action`

    - **Description**: Endpoint to perform actions on NFTs by ID.
    - **File**: `route.ts`

  - **Route**: `/:id/comments`

    - **Description**: Endpoint to manage comments on NFTs by ID.
    - **File**: `route.ts`

  - **Route**: `/feed`
    - **Description**: Endpoint to retrieve the feed of connected minters.
    - **File**: `route.ts`

---

### Notifications

- **Base Path**: `/notifications`

  - **Route**: `/:minterId`

    - **Description**: Endpoint to manage notifications by minter ID.
    - **File**: `route.ts`

  - **Route**: `/constants`

    - **Description**: Endpoint to manage notification constants.
    - **File**: `route.ts`

  - **Route**: `/preferences/:minterId`
    - **Description**: Endpoint to manage notification preferences by minter ID.
    - **File**: `route.ts`

---

### Reports

- **Base Path**: `/reports`

  - **Route**: `/:type`
    - **Description**: Endpoint to generate reports by type.
    - **File**: `route.ts`

---

### Search

- **Base Path**: `/search`

  - **Route**: `/:type`
    - **Description**: Endpoint to search within the platform by type.
    - **File**: `route.ts`

---

### Upload Original Content

- **Base Path**: `/upload-original-content`

  - **Route**: `/`
    - **Description**: Endpoint to upload original content.
    - **File**: `route.ts`

---

### Users

- **Base Path**: `/users`

  - **Route**: `/`

    - **Description**: Base route for user-related operations.
    - **File**: `route.ts`

  - **Route**: `/cron`
    - **Description**: Endpoint to handle user deletion in compliance with GDPR.
    - **File**: `route.ts`
