export interface BikeFilter<T> {
  label: string;
  options: BikeFilterOption<T>[];
}

export interface BikeFilterOption<T> {
  label: string;
  value: T;
}
