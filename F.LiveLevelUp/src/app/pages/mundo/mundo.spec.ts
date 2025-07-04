import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mundo } from './mundo';

describe('Mundo', () => {
  let component: Mundo;
  let fixture: ComponentFixture<Mundo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mundo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mundo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
