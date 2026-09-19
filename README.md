# AI Application Developer Portfolio

A responsive personal portfolio built with React (JavaScript) and FastAPI (Python). It highlights an AI developer's profile, skills, selected projects, experience, hobbies, and contact details.

> The content is intentionally seeded with clear sample data. Replace it with your own details before publishing.

## Project structure

```text
frontend/       React + Vite single-page portfolio
backend/        FastAPI content API
render.yaml     Render deployment blueprint
```

## Run it locally

Open two terminals.

```bash
# terminal 1 — API
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

```bash
# terminal 2 — website
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`. The API will be available at `http://localhost:8000`, with interactive documentation at `/docs`.

## Personalize the content

Update the `PROFILE` dictionary in `backend/app/main.py` with your name, experience, actual project links/descriptions, social profiles, and email. The frontend includes equivalent demo content as an offline fallback in `frontend/src/App.jsx`, so update that too if the site must work with no backend.

## Deploy on Render

1. Push this folder to a GitHub repository.
2. In Render, select **New → Blueprint** and select the repository. It will detect `render.yaml` and create the API plus static React site.
3. Once the API gets its public URL, add a `VITE_API_URL` environment variable to the static site's Render settings (for example, `https://ai-portfolio-api.onrender.com`) and redeploy the static site.
4. Add `CORS_ORIGINS` to the API's Render settings with the final static-site URL (for example, `https://ai-developer-portfolio.onrender.com`), then redeploy the API.

For an even smaller static deployment, the React site already has local fallback content and can be hosted by itself on Netlify, Vercel, or GitHub Pages.
