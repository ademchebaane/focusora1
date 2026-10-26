# Focusora

Focusora is a friendly study app for studying **with friends**, building shared goals, focusing together, managing tasks, and seeing progress.

## Features
- Attractive responsive UI for desktop and Android
- Friends and friend requests
- Private study groups with invite codes
- Shared group targets where everyone contributes study time
- Personal and shared goals
- 25 / 50 / 90 minute focus modes
- Tasks and completion tracking
- Statistics and friend rankings
- Offline-first demo data with localStorage
- Supabase SQL schema included for online accounts and synchronized data
- GitHub Actions workflow that builds a debug APK automatically

## Build the APK on GitHub
1. Create a GitHub repository.
2. Upload all files from this project.
3. Push to `main`.
4. Open **Actions**.
5. Select **Build Focusora Android APK**.
6. Run the workflow or push a commit.
7. When it finishes, download the `focusora-debug-apk` artifact.

The Android folder is generated during CI. It is intentionally not committed to keep the repository simple.

## Local web preview
```bash
npm install
npm run build
```
Then open `index.html` in a browser.

## Online database
`supabase.sql` contains the database tables and RLS policies for profiles, friendships, groups, members, goals, study sessions and tasks.

The included interface currently works immediately in local/demo mode. Supabase credentials and synchronization can be connected next without changing the APK build pipeline.
