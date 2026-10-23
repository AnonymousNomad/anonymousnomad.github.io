const root = document.querySelector('[data-guide]');

if (root) {
  const form = root.querySelector('[data-guide-form]');
  const input = root.querySelector('[data-guide-input]');
  const messages = root.querySelector('[data-guide-messages]');
  const status = root.querySelector('[data-guide-status]');
  const suggestions = root.querySelectorAll('[data-question]');

  const addMessage = (role, text) => {
    const node = document.createElement('div');
    node.className = `message ${role}`;
    node.textContent = text;
    messages.appendChild(node);
    messages.scrollTop = messages.scrollHeight;
  };

  const setBusy = (busy) => {
    input.disabled = busy;
    form.querySelector('button').disabled = busy;
    status.textContent = busy ? 'Thinking…' : 'Guide ready';
  };

  const ask = async (question) => {
    const value = question.trim();
    if (!value) return;

    addMessage('user', value);
    input.value = '';
    setBusy(true);

    try {
      const response = await fetch('/api/guide', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: value })
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || 'The guide is unavailable right now.');
      }

      addMessage('assistant', payload.answer || 'I do not have an answer for that yet.');
    } catch (error) {
      addMessage('error', error.message || 'The guide is unavailable right now.');
    } finally {
      setBusy(false);
      input.focus();
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    ask(input.value);
  });

  for (const button of suggestions) {
    button.addEventListener('click', () => ask(button.dataset.question || ''));
  }
}