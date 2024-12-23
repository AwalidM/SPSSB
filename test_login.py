import requests

class TestLogin:
    base_url = "http://localhost:8000"

    def test_valid_login(self):
        response = requests.post(f"{self.base_url}/login", data={"username": "user", "password": "password123"})
        assert response.status_code == 200
        assert "home.html" in response.text

    def test_invalid_login(self):
        response = requests.post(f"{self.base_url}/login", data={"username": "invalid_user", "password": "wrong_password"})
        assert response.status_code == 401
        assert "Invalid Username or Password" in response.text
