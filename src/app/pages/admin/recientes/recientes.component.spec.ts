import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecientesComponent } from './recientes.component';

describe('RecientesComponent', () => {
  let component: RecientesComponent;
  let fixture: ComponentFixture<RecientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecientesComponent]
    });
    fixture = TestBed.createComponent(RecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
