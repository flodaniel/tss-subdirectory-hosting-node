# Instructions

To start the express server which serves the TSS app at /hub

1. `npm i && npm run build`
2. `cd ./server && npm i && npm run build`

## Testing notes

<table>
<tr><th>Component</th><th>Path</th></tr>
<tr><td>express</td><td>`/hub`</td></tr>
<tr><td>app.config.ts</td><td>`/`</td></tr>
<tr><td>router.tsx</td><td>`/`</td></tr>
<tr><td colspan="2">**Result:** Does not work, navigation inside TSR always goes back to `/`</td></tr>
</table>

<table>
<tr><th>Component</th><th>Path</th></tr>
<tr><td>express</td><td>`/hub`</td></tr>
<tr><td>app.config.ts</td><td>`/hub`</td></tr>
<tr><td>router.tsx</td><td>`/`</td></tr>
<tr><td colspan="2">**Result:** Does not work, navigation inside TSR always goes back to `/`</td></tr>
</table>

<table>
<tr><th>Component</th><th>Path</th></tr>
<tr><td>express</td><td>`/hub`</td></tr>
<tr><td>app.config.ts</td><td>`/hub`</td></tr>
<tr><td>router.tsx</td><td>`/hub`</td></tr>
<tr><td colspan="2">**Result:** TSR navigation now works. chunks are still loaded from http://localhost:3001/_build/assets/client-DkXsmdUL.js</td></tr>
</table>
