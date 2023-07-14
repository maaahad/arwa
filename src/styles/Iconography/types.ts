

export enum IconSize {
    sm = 16,
    md = 24,
    lg = 32
}

// TODO: color?
export type IconProps = {
    size?: keyof typeof IconSize
}