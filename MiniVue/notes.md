# Vue Core
## Reactivity Module
> create JS reactive objects that can be watched for changes
## Compiler Module
> take HTML templates and compile them into render funtions
> can happen both in the browser at runtime and whenna vue project is built
## Renderer Module
- Render phase
- Mount Phase
- Patch Phase


# Virtual Dom
> Decouples rendering logic from the actual Dom - makes it straightforward to reuse the runtime of the framework in non-browser environment, e.g. rendering to a string(SSR), rendering to canvas/WebGL or native mobile rendering

- create customized rendering solutions / direct into webGL
- custom renderer API a first-class API / vue runtime core as denpendicy

> provides the ablility to programmatically construct, inspect, clone and create derivative structures (manipulate a desired DOM structure before returing it to the rendering engine) using the full power of javascript

