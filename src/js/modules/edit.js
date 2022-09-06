function edit(){


    document.querySelectorAll('textarea').forEach(element => {
        element.addEventListener('keyup', updateIframe);
    });
    
    function updateIframe(){
        const mountedPoint = document.querySelector('[data-iframe]');
        const html = document.querySelector('.square-html>textarea').value;
        const css = document.querySelector('.square-css>textarea').value;
    
        const page = `${html}<style>${css}</style>`;
        const iframe = document.createElement('iframe');
    
        iframe.src = 'data:text/html;charset=utf-8,' + page;
    
        mountedPoint.innerHTML = '';
        mountedPoint.append(iframe);
    }
    

}
export default edit();