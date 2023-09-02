
interface IComponent {
  name: string;
  component: any;
  properties: { [key: string]: string };
  default?: string;
}

export type { IComponent };

