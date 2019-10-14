#!python
#!C:\Python37\python.exe

import subprocess

# if the script don't need output.
subprocess.call("php C:\js\oumae\src\http.py")

# if you want output
proc = subprocess.Popen("php C:\js\oumae\src\http.py", shell=True, stdout=subprocess.PIPE)
script_response = proc.stdout.read()