import { newSpecPage } from '@stencil/core/testing';
import { RatingComponent } from './rating-component';

describe('rating-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [RatingComponent],
      html: '<rating-component></rating-component>',
    });
    expect(root).toEqualHtml(`
      <rating-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </rating-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [RatingComponent],
      html: `<rating-component first="Stencil" last="'Don't call me a framework' JS"></rating-component>`,
    });
    expect(root).toEqualHtml(`
      <rating-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </rating-component>
    `);
  });
});
