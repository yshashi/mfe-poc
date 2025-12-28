import { loadRemoteModule } from '@angular-architects/native-federation';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ElementRef, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  template:``,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);

  @Input() config = initWrapperConfig;


  async ngOnInit() {
    await loadRemoteModule('about', './TeamElement')
    const root = document.createElement('mfe-team');
    this.elm.nativeElement.appendChild(root);
  }
}

export interface WrapperConfig {
  remoteName: string;
  exposedModule: string;
  elementName: string;
}

export const initWrapperConfig: WrapperConfig = {
  remoteName: '',
  exposedModule: '',
  elementName: '',
}
