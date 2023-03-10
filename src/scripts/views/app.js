import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

// eslint-disable-next-line require-jsdoc
class App {
  // eslint-disable-next-line require-jsdoc
  constructor({button, drawer, content, header}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._header = header;

    this._initialAppShell();
  }

  // eslint-disable-next-line require-jsdoc
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      header: this._header,
    });
  }

  // eslint-disable-next-line require-jsdoc
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
