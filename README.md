# bookstore-vue

Bookstore-vue is an experimental vue eshop application made for testing purposes. Hosted at [https://bookstore-vue.vercel.app/](https://bookstore-vue.vercel.app/).
<br><br>
Uses [DevBookServer](https://github.com/shindy001/devbook-server) webapi as backend.

## Current state of Features (more to come)
- [x] Authentication (Bearer tokens - .net identity)
  - [x] Register page
  - [x] Sign in page
  - [x] Automatic token refresh
- [x] Google Books integration (cover images)
- [x] Landing page with carousels
- [x] Product detail
- [x] Category detail 
- [x] Product search
- [ ] Shopping cart
- [ ] Payment gateway
- [ ] Administration
  - [ ] Products
    - [x] Product overview
    - [x] Books overview
    - [x] Category overview
    - [ ] CRUD - only addition/deletion for now
  - [ ] Dashboard - system overview
  - [ ] Invoices - overview/state of current invoices
  - [ ] Messages - customer support

## Technology stack
  - Vuejs
  - Primevue - component library
  - Tailwindcss (as a component lib)
  - TS
  - Swiperjs

## Dev Requirements
- `VSCode` or other editor
- Nodejs
- running Api server [DevBookServer](https://github.com/shindy001/devbook-server)

## How to run
1. Clone repo [DevBookServer](https://github.com/shindy001/devbook-server) and run it.
1. Clone this repo and start it with `npm run dev`
   
