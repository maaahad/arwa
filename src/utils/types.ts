
export type OddNumber<
    X extends number,
    Y extends unknown[] = [1],
    Z extends number = never
> = Y['length'] extends X
    ? Z | Y['length']
    : OddNumber<X, [1, 1, ...Y], Z | Y['length']>
