import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformDataService {
  @Output() TransformData = new EventEmitter();
  constructor() { }
}
