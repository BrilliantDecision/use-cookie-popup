const stringify = (value: any) => {
  try {
    if (typeof value === "string") {
      return value;
    }
    const stringifiedValue = JSON.stringify(value);
    return stringifiedValue;
  } catch (e) {
    return value;
  }
};

const decode = (str: string): string => {
  if (!str) return str;
  return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
};

export { stringify, decode };
