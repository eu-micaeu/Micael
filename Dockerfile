# Usar Node 20 (Vite exige 20+)
FROM node:20-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

# Expor a porta (Vite usa 5173 por padrão)
EXPOSE 5173

CMD ["npm", "run", "dev"]
