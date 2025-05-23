import View from './View.ts';

class SearchView extends View {
  protected parentElement: HTMLElement | null | undefined =
    document.querySelector<HTMLElement>('.search');

  private searchInput: HTMLInputElement | null | undefined =
    this.parentElement?.querySelector('.search__field');

  private clearInput(): void {
    if (!this.searchInput) return;
    this.searchInput.value = '';
  }

  public handlerSearch(handler: () => void): void {
    if (!this.parentElement) return;
    this.parentElement.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      handler();
    });
  }

  public getQuery(): string | null {
    if (!this.searchInput) return null;
    const query: string = this.searchInput.value;
    this.clearInput();
    return query;
  }
}

export default new SearchView();
