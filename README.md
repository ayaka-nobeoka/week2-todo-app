# week2-todo-app

# 🐣 Week 2：Todo アプリ計画書

## 📌 概要

React + TypeScript でシンプルな Todo アプリを作成します。  
配列を使った状態管理と CRUD（追加・削除・完了）機能を実装し、さらに localStorage を使ってデータの永続化にも挑戦します。

---

## 🔧 使用技術

- React
- TypeScript
- localStorage

---

## 🎯 目標

- [x] React（コンポーネント分割、props、state）
- [x] TypeScript で型安全に実装
- [x] 配列を使った CRUD（追加・削除・完了）
- [x] localStorage でデータを保存・復元

---

## 🛠️ 実装機能

### 1. Todo 追加

- テキスト入力欄
- 「追加」ボタンで Todo を配列に追加

### 2. Todo 削除

- 削除ボタンで配列から該当の Todo を削除

### 3. Todo 完了

- チェックボックスで完了ステータス（completed）を切り替え

### 4. localStorage 保存

- useEffect で初期データを読み込み
- useEffect でデータを保存（JSON.stringify / JSON.parse）

---

## 🗂️ ディレクトリ構成（例）

src/
├── components/
│ ├── TodoItem.tsx
│ └── TodoList.tsx
├── App.tsx
└── index.tsx

---

## 🔑 型定義例

```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
```
