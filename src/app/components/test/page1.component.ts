import { Component, signal } from "@angular/core";
import { Greetings } from "../greetings/greetings";
import { Counter } from "../counter/counter";

@Component({
    selector: 'app-component-overview',
    standalone: true,
    templateUrl: './component-overview.html',
    imports: [Greetings, Counter],
    styleUrls: ['./component-overview.css']
})

export class ComponentOverview {
    protected readonly title = 'Component Overview';
    message = signal("This Message is from Greetings Component's Parent Component");
    KeyUpHandler(event: KeyboardEvent) {
        console.log(`Key up event triggered, pressed key is ${event.key}`);
    }
}