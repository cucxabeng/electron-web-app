# Electron Web App  

**Version 0.1.0**

Run a web app or page on the desktop using Electron.

## Configuration

Edit ```config.json``` to configure which web page to load in 
Electron, with which title.

The default web page is Google Play Music

## Starting the App

On Windows, if you have electron installed in your path, you can run

```
run-app.vbs
```

Or just run 

```
electron.exe .\index.html
```

If it is not in the path, you can use:

```
[path_to]\electron.exe [path_to_this_dir]\index.html
```

You can also create a shortcut to run that command for you.


## Limitations

Currently no way to customize the icon of the running program. It will
use the Electron icon.

## Dependencies

  * Electron ( for example, v1.2.5 )
    * this needs to be downloaded separately
  * jQuery 3.0.0 (included)

