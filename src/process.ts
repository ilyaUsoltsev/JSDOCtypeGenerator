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

function processInitArray(initObject: Array<any>): any {
  if (initObject.length === 0) return [];
  let outcome = initObject[0];
  console.log(outcome, "1");
  for (;;) {
    if (!Array.isArray(outcome)) break;
    outcome = outcome[0];
  }
  return outcome;
}

export default function (initObject, name, isPrefixed) {
  let result = {};
  const prefix = isPrefixed ? name : "";
  if (Array.isArray(initObject)) {
    initObject = processInitArray(initObject);
  }
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
      } else if (isObject(initObject[key])) {
        result[name].push(`{${prefix + capitalize(key)}} ${key}`);
        main(initObject[key], prefix + capitalize(key));
      } else if (Array.isArray(initObject[key])) {
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
