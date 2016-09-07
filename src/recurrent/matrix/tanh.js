/**
 * @param {Matrix} into
 * @param {Matrix} m
 */
export default function tanh(into, m) {
  // tanh nonlinearity
  for(var i = 0, n = m.weights.length; i < n; i++) {
    into.weights[i] = Math.tanh(m.weights[i]);
    into.recurrence[i] = 0;
  }
}