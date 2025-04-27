# useEffect

It is a react hook
It lets you run side Effects in your components 

SideEffect = Something that happens outside of React's normal rendering, like fetching data from an API

Setting up a subscription
Changing the Dom Manually 
Starting a timer

#### Render = Update the virtual DOM.

*syntax*
```````````````````````````jsx
useEffect(()=>{
    // code you want to run
}, [dependence])

`````````````````````````````

## Types
``````````````````````````````````
1. useEffect(()=>{...}) = runs after every render
2. useEffect(()=>{...}, []) = runs only once (like mounting, []-> empty Array)
3. useEffect(()=>{...}[variable])= runs only when variable changes
```````````````````````````````````````````

### Life cycle Methods
1. Mounting = Component is created and added to the DOM
2. Updating = Component's state or props Change -> re-render
3. Unmounting = Component is removed from the DOM


## Clean up in useEffect

`````````````````````````````````````jsx
useEffect(()=>{
  const interval = setInterval(()=>console.log('tick'), 1000)
  return ()=> clearInterval(interval); //Cleanup
}, [])

````````````````````````````````````````
Here, we're starting an interval When the component mounts we also clean it up when the component unmounts, to prevent memory leaks.

Example-2
``````````````````````````````````jsx
useEffect(()=>{
    window.addEventListner('resize', handleResize);
    return()=>{
        window.removeEventListner('resize', handleResize)
    };
}, [])
````````````````````````````````````````