This folder was created with the following commands

```
node --version  // v22.2.0
npx create-next-app@latest // for_neuhaus, accept defaults
cd for_neuhaus
npm install canvasxpress-react --save
mkdir -p src/app/playing
```

I copy skeleton files from my main project into that dir

run `npm run dev` from for_neuhaus/

Visit
http://localhost:3000/playing

canvasxpress figure appears correctly but error log:

```

> for_neuhaus@0.1.0 dev
> next dev

  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 1169ms
(node:10996) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ○ Compiling /playing ...
(node:10996) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
 ✓ Compiled /playing in 4.6s (533 modules)
 ⨯ ReferenceError: window is not defined
    at __webpack_require__ (/home/alexie/software/curatorium/temp/alpapan_tests/for_neuhaus/.next/server/webpack-runtime.js:33:43)
    at __webpack_require__ (/home/alexie/software/curatorium/temp/alpapan_tests/for_neuhaus/.next/server/webpack-runtime.js:33:43)
    at eval (./src/app/playing/component.js:7:76)
    at (ssr)/./src/app/playing/component.js (/home/alexie/software/curatorium/temp/alpapan_tests/for_neuhaus/.next/server/app/playing/page.js:173:1)
    at __webpack_require__ (/home/alexie/software/curatorium/temp/alpapan_tests/for_neuhaus/.next/server/webpack-runtime.js:33:43)
    at eval (./src/app/playing/page.tsx:7:68)
    at (ssr)/./src/app/playing/page.tsx (/home/alexie/software/curatorium/temp/alpapan_tests/for_neuhaus/.next/server/app/playing/page.js:184:1)
    at Object.__webpack_require__ [as require] (/home/alexie/software/curatorium/temp/alpapan_tests/for_neuhaus/.next/server/webpack-runtime.js:33:43)
    at JSON.parse (<anonymous>)
digest: "1634119077"
 GET /playing 500 in 5214ms
 ✓ Compiled in 407ms (255 modules)
 ○ Compiling /favicon.ico ...
```

