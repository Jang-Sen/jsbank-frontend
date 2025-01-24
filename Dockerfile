FROM node:18-alpine

# 명확한 작업 디렉토리 설정
WORKDIR /usr/src/frontend

# 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 전체 소스 복사
COPY . .

# 포트 노출
EXPOSE 3000

# 실행 명령어
CMD ["npm", "start"]