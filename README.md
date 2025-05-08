# Codificador/Decodificador Cifra de César (HTML/CSS/JS)

Este projeto é uma aplicação web simples e intuitiva para codificar e decodificar mensagens utilizando a clássica Cifra de César. A ferramenta foi desenvolvida com foco em um design minimalista e moderno, utilizando HTML, CSS e JavaScript puros, e implementa um deslocamento fixo de 3 posições.

## Funcionalidades

O site oferece as seguintes funcionalidades principais:

*   **Codificação de Texto:** Permite inserir um texto original e obter sua versão codificada com a Cifra de César (deslocamento +3).
*   **Decodificação de Texto:** Permite inserir um texto codificado e obter sua versão original (deslocamento -3).
*   **Interface Intuitiva:**
    *   Design limpo e moderno com áreas dedicadas para texto original e texto processado.
    *   Botões claros e com cores de destaque (Ciano e Roxo) para as ações de codificar e decodificar.
    *   Um botão "Limpar Tudo" para apagar rapidamente ambos os campos de texto.
    *   Feedback visual com um logo animado (rotação contínua).
*   **Deslocamento Fixo:** Implementa um deslocamento padrão de 3 posições para frente na codificação e para trás na decodificação, conforme especificado.
*   **Preservação de Caracteres:** O algoritmo mantém letras maiúsculas como maiúsculas e minúsculas como minúsculas. Números, espaços, e outros símbolos não são alterados durante o processo de cifra.
*   **Layout Simples e Responsivo:** A interface é centralizada e se adapta visualmente para uma boa experiência em desktops.

## Visualização

<p align="center">
  <!-- Adicione aqui um printscreen da sua interface. Exemplo: -->
  <!-- <img src="caminho/para/seu/screenshot.png" alt="Interface do Codificador Cifra de César" width="700"> -->
  <em>(Adicione um printscreen da interface aqui, se desejar)</em>
</p>

## Tecnologias Utilizadas

*   **HTML5:** Para a estrutura semântica da página.
*   **CSS3:** Para estilização, layout (Flexbox), animações (rotação do logo) e design, utilizando o esquema de cores especificado:
    *   **Cores Primárias:** Cinza escuro (`#212529`) para o fundo, branco (`#FFFFFF`) ou cinza claro (`#ADB5BD`) para o texto.
    *   **Cor de Destaque:** Ciano (`#17A2B8`) e Roxo (`#6610F2`) para elementos interativos e título.
    *   **Cor Secundária:** Cinza médio (`#6C757D`) para rótulos e informações secundárias.
*   **JavaScript (ES6+):** Para a lógica de codificação/decodificação da Cifra de César, manipulação do DOM e interatividade dos botões.

## Como Usar / Acesso

**Localmente:**
1.  Clone este repositório:
    ```bash
    git clone [URL-DO-SEU-REPOSITORIO-NO-GITHUB]
    ```
    (Ou simplesmente baixe os arquivos `index.html`, `style.css` e `script.js` para uma mesma pasta).
2.  Navegue até a pasta do projeto:
    ```bash
    cd nome-da-pasta-do-projeto
    ```
3.  Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).

**Online (Se aplicável):**
*   O site pode ser acessado em: `[SEU-LINK-DE-HOSPEDAGEM-AQUI, ex: https://seusite.netlify.app/]` (Se você hospedar).

## Autor

*   **Thaina L. Rossinoli** - Desenvolvedora ([GitHub: rossinoli](https://github.com/rossinoli))

## Agradecimentos

*   [Opcional: Adicione agradecimentos se houver, como a quem deu a ideia, ajudou com testes, etc.]

## Melhorias Futuras (Sugestões)

*   Permitir que o usuário defina o valor do deslocamento.
*   Adicionar opção para copiar o texto processado para a área de transferência.
*   Suporte a outros alfabetos ou um tratamento mais robusto para caracteres especiais.

## Licença

Este projeto é licenciado sob a licença MIT. (Se você optar por adicionar um arquivo LICENSE.md ao seu projeto).
