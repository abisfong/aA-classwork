export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveTodos = (steps) => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveTodo = (step) => ({
  type: RECEIVE_STEP,
  step
});

export const removeTodo = (step) => ({
  type: REMOVE_STEP,
  step
});