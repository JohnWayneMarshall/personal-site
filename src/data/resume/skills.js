const skills = [
  // Programming Languages — Proficient
  { title: 'TypeScript', competency: 5, category: 'Proficient Programming Languages' },
  { title: 'JavaScript', competency: 5, category: 'Proficient Programming Languages' },
  { title: 'Python', competency: 5, category: 'Proficient Programming Languages' },

  // Programming Languages — Prior Experience
  { title: 'C', competency: 3, category: 'Prior Experience Programming Languages' },
  { title: 'C++', competency: 3, category: 'Prior Experience Programming Languages' },
  { title: 'Java', competency: 3, category: 'Prior Experience Programming Languages' },
  { title: 'Assembly', competency: 3, category: 'Prior Experience Programming Languages' },
  { title: 'R', competency: 3, category: 'Prior Experience Programming Languages' },
  { title: 'MATLAB', competency: 3, category: 'Prior Experience Programming Languages' },

  // Technologies
  { title: 'React', competency: 5, category: 'Technologies' },
  { title: 'Next.js', competency: 5, category: 'Technologies' },
  { title: 'Tailwind CSS', competency: 5, category: 'Technologies' },
  { title: 'Material Tailwind', competency: 3, category: 'Technologies' },
  { title: 'Radix UI', competency: 3, category: 'Technologies' },
  { title: 'SEO', competency: 3, category: 'Technologies' },

  { title: 'Node.js', competency: 4, category: 'Technologies' },
  { title: 'Express', competency: 4, category: 'Technologies' },
  { title: 'FastAPI', competency: 4, category: 'Technologies' },
  { title: 'REST APIs', competency: 4, category: 'Technologies' },

  { title: 'PostgreSQL', competency: 4, category: 'Technologies' },
  { title: 'MongoDB', competency: 4, category: 'Technologies' },
  { title: 'SQL', competency: 4, category: 'Technologies' },
  { title: 'SQLAlchemy', competency: 4, category: 'Technologies' },
  { title: 'ChromaDB', competency: 3, category: 'Technologies' },

  { title: 'LLMs', competency: 4, category: 'Technologies' },
  { title: 'Prompt Engineering', competency: 4, category: 'Technologies' },
  { title: 'RAG', competency: 4, category: 'Technologies' },
  { title: 'LlamaIndex', competency: 4, category: 'Technologies' },
  { title: 'Hybrid Retrieval (BM25 + vectors)', competency: 3, category: 'Technologies' },
  { title: 'Query Rewriting', competency: 3, category: 'Technologies' },
  { title: 'Neural Re-ranking', competency: 3, category: 'Technologies' },

  { title: 'OAuth 2.0', competency: 3, category: 'Technologies' },
  { title: 'JWT', competency: 3, category: 'Technologies' },
  { title: 'Clerk', competency: 3, category: 'Technologies' },
  { title: 'Stripe Checkout', competency: 3, category: 'Technologies' },
  { title: 'Webhooks', competency: 3, category: 'Technologies' },
  { title: 'Mailgun', competency: 2, category: 'Technologies' },

  { title: 'Azure', competency: 3, category: 'Technologies' },
  { title: 'Docker', competency: 4, category: 'Technologies' },
  { title: 'Vercel', competency: 4, category: 'Technologies' },

  { title: 'Git', competency: 5, category: 'Technologies' },
  { title: 'GitHub', competency: 5, category: 'Technologies' },
  { title: 'GitHub Actions (CI/CD)', competency: 4, category: 'Technologies' },
  { title: 'Linux/Unix', competency: 4, category: 'Technologies' },

  { title: 'Pandas', competency: 3, category: 'Technologies' },
  { title: 'NumPy', competency: 3, category: 'Technologies' },
  { title: 'Matplotlib', competency: 3, category: 'Technologies' },

  { title: 'ElevenLabs', competency: 2, category: 'Technologies' },
  { title: 'HeyGen', competency: 2, category: 'Technologies' },
];

// this is a list of colors that I like. The length should be === to the
// number of categories. Keep the order aligned with the first appearance above.
const colors = [
  '#6968b3', // Proficient Programming Languages
  '#37b1f5', // Prior Experience Programming Languages
  '#40494e', // Technologies
];

const categories = [...new Set(skills.map(({ category }) => category))].map(
  (category, index) => ({
    name: category,
    color: colors[index],
  })
);

export { categories, skills };
