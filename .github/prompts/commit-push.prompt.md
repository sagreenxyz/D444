---
description: "Stage all changes, commit with an AI-generated Conventional Commits message, and push to origin main"
name: "Commit and Push"
argument-hint: "Optional extra context about the changes"
agent: "agent"
tools: [runInTerminal, changes]
---
Stage all changes, commit them with an AI-generated commit message, and push to the `origin main` branch on GitHub.

Follow these steps exactly:

1. Run `git status --short` and `git diff --stat` to review what has changed. If there are no changes, stop and report that there is nothing to commit.
2. Run `git add -A` to stage all changes (new, modified, and deleted files).
3. Review the staged diff with `git diff --cached` to understand the changes and write an accurate commit message.
4. Generate a commit message in **Conventional Commits** format:
   - Subject line: `<type>(<optional scope>): <short imperative summary>` where `<type>` is one of `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, or `revert`.
   - Keep the subject line under 72 characters and in the imperative mood (e.g. "add", not "added").
   - Add a body only when the change needs explanation. Separate it from the subject with a blank line and wrap lines at ~72 characters.
   - Do not include any "Co-authored-by" or AI attribution lines.
5. Commit using the generated message. Use a multi-line commit with separate `-m` flags for subject and body, e.g. `git commit -m "feat: ..." -m "body..."`.
6. Push with `git push origin main`. If the current branch is not `main`, warn the user and ask before pushing.
7. Report the final commit hash and confirm the push succeeded. If the push fails (e.g. rejected, needs a pull, or authentication error), report the exact error and stop — do not force push.
