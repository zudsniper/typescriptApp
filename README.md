# `typescriptApp` Template $v2$
### Template Directory for `NodeJS` powered development with `TypeScript`.  
No IDE configuration files are provided as of now, but check [`CHANGELOG.md`](CHANGELOG.md) information on what has been added.  

| **`VERSION`** |  `TITLE MESSAGE` |
| :-----------: | :--------------- |
| $2.0.0$       | "fix becuz broke" 

---

> "I'm going to keep this repo more up to date" & more lies you tell yourself to fall asleep at night  
> <sup> _I can't fall asleep at night_ </sup>  

## FEATURES
- `tsconfig.json` configured for `es6` and uses `/src/` `/dist/` paradigm. 
- `winston` logger class impl in `utils/logging.ts`
- `chalk` for pretty colors  
- includes `.jshintrc` to make you use semicolons
- `package.json` includes scripts for `first-run`, `build`, `start`, `clean`, and `go`. 
- `dotenv` covers environment variables  
   <sup> _if you have any trouble with this, try `npm run first-run` to install the `dotenv-cli` package._ </sup> 

## USAGE
Here are steps to clone this repository and make it into your own.  
1. **Clone this repo locally**. This will create a new folder from your current path called `typescriptApp`. 
```sh
# use the new github CLI tool - `gh` - to clone
$ gh repo clone https://github.com/zudsniper/typescriptApp
# or use `git` like the good old days 
$ git clone https://github.com/zudsniper/typescriptApp
```

2. **Remove the `git` links to this repo** so that you can use the files as your own.  
```sh
# 'change directory' (`cd`) into the cloned directory.  
$ cd typescriptApp
# WARNING: Use extreme caution when running this command. It can destroy 
#          everything on your computer in a single use. 
# 'remove' (`rm`) the folder `.git` recursively (`-r`) and finally (`-f`)
$ rm -rf .git
# next, return to your parent directory & rename the template folder to
# your desired project's name
$ cd .. && mv typescriptApp <YOUR_APP_NAME_HERE>
```
3. **Update name, description, and authorship information** in `package.json`. <sup>Do at least mention me in your `README.md` though. <sup>_Please?_ </sup></sup>  
 Do this in your text editor of choice!  
```sh
# here we `cd` into the newly renamed directory and open the package
#     json file with `vim` 
$ cd <YOUR_APP_NAME_HERE> && vim package.json
``` 
  4. **GOOD TO GO**!  
> $Good$ $luck$ $old$ $sport.$   

---  
<br>

## FUTURE PLANS
- add `jest` testing stubs, dependency, and scripts to `package.json`. 
- upgrade the target module version from `es6` to at least `es2017`. Handle ramifications.  
- add a basic `commander` setup for easy 'out of the box' CLI building.  
- add the annoying ass `figlet` library and make the on-start print look good

## LICENSE  
MIT License which can be found within  the [LICENSE](LICENSE) file.   

## CONTACT 
Feel free to reach out to me by joining my Discord and tagging me in your message, or sending any business inquiries to [me at zod dot tf]() <sub><i>(Not a real link, no `mailto:` for the bots to scrape today! I'm sure they can't understand my secret code used above!)</i></sub>  

<hr>

<i><code>zod.tf</code></i> 

[![Discord](https://img.shields.io/discord/974855479975100487?label=tf2%20discord)](https://discord.gg/zodtf)  ![GitHub issue custom search](https://img.shields.io/github/issues-search?color=114444&label=issues&query=involves%3Azudsniper)  ![GitHub followers](https://img.shields.io/github/followers/zudsniper?style=social)  

> _fullstack development, server administration, web design, branding creation, musical composition & performance, video editing, and more probably_   

<a href="https://zod.tf/"><img src="https://user-images.githubusercontent.com/16076573/222953031-03f44756-03bf-46b9-b66e-98d50dc013fc.png" alt="second zod.tf logo" width="150rem" style="max-width: 100%;"></a>
