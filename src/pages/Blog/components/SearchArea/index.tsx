import { SearchAreaContainer, SearchAreaHeader } from "./styles";

export function SearchArea() {
  return (
    <SearchAreaContainer>
      <SearchAreaHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </SearchAreaHeader>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchAreaContainer>
  );
}
