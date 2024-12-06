import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} from angular my-first-static-web-app </div>`,
})
export class AppComponent {
  value = 'World';
}
