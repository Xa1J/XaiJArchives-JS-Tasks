import { AbstractComponent } from "../abstractComponent.js";

export class EmptyTasksComponent extends AbstractComponent {
  getTemplate() {
    return `<li class="empty">Drag and drop the card</li>`;
  }
}
