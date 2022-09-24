# Next.ts

<div align="center">
<img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2023">
<!-- <img alt="alpha" src="https://img.shields.io/badge/alpha---?&color=blue"> -->
<!-- [<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/Andrew-Colman/next.ts/Node.js%20CI">](../../actions) -->

</div>
<br>

🍬 Sweet developer experience

🚀 Production ready Typescript **Next.js** toolchain.

```sh
npx gh-gen next -n my-app-name
```

options:

`-n | --name <name>`: your app name

<!--
TODO add on demand features
like --use "prisma,auth,actions"
requires: gh-gen feature
 -->

# Overview:

-   Typescript ✔️
-   Chakra-ui ✔️
-   Tailwindcss (typed) ✔️
-   Zustand (state manager) ✔️
-   React-Query Client (Powerful asynchronous state management for TS/JS, React) ✔️
-   Axios (custom instance) ✔️
-   easy to re-config ✔️
-   zero lock-in ✔️

<!-- # Summary

1.  [Path aliases / structure](#opined-structure)
2.  [On demand feature generation](#on-demand-feature-generation)
3.  [everything typed (ts)]()
4.  [Real world Example](#real-world-example)
5.  [tests: jest, testing library, end-to-end](#tests) -->

---

## Opined structure

-   `features/` <- core app features (state slice, api, components, etc)
-   `components/` <- reusable components
-   `hooks/` <- reusable hooks
-   `store/` <- store (state management)
-   `pages/` <- app pages (server-side/static rendered)
-   `pages/api` <- next.js serverless api routes
-   `styles/` <- global styles like: chakra global styles, tailwindcss styles
-   `services` <- custom http client, db connectors,
-   `utils/` <- utility scripts like: test-utils, mocks setup, ...

    > zero lock-in you can use it however you want

<!-- ## On demand feature generation:

reaxi

reaxi can generate everything that apps needs

-   components `reaxi component`
-   hooks `reaxi hook`
-   app features `reaxi feature`

read more about reaxi here

## Real world example:

-   ...

> add your example here: [read more](./) -->

## TESTS !!!

### Unit / Integration

-   [jest](https://jestjs.io/)
-   [testing library react](https://testing-library.com/docs/react-testing-library/intro/)
-   with [msw](https://mswjs.io/) ('mocked backend')

Testing components, just :

```tsx
import { setup, screen } from '@utils/test-utils';

test('should test', async () => {
    //Arrange
    const { user } = setup(<Component />); // will render component and returns the user event
    //Act
    await user.click(....)
    //Assert
    expect(screen.get......).toBe(....)
});
```

### End to End

-   [playwright](https://playwright.dev/docs/why-playwright) runs end-to-ends test in real browsers: chromium, firefox, webkit ( all in parallel)

-   with typescript support out of the box
-   desktop and mobile browsers

#### Install Browsers

`npx playwright install`

#### Running

run tests:
`yarn pw` | `npm run pw`

debug: (will open browser)
`yarn pw:ui` | `npm run pw:ui`

#### Test generator

Playwright comes with the ability to generate tests out of the box and is a great way to quickly get started with testing. It will open two windows, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests, copy the tests, clear your tests as well as change the language of your tests.

`yarn pw:gen` | `npm run pw:gen`

> make sure to be running the `dev` server

#### Tests location

`tests/`

#### Configuration

[playwright.config.ts](./playwright.config.ts)

#### Example test with playwright

```ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
});
```

> you can change to cypress easily: `yarn add cypress -D && npx cypress`

## Bring it even further:

> dozens of next.ts projects with a yarn workspace configuration

then you can use [wksp](https://github.com/Andrew-Colman/wksp) for running commands like: `wksp dev`

---

## Why ?

creating and setting projects can take a lot of time and repeating/boring tasks

## How ?

collecting experience and best practices

## Who ?

for: **developers** / **teams** that create a lot of projects and want a sweet developer experience with a complete next.js toolchain ready for production deployment
