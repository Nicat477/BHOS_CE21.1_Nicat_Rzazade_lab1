// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.events = {}; // Store events as an object
    }
    
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []; 
        }
        this.events[eventName].push(callback);
    }

    
    trigger(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback()); // Call each callback
        }
    }

    
    off(eventName) {
        if (this.events[eventName]) {
            delete this.events[eventName]; 
        }
    }
}

module.exports = Events;
