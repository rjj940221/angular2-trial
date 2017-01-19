"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var NewHeroComponent = (function () {
    function NewHeroComponent() {
        this.heroAdded = new core_1.EventEmitter();
    }
    NewHeroComponent.prototype.saveHero = function () {
        console.log("saveMe: " + this.name);
        this.heroAdded.emit({ id: 30, name: this.name });
        this.name = undefined;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewHeroComponent.prototype, "heroAdded", void 0);
    NewHeroComponent = __decorate([
        core_1.Component({
            selector: "new-hero",
            template: "<div>\n        <h2>New Hero</h2>\n        <input [(ngModel)]=\"name\" placeholder = \"name\" />\n        <input  type = \"button\" value =  \"save Hero\" (click)=\"saveHero()\" [disabled] = \"undifined === name\"/>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], NewHeroComponent);
    return NewHeroComponent;
}());
exports.NewHeroComponent = NewHeroComponent;
//# sourceMappingURL=new-hero.component.js.map