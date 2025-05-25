# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🧾 Pull Request & Issue Naming Conventions

To ensure consistent collaboration, traceability, and clean project history, we follow strict naming conventions for both **issues** and **pull requests (PRs)**.

This helps:

- ✅ Quickly understand the purpose of each PR  
- 🔍 Filter and search history easily  
- 🔗 Link issues and PRs together for better tracking  
- 💬 Improve clarity during code review and team discussions  

---

### 📌 Issue Naming Convention

Use the format:
```
[type] Short, clear description
```
#### 🔹 Common `type` keywords:

| Type       | Purpose                                        |
|------------|------------------------------------------------|
| `feat`     | New feature                                     |
| `fix`      | Bug fix                                         |
| `docs`     | Documentation update                            |
| `refactor` | Code restructuring (no behavior change)         |
| `test`     | Adding or modifying tests                       |
| `chore`    | Maintenance tasks (e.g., configs, dependencies) |
| `style`    | Code style, formatting, lint-only changes       |
| `perf`     | Performance improvements                        |

#### 🧪 Example Issues:

- `[feat] Add user registration form`
- `[fix] Handle null values in dashboard widget`
- `[docs] Update contribution guide`

---

### 🚀 Pull Request Naming Convention

Use the format:
```
#[issue-number] type(scope): short, imperative description
```

#### 🔹 Components:

- `#123` – The related issue number  
- `type` – Same as above (feat, fix, etc.)  
- `(scope)` – Optional: the affected module or domain (e.g. auth, dashboard)  
- Description – Written in **imperative mood** (e.g. "add", not "added")  

#### ✅ Example PRs:

- `#24 feat(auth): add password reset flow`
- `#78 fix(login): prevent crash on invalid input`
- `#55 refactor(ui): extract reusable Button component`
- `#12 chore: bump Vite to latest version`
- `#0 docs: improve README formatting`

> 💡 Use `Closes #123` in the PR description to automatically close the issue when merged.

---

### 💡 Why This Matters

- 🧠 Descriptive titles give reviewers and contributors instant context  
- 🔄 Linked PRs and issues make navigation easy  
- 🔍 Maintainers can audit and filter changes efficiently  
- 🧪 Promotes clean and meaningful Git history  




