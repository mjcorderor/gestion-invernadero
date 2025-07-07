import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvernaderoComponent } from './invernadero.component';

describe('InvernaderoComponent', () => {
  let component: InvernaderoComponent;
  let fixture: ComponentFixture<InvernaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvernaderoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvernaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
