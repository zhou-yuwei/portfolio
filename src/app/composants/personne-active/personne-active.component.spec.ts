import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneActiveComponent } from './personne-active.component';

describe('PersonneActiveComponent', () => {
  let component: PersonneActiveComponent;
  let fixture: ComponentFixture<PersonneActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
