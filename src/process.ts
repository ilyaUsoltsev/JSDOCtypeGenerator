function capitalize(str: string): string {
  str = String(str);
  return str[0].toUpperCase() + str.slice(1);
}

function isObject(object: any): boolean {
  if (!object) return false;
  if (Array.isArray(object)) return false;
  if (typeof object === "object") {
    return true;
  } else {
    return false;
  }
}

export default function (initObject, name, isPrefixed) {
  let result = {};
  const prefix = isPrefixed ? name : "";
  function main(initObject, name) {
    result[name] = [];
    result[name].push(`{Object} ${capitalize(name)}`);
    for (let key of Object.keys(initObject)) {
      if (typeof initObject[key] === "number") {
        result[name].push(`{number} ${key}`);
      } else if (initObject[key] === null) {
        result[name].push(`{null} ${key}`);
      } else if (typeof initObject[key] === "boolean") {
        result[name].push(`{boolean} ${key}`);
      } else if (typeof initObject[key] === "string") {
        result[name].push(`{string} ${key}`);
      } else if (
        typeof initObject[key] === "object" &&
        !Array.isArray(initObject[key])
      ) {
        result[name].push(`{${prefix + capitalize(key)}} ${key}`);
        main(initObject[key], prefix + capitalize(key));
      } else if (
        typeof initObject[key] === "object" &&
        Array.isArray(initObject[key])
      ) {
        if (
          typeof initObject[key][0] === "object" &&
          initObject[key][0] !== null
        ) {
          result[name].push(`{${prefix + capitalize(key)}[]} ${key}`);
          main(initObject[key][0], prefix + capitalize(key));
        } else {
          result[name].push(`{${typeof key}[]} ${key}`);
        }
      } else if (typeof initObject[key] === "function") {
        result[name].push(`{Function} ${key}`);
      } else {
        result[name].push(`{***UNKNOWN***} ${key}`);
      }
    }
    return result;
  }
  main(initObject, name);
  let outcome = "";
  for (let key of Object.keys(result)) {
    outcome = outcome + "/**" + "\n";
    result[key].forEach((line, index) => {
      if (index === 0) {
        outcome = outcome + " * @typedef " + line + "\n";
      } else {
        outcome = outcome + " * @property " + line + "\n";
      }
    });
    outcome = outcome + " */" + "\n";
  }
  return outcome;
}
