function customRender(reactElement, container) { //creating our custom render function to render components.
        /*const domElement = document.createElement
        (reactElement.type)
        domElement.innerHTML = reactElement.children
        domElement.setAttribute('href', reactElement.props.href)
        domElement.setAttribute('target', reactElement.props.target)

        container.appendChild(domElement)
} */

        const domElement = document.createElement(reactElement.type) 
        domElement.innerHTML = reactElement.children
        for (const prop in reactElement.props) {
                if (prop === 'children') continue; 
                        domElement.setAttribute(prop, reactElement.props[prop])
        }
        container.appendChild(domElement)
}

const reactElement = {
        type: 'a',
        props: { //prop or property is a JS Object.
                href: 'https://example.com',
                target: '_blank'
        },
        children: 'Click to Visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)