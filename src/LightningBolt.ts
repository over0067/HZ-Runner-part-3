/// <reference path="ScoringObject.ts" />

class LightningBolt extends ScoringObject {

    public constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/objects/titled_yellow_power_icon.png");
        this.points = -10;
    }
}
