function classList(classes: string[]) {
  return Array.from(new Set(classes.filter((c) => c))).join(" ");
}

export default classList;
