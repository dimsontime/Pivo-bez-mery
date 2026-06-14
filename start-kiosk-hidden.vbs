Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
shell.Run "cmd /c """ & scriptDir & "\start-kiosk.bat""", 0, False
