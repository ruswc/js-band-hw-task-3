export class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.view.bindAddShip()
        this.view.bindAddTruck()
        this.view.bindAddCost()
    }
}