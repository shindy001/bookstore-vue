# Layouts

Layouts from this folder is registered automatically. You can use them on page by specificy meta layout in route.

**example route with custom layout**
```ts
{
        path: '/',
        component: Landing,
        meta: {
            layout: "EmptyLayout"
        }
}
```

> [!CAUTION]
> There needs to be at least one line in script section in layout, otherwise vue/ts transpilation will drop it and the layout component will be handled just like custom html element and will not be registered automatically. Line like "console.debug()" is enough.
