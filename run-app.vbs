Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c electron .\"

oShell.Run strArgs, 0, false

