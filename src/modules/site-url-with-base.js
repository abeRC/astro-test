import URL from 'core-js-pure/actual/url'
import path from 'path'

const site_url = import.meta.env.PROD ? import.meta.env.SITE : 'http://localhost:3000';
const url_base = import.meta.env.BASE_URL;
console.log(`base is ${url_base}`)
const site_url_with_base = new URL(url_base, site_url);

/**
 * @description Join `href` to the site URL while attempting to preserve the base.
 * @param {string} href 
 * @returns {URL} A URL object created from `import.meta.env.SITE` and the combined paths
 * of `import.meta.env.BASE_URL` and `href`.
 */
function joinUrlKeepBase(href) { 
    let newhref;
    console.log(`href: ${href}`);
    if (URL.canParse(href)){
        // don't mess with absolute URLs
        console.log("no change")
        newhref = href;
    } else {
        // make sure relative URLs include the base
        const new_pathname = path.join(url_base, href);
        console.log(`newpath: ${new_pathname}`);
        newhref = new URL(new_pathname, site_url);
    }
    console.log(`newhref: ${newhref}`);
    return newhref;
}

export {site_url_with_base, joinUrlKeepBase};