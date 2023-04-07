import Browser from 'webextension-polyfill';

export function isValidPage(tab: Browser.Tabs.Tab | undefined): boolean{
    if (tab == null || tab == undefined || !tab.url || !tab.id) return false;

    if ((tab.url.indexOf('http:') == -1 && tab.url.indexOf('https:') == -1)
            || tab.url.indexOf('chrome://') !== -1
            || tab.url.indexOf('chrome-extension://') !== -1)
            return false;
        return true;
}