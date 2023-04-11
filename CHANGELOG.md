> Started 04/11/2023 with the first minor update to the template since its inception.  

## VERSION `1.0.0`  
"init commit"  
Fairly decent starting point.   

### OVERVIEW
- `/src/`
  - `index.ts` is a stub for starting your application.  
  - `utils/`
    - `logging.ts` is an implementation of the Winston logger which exports `{logger}` which is intended to be the standard logger of the template. 
- 
- `package.json` contains 3 scripts: `build`, `start`, and `go`. Also `test` but who uses that AM I RIGHT? \*crickets\* 
- `tsconfig.json` is not strict but includes `/src/` `/dist/` typescript paradigm via `tsconfig.json` config.  

---

## VERSION `1.1.0`
"fix becuz broke"  
Fixing some of the mistakes I left in the first version; also updating and adding a few other Quality of Life features.  
- fixed `package.json` by setting `main` to the actual output `js` file, added `first-run` and `clean` scripts.  
- updated `tsconfig.json` to be strict among other things
- changed `utils/logging.js` into an actual Typescript file. Overhauled the design to be... better written.
- added `.env.example` with some sample values
- added MIT `LICENSE`
- _(more smaller things)_
