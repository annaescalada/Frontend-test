'use strict';

function main(){
    const ENTRY_POINT = '/';
    let layoutInstance = null;

    const rootElement = document.querySelector('#root');
    
    generateLayout();
    activateRouter();

    function generateLayout() {
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();
    
      }
    
    function activateRouter() {
        routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
    }
    
};



window.addEventListener('load', main);