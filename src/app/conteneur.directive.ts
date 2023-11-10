import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appConteneur]',
})
export class ConteneurDirective {
  constructor() {}

  // we are binging the property of textColor with the html element
  @HostBinding('style.color') textColor: string = 'black';
  @HostBinding('style.border') border: string = 'black';
  @HostListener('input') onInput() {
    const color = this.getRandomColor();
    this.textColor = color;
    this.border = `${color} 2px solid`;
  }
  @HostListener('mouseleave') mouseleave() {
    this.border = 'black';
  }
  getRandomColor(): string {
    // Génère une couleur hexadécimale aléatoire
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
