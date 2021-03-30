import { App } from './App';
describe('App tests', () => {
  const app = new App();
  it ('Test 1: Should print => 51', () => {
    const response = app.maximunPossibleNumber5(1);
    expect(response).toBe(51)
  })
})