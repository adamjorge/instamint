# GREEN IT

## Optimize development environment

In order to reduce environment impact, it is important to optimize the development environment.  

Here are some of the choices we've decided to apply to help us reduce our carbon footprint while coding:

- Turn off development servers when not in use: Make sure to stop the NextJS development server (`next dev`) when we're not actively coding or testing. This reduces the load on our computer.
- Use a lightweight code editor: We choosed one of the lightest IDE VSCode. This is an option that provides the functionalities we need without too much overhead.

## Optimize production environment

In order to reduce environment impact, it is important to also optimize the production environment.

- Optimize images: NextJS offers an `<Image />` tag that automatically optimizes images.
- Lazy loading: Load components, especially images and scripts, on demand rather than at the initial page load. NextJS supports lazy loading natively for images.
- Caching: We can use caching to store the results of expensive operations, whether on the client side or on the server side with a caching layer like Redis.
