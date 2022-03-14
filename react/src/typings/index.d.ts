/**
 * This is a file where it's possible to define any custom types.
 * Adding them here prevents the need to import them in your code files.
 * TypeScript compiler should be able to find these ambient types as long
 * as the files in this directory match the `include: []` property paths
 * in tsconfig.json.
 */

/* SystemJS module definition */
declare var module: NodeModule
interface NodeModule {
  id: string
}

interface ActionWithPayload<T> {
  type: string
  payload: T
}

interface Beer {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: any
  boil_volume: any
  method: any
  ingredients: any
  food_pairing: any
  brewers_tips: string
  contributed_by: string
}

interface BeerState {
  isLoading: boolean
  beers: Beer[]
  failed: boolean
}
