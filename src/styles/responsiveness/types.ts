import type { Tuple } from "../../utils/types"

export type Device  = 'xm' | 'sm' | 'md' | 'lg' | 'xl'
export type ResponsiveProp = 'width' | 'height'
export type ResponsiveDecleration = {
    [key in ResponsiveProp]?: string | Tuple<string|number, 1|2|3|4|5>
}

export enum CSSProperty {
    width = 'width',
    height = 'height',
}


// Testing
// export let test1: ResponsiveDecleration = {
//     width: ['x']
// }
// export let test2: ResponsiveDecleration = {
//     width: ['x', 'y']
// }
// export let test3: ResponsiveDecleration = {
//     width: ['x', 'y', 'z']
// }
// export let test4: ResponsiveDecleration = {
//     width: ['x', 'y', 'z', 'u']
// }

// export let test5: ResponsiveDecleration = {
//     width: ['x', 'y', 'z', 'u', 'l']
// }
// export let test6: ResponsiveDecleration = {
//     width: ['x', 'y', 'z', 'u', 'l', 'm']
// }
