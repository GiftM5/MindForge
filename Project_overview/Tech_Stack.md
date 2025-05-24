### 🛠️ **Tech Stack & Structure**

#### ✅ Frontend (mobile-first)

* **React Native** (for cross-platform app)
* **Tailwind CSS** or Expo styling system

#### ✅ Backend

* **FastAPI** (Python-based, lightweight, great with OpenAI)
* **PostgreSQL** (structured reward/entry storage)
* **SQLAlchemy** (ORM)

#### ✅ AI Integration

* **OpenAI API**: ChatGPT-like responses with custom prompts
* Prompt layering system to delay full answers

#### ✅ Project Structure Example

```
mindforge/
├── app/
│   ├── api/ (routes)
│   ├── models/ (User, Prompt, Reward)
│   ├── schemas/ (Pydantic models)
│   ├── services/ (AI, prompt handlers)
│   └── core/ (configs, db)
├── frontend/
│   └── src/ (React Native app)
└── docs/
```
