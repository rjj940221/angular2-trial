import {Component, Input, Output, EventEmitter} from "@angular/core"
import {Hero} from "./hero"

@Component({
    selector: "new-hero",
    template: `<div>
        <h2>New Hero</h2>
        <input [(ngModel)]="name" placeholder = "name" />
        <input  type = "button" value =  "save Hero" (click)="saveHero()" [disabled] = "undifined === name"/>
    </div>`
})

export class NewHeroComponent{
    name: string;
    @Output() heroAdded = new EventEmitter<Hero>();

    saveHero(){
            console.log("saveMe: " + this.name);
            this.heroAdded.emit({id:30, name: this.name});
            this.name =  undefined;
    }
}