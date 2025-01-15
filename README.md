# YouTube Ad Muter and Blurrer

A lightweight Chrome extension to automatically mute and blur YouTube ads, with an experimental feature to skip ads.

---

## Features

- Mutes video ads on YouTube.
- Blurs video during ad playback.
- Attempts to skip ads when the "Skip Ad" button appears (experimental).

---

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/youtube-ad-muter.git
   ```
2. Go to `chrome://extensions/` in Chrome.
3. Enable **Developer Mode** (top-right corner).
4. Click **Load unpacked** and select the folder containing `manifest.json`.

---

## How It Works

- Detects ads via YouTube's `ad-showing` class.
- Mutes and blurs the video during ads.
- Monitors for the "Skip Ad" button and attempts to click it.

---

## Notes

- Ad skipping is experimental and may not always work.
- Contributions are welcome via pull requests.

<!-- ---

## License

This project is licensed under the [MIT License](LICENSE). -->
