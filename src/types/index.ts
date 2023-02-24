import type { Observable, ObservedValueOf, OperatorFunction } from "rxjs";

export type Option = {
  value: string;
  label: string;
};
export type ToOptionPipe<T = any> = OperatorFunction<
  T[],
  ObservedValueOf<Observable<Option[]>>
>;
export type Page<T = any> = {
  list: T[];
  total: number;
};

type PageResult<T> = { success: boolean; data: T[]; total: number };

export type ToDesc<T> = OperatorFunction<T, { data?: T; success: boolean }>;
export type ToPage<T> = OperatorFunction<Page<T>, PageResult<T>>;
export type ToVirtualPage<T> = OperatorFunction<T[] | undefined, PageResult<T>>;
export type Sum = OperatorFunction<number, number>;
export type SumBy = OperatorFunction<Record<string, any>, number>;
export type PickData<T = any> = OperatorFunction<{ data?: T }, any>;
