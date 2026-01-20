/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'IYKYKnow AI',
    position: 'Junior Developer (Full-Stack / AI)',
    url: 'https://iykyknow.ai/',
    startDate: '2024-05',
    summary:
      'Full-stack + AI development at an edtech startup shipping production chatbots, retrieval APIs, and subscription provisioning.',
    highlights: [
      'Shipped a lesson-aware LMS chat experience with context-gated responses and a prompt-driven quiz engine (last 90 days: 336 queries, p50 2.1s / p95 4.3s end-to-end, ~100% non-error completion).',
      'Built a context-gated chatbot suite with LMS session handshake, debounced CASEL analysis, persistent history, and voice/TTS avatars.',
      'Developed a Chatbots API (FastAPI + LlamaIndex) featuring hybrid retrieval (BM25 + vectors) with RRF, streaming responses, entity search/detail, and switchable OpenAI/Anthropic providers.',
      'Implemented cost guardrails, usage accounting, and PII redaction; added contextual retrieval to reduce retrieval failures (per Anthropic reporting: 49–67% fewer failures).',
      'Built Stripe Checkout + webhook provisioning flows for partner microsites with Clerk auth and self-serve subscriptions.',
    ],
  },
  {
    name: 'Lowe’s',
    position: 'Sales Associate',
    url: 'https://www.lowes.com/',
    startDate: '2021-06',
    endDate: '2023-06',
    summary:
      'Supported customer needs, maintained inventory accuracy, and safely operated heavy equipment while completing dual engineering degrees.',
    highlights: [
      'Leveraged Lowe’s tuition reimbursement while completing dual engineering degrees.',
      'Assisted customers with product selection, troubleshooting, and project guidance.',
      'Performed inventory adjustments and restocking to improve availability.',
      'Safely operated heavy equipment to move and replenish materials.',
    ],
  },
];

export default work;
