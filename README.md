![reefer-raker](https://user-images.githubusercontent.com/519327/109385373-39f5f480-78eb-11eb-9bb6-022c62e01fac.png)
# Reefer Raker

An application to track moving boxes into the reefers

During the pandemic the campus has had to deal with more samples than ever before. We are now processing 20000 samples a week.

The problem is where to store them and how to keep track of them? We don’t have enough freezer space in our buildings so we now have 5 large -20C refrigerated units called reefers which are in the campus car park. Once the samples have been sequenced they need to be moved but we also need to make sure we can find out where they are.

Currently this is done with existing software, spreadsheets and manual checking. It is time consuming and easy to make mistakes especially when our staff are working in cold conditions.

All of the samples are stored in plates with a unique barcode. We need to build them an application that allows them to scan those barcodes and store the location. They also need to be able to double check that they are putting them in the right place. 

This would make the jobs of the reefer teams much easier as well as allowing us to find out where they are. Imagine trying to find a sample amongst thousands of other samples by hand. It would be like trying to find a needle in a haystack!

# Building and running Reefer Raker locally

Building and running Open MCT in your local dev environment is very easy. Be sure you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/), then follow the directions below


# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette 5. Search and run "Select TypeScript version" -> "Use workspace version"


