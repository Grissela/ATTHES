import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewzapatillaComponent } from './newzapatilla.component';

describe('NewzapatillaComponent', () => {
  let component: NewzapatillaComponent;
  let fixture: ComponentFixture<NewzapatillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewzapatillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewzapatillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
