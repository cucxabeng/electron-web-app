Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c electron.exe .\index.html"

oShell.Run strArgs, 0, false

