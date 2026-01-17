# 採用LP コンテンツ更新（かんたん手順）

このリポジトリは **採用LP用の簡易CMS** です。
更新は必ず以下の流れで行ってください。

※要Githubアカウント(登録よろしくです)

---

## 更新の流れ（これだけ）

```
Issue作成
 ↓
Issueからブランチ作成
 ↓
Markdown編集
 ↓
Pull Request作成
 ↓
レビュー後、自動反映
```

---

## 1. Issueを作る

- GitHubの **Issues** → **New issue**
- 「求人情報追加」「Wantedly記事追加」など内容を書く

---

## 2. Issueからブランチを作る

- Issue画面右側の **Create a branch**
- base は `main` のままでOK

⚠️ **main ブランチは直接編集しない**

---

## 3. Markdownを編集する

- GitHub上で ✏️ アイコンから編集
- 編集OK：
  - `src/content/**` の `.md` ファイル
  - `src/content/settings/settings.md`（ページ設定の更新用）

- 編集NG：
  - `src/pages/`
  - `src/components/`
  - 上記以外の設定ファイル類

---

## 4. 編集時の注意（重要）

- 先頭の `---`（frontmatter）を消さない
- `title:` や `url:` の `:` の後は半角スペース
- URLは `https://` から書く

---

## 5. Pull Requestを作る

- **Pull requests** → **New pull request**
- base: `main`
- PRテンプレに沿って記入し、作成

---

## 6. 反映について

- PR作成後、自動チェックが走る
- レビューOK → merge
- **merge後、自動で本番サイトに反映**

---

## 困ったら

- 無理に直さず、IssueやPRのコメントで相談してください

---

## 禁止事項

- ❌ main への直接編集・push
- ❌ 設定ファイルの編集（`src/content/settings/settings.md` を除く）
- ❌ CIエラーを無視したmerge
