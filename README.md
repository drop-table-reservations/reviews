[![CircleCI](https://circleci.com/gh/drop-table-reservations/reviews.svg?style=svg)](https://circleci.com/gh/drop-table-reservations/reviews)
[![codecov](https://codecov.io/gh/drop-table-reservations/reviews/branch/master/graph/badge.svg)](https://codecov.io/gh/drop-table-reservations/reviews)

# reviews
Reviews module for DropTable, a front-end clone of OpenTable

## Related Projects

  - https://github.com/drop-table-reservations/overview
  - https://github.com/drop-table-reservations/photos

## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)

## Development

### LOCAL
- Requirements: MongoDB
- npm install
- npm run load-db
- npm run start:dev (nodemon)
- npm run build:dev (webpack watch)

### DOCKER, DEV
- Requirements: Docker
- npm install
- npm run build
- docker-compose up -d

### DOCKER, PROD
- Requirements: Docker
- docker-compose -f docker-compose.prod.yml up -d


