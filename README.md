# 🚀 Teste de Carga - Buscapé (K6)

Este projeto tem como objetivo avaliar o desempenho do endpoint de busca de produtos do site [Buscapé](https://www.buscape.com.br) sob alta carga de usuários, utilizando a ferramenta de testes de performance [K6](https://k6.io/).

---

## 🎯 Objetivo do Teste

Realizar um **teste de carga** simulando **1000 usuários simultâneos**, com o foco em:

- Medir o tempo médio de resposta
- Avaliar a taxa de sucesso vs. falhas
- Observar o comportamento do sistema sob estresse

---

## 📊 Resultados Obtidos

- ✅ **Total de requisições**: 1056
- ✅ **Sucesso (status 200)**: 348 (32.95%)
- ❌ **Falhas**: 708 (67.04%)
- ⏱ **Tempo médio de resposta**: 15.56 segundos
- ⏱ **P95 (95% das respostas mais rápidas)**: 22.67 segundos

---

## 🧠 Análise

O endpoint apresentou sinais de instabilidade sob carga intensa, com taxa de erro superior a 60% e tempo médio elevado. Isso indica que o sistema pode não estar preparado para grandes volumes simultâneos de acesso.

---

## 💡 Possíveis Melhorias

1. Otimização do backend para reduzir gargalos
2. Implementação de cache para buscas populares
3. Aplicação de controle de taxa (rate limiting)
4. Uso de balanceamento de carga e filas de requisições

---

## 📂 Relatório Completo

📄 [`Relatorio_Teste_Carga_Buscape.docx`](./Relatorio_Teste_Carga_Buscape.docx)

---

## 🛠 Como Rodar o Teste

### Pré-requisitos

- [Node.js (opcional para instalação via npm)](https://nodejs.org/)
- [K6 instalado](https://k6.io/docs/getting-started/installation/)

### Comando:

```bash
k6 run teste-buscape.js
