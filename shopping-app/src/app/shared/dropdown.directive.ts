import { Directive, HostBinding, HostListener } from "@angular/core";

// bikin dropdown button
@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
