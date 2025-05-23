import type { RecipeSummary } from '../../../types/types.mts';
import View from './View.ts';

class ResultsView extends View {
  protected data: RecipeSummary[] = [];
  protected parentElement: HTMLElement | null | undefined =
    document.querySelector<HTMLElement>('.results');

  protected generateHTML(): string {
    return this.data
      .map(
        (el: RecipeSummary) =>
          `<li class="preview">
					<a class="preview__link preview__link--active" href="#" data-id=${el.id}>
						<figure class="preview__fig">
							<img src="${el.image_url}" alt="${el.title}" />
						</figure>
						<div class="preview__data">
							<h4 class="preview__title">${el.title}</h4>
							<p class="preview__publisher">${el.publisher}</p>
							<div class="preview__user-generated">
								<svg>
									<use href="./img/icons.svg#icon-user"></use>
								</svg>
							</div>
						</div>
					</a>
				</li>`
      )
      .join('');
  }

  public handlerAddEventHandler(
    setResultID: (id: string | undefined) => void,
    renderRecipe: () => void
  ): void {
    if (!this.parentElement) return;
    this.parentElement.addEventListener('click', (e: Event) => {
      if (!e.target) return;
      const clicked: HTMLElement | null = (e.target as Element).closest(
        '.preview__link'
      );

      if (!clicked) return;
      setResultID(clicked.dataset.id);
      renderRecipe();
    });
  }
}

export default new ResultsView();
