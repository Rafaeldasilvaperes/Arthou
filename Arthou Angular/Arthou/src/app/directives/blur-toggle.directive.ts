import { Directive } from '@angular/core';

@Directive({
  selector: '[appBlurToggle]'
})
export class BlurToggleDirective {

  constructor() { }
 

  public toggle(): void {
    const blur = document.getElementById('blur')
    blur?.classList.toggle('active')
  }
  
}
