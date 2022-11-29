interface UserProps
{
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: {[key: string]: Callback[]};

  // new User({name: 'asdf', age: 20});
  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // Callback[] or undefined.
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}
