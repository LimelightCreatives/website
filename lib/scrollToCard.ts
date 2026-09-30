export function scrollToCard(id: string, behavior: ScrollBehavior = "smooth") {
  const card = document.getElementById(id);
  if (!card) return;

  const stable = card.closest("[data-card-wrapper]") ?? card.parentElement!;
  const top = stable.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({ top, behavior });
}