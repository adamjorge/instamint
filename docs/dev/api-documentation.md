# API Documentation

## Overview

This document provides an overview and description of the various endpoints available in the API.

### Base URL

`/api`

All the endpoints is defined in route.ts files in each folder.

---

## Endpoints

### Auth

- **Base Path**: `/auth`

  - **Route**: `/`

    - **Description**: Base route for authentication.

  - **Route**: `/change-password`

    - **Description**: Endpoint for changing the user's password.

  - **Route**: `/update-password`

    - **Description**: Endpoint for updating the user's password.

  - **Route**: `[...nextauth]`
    - **Description**: Endpoint to handle login and logout functionalities.

### Blockchain Data

- **Base Path**: `/blockchain-data`

  - **Route**: `/`
    - **Description**: Endpoint to retrieve cryptocurrency market values.

---

### Comments

- **Base Path**: `/comments`

  - **Route**: `/`

    - **Description**: Base route for comments (paginated).
      \_ **Query Params**:
      - `page`: The page number to retrieve.

  - **Route**: `/:id`
    - **Description**: Endpoint to manage comments by ID.

---

### Minters

- **Base Path**: `/minters`

  - **Route**: `/`

    - **Description**: Base route for minters (paginated).
      \_ **Query Params**:
      - `page`: The page number to retrieve.

  - **Route**: `/:id`

    - **Description**: Endpoint to manage minters by ID.

  - **Route**: `/toggle-searchability`

    - **Description**: Endpoint to toggle the searchability (by email) of a minter.

  - **Route**: `/follow`

    - **Description**: Endpoint to follow a minter.

  - **Route**: `/pfp/:id`
    - **Description**: Endpoint to change pfp of a minter by id.

---

### NFTs

- **Base Path**: `/nfts`

  - **Route**: `/:id`

    - **Description**: Endpoint to manage NFTs by ID.

  - **Route**: `/:id/:action`

    - **Description**: Endpoint to perform actions on NFTs by ID.

  - **Route**: `/:id/comments`

    - **Description**: Endpoint to manage comments on NFTs by ID.

  - **Route**: `/feed`
    - **Description**: Endpoint to retrieve the feed of ntfs from minters.
      **Query Params**:
      - `cursor`: The cursor to retrieve the next page of results.

---

### Notifications

- **Base Path**: `/notifications`

  - **Route**: `/:minterId`

    - **Description**: Endpoint to manage notifications by minter ID.

  - **Route**: `/constants`

    - **Description**: Endpoint to manage notification constants.

  - **Route**: `/preferences/:minterId`
    - **Description**: Endpoint to manage notification preferences by minter ID.

---

### Reports

- **Base Path**: `/reports`
  - **Route**: `/:type`
    - **Description**: Endpoint to generate reports by type.

---

### Search

- **Base Path**: `/search`

  - **Route**: `/:type`
    - **Description**: Endpoint to search within the platform by type.
    - **Query Params**:
      - `search`: The search query.
      - `userId`: The user ID to search for.
      - `min`: The minimum price of the NFT to search.
      - `max`: The maximum price of the NFT to search.

---

### Upload Original Content

- **Base Path**: `/upload-original-content`

  - **Route**: `/`
    - **Description**: Endpoint to upload original content.

---

### Users

- **Base Path**: `/users`

  - **Route**: `/:id`

    - **Description**: Base route for user-related operations by user ID.

  - **Route**: `/cron`
    - **Description**: Endpoint to handle user deletion in compliance with GDPR (batch triggered every 24 hours).
