Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c ..\electron-v1.2.5-win32-x64\electron.exe .\index.html"

oShell.Run strArgs, 0, false

