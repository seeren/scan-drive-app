import { Service } from 'appable';

export const MetaService = new class extends Service {

    update(routeName, translation) {
        window.document.title = `${translation.get(routeName).meta.title} - ${translation.get('app').title}`;
        window.document.querySelector('link[rel="canonical"]').setAttribute('href', window.location.href);
        window.document.querySelector('meta[property="og:title"]').setAttribute('content', window.document.title);
        window.document.querySelector('meta[name="description"]').setAttribute('content', translation.get(routeName).meta.description);
        window.document.querySelector('meta[property="og:description"]').setAttribute('content', translation.get(routeName).meta.description);
        window.document.querySelector('meta[name="keywords"]').setAttribute('content', translation.get(routeName).meta.keywords);
        window.document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
    }

    setImage(src) {
        window.document.querySelector('meta[property="og:image"]').setAttribute(
            'content',
            `${window.location.origin}/${src}`,
        );
    }

    preventInternalLink() {
        window.document.querySelectorAll('a').forEach((a) => {
            if (-1 !== a.href.indexOf(window.location.origin)) {
                a.addEventListener('click', (e) => e.preventDefault());
            }
        });
    }

}();
