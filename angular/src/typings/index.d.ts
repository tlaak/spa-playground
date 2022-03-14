/**
 * This is a file where it's possible to define any custom types.
 * Adding them here prevents the need to import them in your code files.
 * TypeScript compiler should be able to find these ambient types as long
 * as the files in this directory match the `include: []` property paths
 * in tsconfig.json.
 */

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface ActionWithPayload<T> {
  type: string;
  payload: T;
}

interface Beer {}

interface BeerState {
  isLoading: boolean;
  beers: Beer[];
}
