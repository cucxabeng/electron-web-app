# Electron Web App  

**Version 0.1.1**

Run a web app or page on the desktop using Electron.

## Configuration

Edit ```config.json``` to configure which web page to load in 
Electron, with which title.

You can also set the initial *width* and *height* of the electron
window to be opened.

The default web page is Google Play Music


To change the icon, replace ```resources/favicon.png``` with your
icon, in PNG format.


## Starting the App

On Windows, if you have electron installed in your path, you can run

```
run-app.vbs
```

Or just run 

```
electron.exe .\
```

If it is not in the path, you can use:

```
[path_to]\electron.exe [path_to_this_dir]\index.html
```

You can also create a shortcut to run that command for you.


## Dependencies

  * Electron ( for example, v1.2.5 )
    * this needs to be downloaded separately
  * jQuery 3.0.0 (included)



## Changes

### Version 0.1.1

  - The app now uses the icon from ```resources/favicon.png```
  - The app now reads initial window width and height values
    from ```config.json```.

