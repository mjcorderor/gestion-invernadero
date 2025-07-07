import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvernaderoFormComponent } from './invernadero-form.component';

describe('InvernaderoFormComponent', () => {
  let component: InvernaderoFormComponent;
  let fixture: ComponentFixture<InvernaderoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvernaderoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvernaderoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
