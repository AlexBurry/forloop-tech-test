This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Notes

- Assumed that pagination was to be achieved by getting the offset from the original `fetch(https://pokeapi.co/api/v2/pokemon)`, and not retrieving all API data at once.
- Loading state does not work as intended.
- Decided to have a seperate component for a pokemons detailed view and not a dynamically routed page.
