function adentity<T>(arg: T): T {
  return arg;
}
adentity<number>(10);
adentity<string>("10");
adentity<boolean>(true);

function pain<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pain(10, 10);

pain("10", 10);

pain(true, {});
