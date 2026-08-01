import logging
from typing import Literal

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

from app.settings import get_settings

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("familypantry.api")

settings = get_settings()

app = FastAPI(title="The Family Pantry API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.cors_origin],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    interest: Literal["buying", "partnering", "supplying", "hello"]
    message: str


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/contact")
def submit_contact(payload: ContactRequest) -> dict[str, str]:
    logger.info("Contact form submission: %s", payload.model_dump())
    return {"status": "received"}
