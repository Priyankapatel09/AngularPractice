import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public todoResponseComplete = new BehaviorSubject<boolean>(false); 

  constructor() { }
}
