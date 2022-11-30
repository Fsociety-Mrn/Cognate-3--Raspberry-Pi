# Cognate-3--Raspberry

pip install the necessary packages

```shell
pip install pipreqs
```

```shell
pip install Pyrebase4
```

```shell
pip install python-dotenv
```

then run the 
### main.py



## NOTE:

please make a simple light switch on raspberry and click this [ Link ](https://cognate-3-raspberrypi.web.app/) this is a demo website.





# IGNORE THIS COMMENT FOR THE MEANTIME

## Download this pipreqs using this command
```shell
pip install pipreqs
```
#### after installing this packages open the folder location Cognate-3--Raspberry-Pi via terminal
in Raspbery run this command 
```shell
pip install pipreqs
```


## open the folder and run main.py
```shell
pip freeze >> requirements.txt
```
```shell
pipreqs . --force
```
```shell
pip install -r requirements.txt
```

### AUTORUN APPLICATION on Raspberry Pi

create a folder autostart and creates start.desktop

```shell
[Desktop Entry]
Encoding=UTF-8
Type=Application
Name=<GUI Controller>
Comment=
Exec= python3 /location/python/script.py
StartupNotify=false
Terminal=true
Hidden=false 
```

after reboot paste this code on start.desktop
```shell
[Desktop Entry]
Exec= python3 /location/python/script.py
```

