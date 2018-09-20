import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './shortcut.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShortcutPipe, SafePipe],
  exports:[ShortcutPipe,SafePipe]
})
export class PipeModule { }