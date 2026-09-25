import {Time} from "@internationalized/date";

type TrackingEvent = {
    timestamp: number,
    ticket: string
}

export class Timestore {
    private readonly eventHistory: TrackingEvent[] = $state([]);
    public startTracking(ticket: string) {
        this.eventHistory.push({
            timestamp: Date.now(),
            ticket
        })
    }
    get history() {
        return this.eventHistory;
    }
}