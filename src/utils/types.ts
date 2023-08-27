export type OddNumber<
  X extends number,
  Y extends unknown[] = [1],
  Z extends number = never,
> = Y["length"] extends X
  ? Z | Y["length"]
  : OddNumber<X, [1, 1, ...Y], Z | Y["length"]>;

export type TupleOf<T, N, R extends unknown[] = []> = R["length"] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>;
export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : TupleOf<T, N>
  : never;
