import { EmpleadosModule } from './empleados.module';

describe('EmpleadosModule', () => {
  let empleadosModule: EmpleadosModule;

  beforeEach(() => {
    empleadosModule = new EmpleadosModule();
  });

  it('should create an instance', () => {
    expect(empleadosModule).toBeTruthy();
  });
});
