export const logEvent = (event, data) => {
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push({ event, data, timestamp: new Date().toISOString() });
  localStorage.setItem('logs', JSON.stringify(logs));
};