export class EventBus {
    private subscriptions: { [key: string]: Array<(param: unknown) => void> } = {};

    public on<T>(eventName: string, callback: (param: T) => void): void {
        this.subscriptions[eventName] = this.subscriptions[eventName] || [];
        this.subscriptions[eventName].push(callback);
    }

    public off<T>(eventName: string, callback: (param: T) => void) {
        if (this.subscriptions[eventName]) {
            let index = this.subscriptions[eventName].indexOf(callback);
            this.subscriptions[eventName].splice(index, 1);
        }
    }

    public trigger<T>(eventName: string, param?: T): void {
        if (this.subscriptions[eventName]) {
            this.subscriptions[eventName].forEach((callback: (param: T) => void) => {
                callback(param);
            })
        }
    }
}
