const todoLogger = () => next => (action) => {
  console.log('Logged action', action);
  next(action);
};

export default todoLogger;
