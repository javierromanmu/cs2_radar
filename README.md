# cs2_radar

<div align="center">

[![Last Update](https://img.shields.io/github/last-commit/javierromanmu/cs2_radar/main?path=static/manifest.txt&label=Last%20Update&color=brightgreen&style=flat-square)](https://github.com/javierromanmu/cs2_radar/commits/main)
[![Map Count](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/javierromanmu/cs2_radar/main/data/available.json&query=$.count&label=Maps&color=orange&style=flat-square)](data/available.json)

**Automatically updated Counter-Strike 2 map icons, radar overheads, in-game thumbnails and overview/radar config data, scraped directly from the official game depot whenever Valve pushes an update.**

</div>

Undetected Counter-Strike 2 browser-based radar cheat updated

## Requirements
- [Node.js](https://nodejs.org/en/download)
- [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/)
- [vcpkg](https://vcpkg.io/en/)

## Usage
- In `webapp`, run `npm install` to install dependencies
- In `webapp`, run `npm run dev` to start the webapp
- In `usermode` project, run `cs2_webradar.sln`
- In visual studio's toolbar, hover on `Build` and press `Build Solution` or press `Ctrl + Shift + B`
- In `release` folder, run `usermode.exe` and, in your browser navigate to `localhost:5173` <br>

## Sharing
> [!TIP]
- After you built `usermode` project, open `config.json` and set `m_ip` to your public IP
- In `webapp` project, `app.jsx`, change `USE_LOCALHOST` to `0` and set `PUBLIC_IP` to your public IP
- In `cmd`, type `ipconfig`, find `Default Gateway` and navigate to it in your browser
- In your router configuration, find `Port Forwarding` tab and forward port `22006/tcp` and `5173/tcp`
- Now your friends can see the radar by navigating to `Your public IP:5173`


## License
This project is licensed under the [GPL-3.0 license](https://github.com/javierromanmu/cs2_radar?tab=GPL-3.0-1-ov-file#readme)