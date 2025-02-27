# Instructions

To start the express server which serves the TSS app at /hub

1. `npm i && npm run build`
2. `cd ./server && npm i && npm run build`

## Testing notes

| Component     | Path                                                             |
| ------------- | ---------------------------------------------------------------- |
| express       | `/hub`                                                           |
| app.config.ts | `/`                                                              |
| router.tsx    | `/`                                                              |
| **Result**    | **Does not work, navigation inside TSR always goes back to `/`** |

| Component     | Path                                                             |
| ------------- | ---------------------------------------------------------------- |
| express       | `/hub`                                                           |
| app.config.ts | `/hub`                                                           |
| router.tsx    | `/`                                                              |
| **Result**    | **Does not work, navigation inside TSR always goes back to `/`** |

| Component     | Path                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| express       | `/hub`                                                                                                             |
| app.config.ts | `/hub`                                                                                                             |
| router.tsx    | `/hub`                                                                                                             |
| **Result**    | **TSR navigation now works. chunks are still loaded from http://localhost:3001/\_build/assets/client-DkXsmdUL.js** |
