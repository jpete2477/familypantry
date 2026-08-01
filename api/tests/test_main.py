from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_contact_accepts_valid_payload():
    response = client.post(
        "/api/contact",
        json={
            "name": "Jane Doe",
            "email": "jane@example.com",
            "interest": "hello",
            "message": "Excited to join the family!",
        },
    )
    assert response.status_code == 200
    assert response.json() == {"status": "received"}


def test_contact_rejects_invalid_email():
    response = client.post(
        "/api/contact",
        json={
            "name": "Jane Doe",
            "email": "not-an-email",
            "interest": "hello",
            "message": "Hi",
        },
    )
    assert response.status_code == 422
