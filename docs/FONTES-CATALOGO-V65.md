# Fontes do catálogo 65.0

A versão 65.0 substitui as variações repetidas da versão anterior por exercícios de origem única. Cada entrada física tem um identificador próprio e utiliza um ou mais ficheiros de imagem que não são reutilizados por outra entrada nova.

## Exercícios físicos

Os exercícios de mobilidade, alongamento, força, elásticos e preparação de pernas usam dados e ilustrações do [RepDB](https://repdb.co), através do repositório oficial [RepDB/exercise-dataset](https://github.com/RepDB/exercise-dataset).

O conteúdo é distribuído apenas dentro da aplicação, com a atribuição visível exigida pela licença. Os ficheiros de imagem e o catálogo gerado ficam fora do repositório público para não republicar o conjunto de dados como uma base autónoma.

Contagem desta edição:

- 192 exercícios físicos de origem única;
- 58 alongamentos;
- 28 exercícios com elásticos;
- 40 exercícios de reforço de pernas e controlo corporal úteis para Taekwondo;
- 296 ficheiros de imagem únicos, confirmados também pelo conteúdo do ficheiro.

## Técnicas de mãos

As oito famílias adicionais de técnicas de mãos usam fotografias técnicas já incorporadas na aplicação. A nomenclatura é verificada com materiais do [Kukkiwon Research Institute](https://research.kukkiwon.or.kr/homepage/boardMedia/11621). Foram removidos os diagramas SVG genéricos que podiam representar de forma pouco clara a superfície de contacto.

## Validações automáticas

Antes de gerar o catálogo, o processo confirma:

1. exatamente 192 identificadores físicos diferentes;
2. ausência de nomes finais duplicados;
3. ausência de ficheiros de imagem reutilizados entre exercícios novos, comparando caminho e hash SHA-256;
4. presença de imagem local em todas as entradas;
5. separação explícita das categorias `Elásticos` e `Pernas para Taekwondo`.
