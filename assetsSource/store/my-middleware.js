const myMiddleware = (store) => (next) => (action) =>  {
    console.log('my-middleware', action.type, action.payload);
    next(action);
};
export {myMiddleware}