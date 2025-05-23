import View from './View.ts';

class AddRecipeView extends View {
  protected parentElement: HTMLElement | null | undefined =
    document.querySelector<HTMLElement>('.nav__btn--add-recipe');
}

export default new AddRecipeView();
