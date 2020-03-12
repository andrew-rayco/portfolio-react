# portfolio-react

A react version of my portfolio. Bit of overkill. Just the way I like it.

## Deployment

The `Master` branch has the bundle file in `.gitignore`.

To deploy, update `deploy` branch with new changes and run a build `npm run webpack` to generate the `bundle.js` file.

SSH into host server, and `git pull origin deploy`.
