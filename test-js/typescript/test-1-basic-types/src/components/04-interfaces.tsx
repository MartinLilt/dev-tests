interface PluginConfig {
  readonly selector: string;
  perPage?: number;
  startIndex?: number;
  draggable?: boolean;
}

interface Employees {
  [key: string]: number;
}

const config: PluginConfig = {
  selector: '#plugin-1',
  perPage: 2,
  startIndex: 0,
  draggable: false,
};

const employees: Employees = {
  mango: 5,
  poly: 20,
  ajax: 34,
  wiki: 55,
};

console.log(config, employees);

export {};
