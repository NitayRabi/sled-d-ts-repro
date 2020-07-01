import { baseComponents } from 'santa-integration-tests';

const { EditorComponent, ViewerComponent } = baseComponents;

class Foo extends ViewerComponent {
  log() {
    console.log(this.previewFrame)
  }
}

describe('Fails', () => {
  it('should not fail due to typescript', () => {
    expect(true).toBe(true);
  })
})
