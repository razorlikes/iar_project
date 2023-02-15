import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
describe('workspace-project App', () => {
    let page: AppPage;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    beforeEach(() => {
        page = new AppPage();
    });

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    it('should display welcome message', async () => {
        await page.navigateTo();
        expect(await page.getTitleText()).toEqual('app app is running!');
    });

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
