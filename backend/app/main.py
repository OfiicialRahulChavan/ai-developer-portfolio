"""Small API for the AI Application Developer portfolio.

Replace the sample values in PROFILE with your own details.  The React client
uses this endpoint at runtime, so content can later move to a database or CMS
without changing the UI.
"""

import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Developer Portfolio API", version="1.0.0")

# During development, React runs on port 5173. In production set
# CORS_ORIGINS to the comma-separated URL(s) of the deployed website.
allowed_origins = os.getenv(
    "CORS_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173,https://ai-developer-portfolio-msmm.onrender.com",
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

PROFILE = {
    "name": "Rahul Chavan",
    "role": "AI Application Developer",
    "location": "Bengaluru, India",
    "availability": "Open to exciting opportunities",
    "tagline": "I turn complex AI capabilities into useful, human-centered products.",
    "intro": "I design and ship AI applications that feel as reliable as the software people already trust. From retrieval systems to agentic workflows, I care equally about model quality, product clarity, and the people using it.",
    "email": "hello@rahul.dev",
    "resumeUrl": "#contact",
    "github": "https://github.com/",
    "linkedin": "https://www.linkedin.com/",
    "stats": [
        {"value": "4+", "label": "years building products"},
        {"value": "12", "label": "AI solutions shipped"},
        {"value": "99.9%", "label": "uptime target"},
    ],
    "skills": [
        {"group": "AI engineering", "items": ["LLM applications", "RAG systems", "Agent workflows", "Prompt engineering", "Evaluations"]},
        {"group": "Product & backend", "items": ["Python", "FastAPI", "Django", "PostgreSQL", "REST APIs"]},
        {"group": "Frontend & cloud", "items": ["React", "JavaScript", "Docker", "AWS", "CI/CD"]},
    ],
    "experience": [
        {"period": "2024 — Now", "role": "Senior AI Application Developer", "company": "Your Current Company", "description": "Leading the design and delivery of production AI experiences, from discovery through measurable adoption.", "tags": ["LLM systems", "FastAPI", "React"]},
        {"period": "2022 — 2024", "role": "AI / Full-stack Developer", "company": "Previous Company", "description": "Built intelligent workflows that reduced manual work and made internal knowledge easier to access.", "tags": ["Python", "RAG", "AWS"]},
        {"period": "2020 — 2022", "role": "Software Developer", "company": "Earlier Experience", "description": "Created dependable web products and APIs while growing a strong foundation in thoughtful engineering.", "tags": ["JavaScript", "Django", "SQL"]},
    ],
    "projects": [
        {"number": "01", "title": "Knowledge Copilot", "type": "RAG assistant", "description": "A source-grounded assistant that helps teams find, compare, and act on company knowledge with confidence.", "outcome": "42% faster answers", "tags": ["Python", "FastAPI", "Vector search"], "accent": "violet"},
        {"number": "02", "title": "Support Signal", "type": "AI operations", "description": "An AI triage workspace that turns incoming support conversations into prioritized, actionable themes.", "outcome": "31% less manual triage", "tags": ["React", "LLMs", "PostgreSQL"], "accent": "lime"},
        {"number": "03", "title": "Career Canvas", "type": "Personalized learning", "description": "A guided career-planning product that transforms goals and experience into tailored learning paths.", "outcome": "Top 3 hackathon finalist", "tags": ["Django", "OpenAI API", "Docker"], "accent": "orange"},
    ],
    "hobbies": [
        {"icon": "⌁", "title": "Making things", "text": "Prototyping tiny ideas, one weekend at a time."},
        {"icon": "◒", "title": "Long walks", "text": "The best way I know to untangle a hard problem."},
        {"icon": "♜", "title": "Strategy games", "text": "Always curious about systems, trade-offs, and play."},
    ],
}


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/api/profile")
def get_profile():
    return PROFILE
