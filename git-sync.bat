@echo off
setlocal

:: Change this to your commit message or leave blank for prompt
set "commitMessage=code pushed"

:: Ask for commit message (optional)
set /p userInput="Enter commit message (or press Enter to use default): "
if not "%userInput%"=="" set commitMessage=%userInput%

:: Add all files
git add .

:: Commit changes
git commit -m "%commitMessage%"

:: Push to the current branch (assumes it's main or you're on a branch already set to track remote)
git push

echo.
echo ✅ Code pushed to GitHub successfully!
pause
