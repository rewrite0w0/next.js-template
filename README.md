# Next.js template

## 설치

```
npm i
yarn
```

## 디버그

```
npm run dev
yarn dev
```

## 구조

```bash
+---.storybook # 스토리북
+---app # next.js 13에서 app router
+---components # 컴포넌트
+---config # 설정파일
+---features # 분리한 feature 관리
├─index.ts # 모음
├─api # api 관련 정보, UI와 분리
├─components # feature 관련 컴포넌트 관리
└─types # feature의 타입 정의
+---lib # 라이브러리 설정 관리
+---providers # 애플리케이션 전체를 wrap할 것 정의하는 곳
+---public # svg 같은 공공 자원 관리
+---stores # 글로벌 State 관리
+---stories # 스토리북
+---testing # 테스트 관련 목 데이터나 함수 등
+---types # 애플리케이션에서 사용되는 TS 정의
+---utils # 편의 함수
+---__tests__
```

## husky

### push

main이나 master에 직접 푸시 방지

`.husky/pre-push`에서 `FORBIDDEN_HTTPS_URL="https://github.com/[id]/[project-name].git"`, `FORBIDDEN_SSH_URL="git@github.com:[id]/[project-name].git"` 여기를 본인 레포지토리로 변경

### commit-msg

`commitlint` 규칙에 따라 메세지 남겨야함

### pre-commit

커밋할 때 동작할 것

## 참조

- [Next.js](https://nextjs.org/docs/app/building-your-application/routing)
- [Next.js 13.4](https://nextjs.org/blog/next-13-4#nextjs-app-router)
- [nextjs-fullstack-app-template](https://github.com/alexeagleson/nextjs-fullstack-app-template)
- [React Application Architecture for Production](https://github.com/PacktPublishing/React-Application-Architecture-for-Production)
- [React Application Architecture for Production〜これ一冊で全てが網羅〜](https://qiita.com/taisei-13046/items/64f764ad2d2caaf4d7d4)
- [Next.js 13 app directory で記事投稿サイトを作ってみよう](https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial)
