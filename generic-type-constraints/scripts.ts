type AllowString<T extends string> = T;
type AllowNumber<T extends number> = T;

type Logger = (a: number) => void;
type CreateLogger<T extends Logger> = {
  log: T;
  exit: () => void;
};
