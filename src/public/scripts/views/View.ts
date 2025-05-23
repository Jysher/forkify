import type { Recipe, RecipeSummary } from '../../../types/types.mts';

export default abstract class View {
  protected data: unknown | undefined;
  protected parentElement: HTMLElement | null | undefined;

  protected generateHTML(): string {
    return '';
  }

  protected clear(): void {
    if (!this.parentElement) return;
    this.parentElement.innerHTML = '';
  }

  public render(
    data: Recipe | RecipeSummary[] | unknown,
    render: boolean = true
  ): string | undefined {
    if (!data) return;

    this.data = data;
    const html = this.generateHTML();

    if (!render) return html;

    this.clear();
    if (!this.parentElement) return;
    this.parentElement.insertAdjacentHTML('afterbegin', html);
  }

  public renderSpinner(): void {
    if (!this.parentElement) return;
    const html: string = `
			<div class="spinner">
				<svg>
					<use href="./img/icons.svg#icon-loader"></use>
				</svg>
			</div>
		`;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', html);
  }

  public renderError(error: unknown) {
    if (error instanceof Error) {
      return `
        <div class="error">
          <div>
            <svg>
              <use href="./img/icons.svg#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${error.message}</p>
        </div>;
      `;
    }
  }
}
