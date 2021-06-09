interface Nested {
  property: string;

  [key: string]: number | string;
}

interface Dingus {
  nested: Nested;
}

let dingus: Dingus | undefined;

dingus?.nested.property;
dingus?.nested['hello'];
