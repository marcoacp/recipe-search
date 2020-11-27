# Recipé search

Simple app to search recipes.

### Status
Under development, details at the end of document

## Usage

### Api sign up and create a key file

Access and control of the API is done using two keys, so first, you need to:

= Go to [Edaman Api](https://developer.edamam.com/edamam-recipe-api) and pick a plan.
- Go to [applications](https://developer.edamam.com/admin/applications/) tab.
- click im *view* to see the keys

Clone or download this repo

= In the helpers folder of the project create the **keys.js** file with this structure:

*export const appId = 'YOUR_APP_ID'* 

*export const appKey = 'YOUR_APP_KEY'*

### install

```bash
npm install
```
### Development
Start a local server to run/modify the app

```bash
npm run dev
```
### build
To build your version of the app

```bash
npm run build
```

## Details

- A little Svelte to search recipes.
- You can see the details of each recipe and visit the original post.  

## Credits

- Made with: [svelte](https://svelte.dev/) 
- Svg and text animations: [Online Tutorials](https://www.youtube.com/c/OnlineTutorials4Designers/videos)
- Recipes data: [Edaman](https://www.edamam.com/)

## Demo

https://recipe-search.vercel.app/

## App issues and Next steps

#### Issues
- Sometimes, a null return causes a bug.
- The calls limit system is a bit confuse.

#### To Do 
- Replace loops/ifs for funcions and svelte Await blocs.
- Make the app mobile friendly. 
- Add animations and Transitions.