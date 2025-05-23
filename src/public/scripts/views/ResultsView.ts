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
					<a class="preview__link preview__link--active" href="#${el.id}">
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
}

export default new ResultsView();
