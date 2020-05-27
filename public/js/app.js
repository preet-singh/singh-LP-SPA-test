window.addEventListener('load', () => {
    const el = $('#app');
  
    // Compile Handlebar Templates
    const errorTemplate = Handlebars.compile($('#error-template').html());
    const indexTemplate = Handlebars.compile($('#index-template').html());
    const supportTemplate = Handlebars.compile($('#support-template').html());
    const careTemplate = Handlebars.compile($('#care-template').html());
    const page1Template = Handlebars.compile($('#page1-template').html());
    const page2Template = Handlebars.compile($('#page2-template').html());
    const page3Template = Handlebars.compile($('#page3-template').html());
    const randomTemplate = Handlebars.compile($('#random-template').html());
  
    // Router Declaration
    const router = new Router({
        mode: 'history',
        page404: (path) => {
        const html = errorTemplate({
            color: 'yellow',
            title: 'Error 404 - Page NOT Found!',
            message: `The path '/${path}' does not exist on this site`,
        });
        el.html(html);
        },
    });
    
    router.add('/', () => {
        let html = indexTemplate();
        el.html(html);
    });
    
    router.add('/support', () => {
        let html = supportTemplate();
        el.html(`${html}`);
    });
    
    router.add('/care', () => {
        let html = careTemplate();
        el.html(html);
    });

    router.add('/page1', () => {
        let html = page1Template();
        el.html(html);
    });

    router.add('/page2', () => {
        let html = page2Template();
        el.html(html);
    });

    router.add('/page3', () => {
        let html = page3Template();
        el.html(html);
    });

    router.add('/random', () => {
        let html = randomTemplate();
        el.html(html);
    });
    
    // Navigate app to current url
    router.navigateTo(window.location.pathname);
    
    // Highlight Active Menu on Refresh/Page Reload
    const link = $(`a[href$='${window.location.pathname}']`);
    link.addClass('active');
    
    $('a').on('click', (event) => {
        // Block browser page load
        event.preventDefault();
    
        // Highlight Active Menu on Click
        const target = $(event.target);
        $('.item').removeClass('active');
        target.addClass('active');
    
        // Navigate to clicked url
        const href = target.attr('href');
        const path = href.substr(href.lastIndexOf('/'));
        router.navigateTo(path);
    });
});

