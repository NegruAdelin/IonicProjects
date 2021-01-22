import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditObiectPage } from './edit-obiect.page';

describe('EditObiectPage', () => {
  let component: EditObiectPage;
  let fixture: ComponentFixture<EditObiectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObiectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditObiectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
