export function arrayButtonForLevelTwoAndThree()
{
        return Array.from(document.querySelectorAll('[id^="word"]'))
                     .filter(el => /^\s*word\d/.test(el.id));
}