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
