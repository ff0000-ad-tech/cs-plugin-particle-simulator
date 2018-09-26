# AdTech - Particles (ES6 version)
----------------------------------------------------------------

This is an updated version Particle Simulator for [ad-particles](https://stash.ff0000.com/projects/AT/repos/ad-particles/browse) to work with #FF0000 Ad Tech ES6 pipeline. The Simulator provides a visual interface to tweak [ad-particles](https://github.com/ff0000-ad-tech/ad-particles) effects in real time. There are more complex and dynamic effects can be achieved programmatically. The simulator can be installed in [Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server). For details, please see [Confluence doc](hhttps://confluence.ff0000.com/display/AT/1.+Simulator+with+Creative+Server).



----
## Installation
`npm install`
<br>
## Development
To test the dev version of the project, you need to: 

1. Have a [creative server](https://github.com/ff0000-ad-tech/wp-creative-server) that already has Particle Simulator plugin installed. 

2. Have a `.env` file at the root of the project. In the `.env` file, add `TARGET_DEV_PATH=[path to the ad-es6-particles in node modules folder in creative server]`

3. Run `npm run dev`

4. All the source files are in `source` folder. Node API is under `source/lib`

5. Webpack will start writing files into the directory you specified. You should be able to reload the simulator in Creative Server to see the front-end changes. For changes in node, you will need to restart Creative Server since it is on the server side.

6. Sometimes Webpack watch copy process doesn't seem to pick up new files, if that happens, just restart `npm run dev`
<br>

## Build the project for publish
`npm run build`

The built version will be in the `dist` folder. Merge it into `master` branch and push. That is it!
