import { App } from 'vue';

/**
 * Registers layouts in the app instance, uses relative path (i.e. current script directory) for layout component imports
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app: App<Element>) {
    const layouts: any = import.meta.glob('./*.vue', { eager: false });

    Object.entries(layouts).forEach(([_, layout]) => {
        const layoutValue = layout as any;
        app.component(layoutValue?.default?.__name, layoutValue?.default);
    });
}
