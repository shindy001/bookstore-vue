import { App } from 'vue';

/**
 * Registers layouts in the app instance, uses relative path (i.e. current script directory) for layout component imports
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app: App<Element>) {
  const layouts: Record<string, { default: { __name: string } }> = import.meta.glob('./*.vue', { eager: true });

  Object.entries(layouts).forEach(([, layout]) => {
    app.component(layout?.default?.__name, layout?.default);
  });
}