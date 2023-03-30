# 💳 HomiPay
## _A FullStack Project Focused on API Using DRF and Payment Using Stripe_

## Technologies
- Django
- DRF
- Stripe
- React
- HTML / CSS
- Bootstrap

## Getting Started (Stripe Account)
- Create Account on [Stripe](https://stripe.com)
- Enable Test Mode
- Click on "Developers" and then "API keys"
- Copy Your Secret Key
- Click on "Products" and create a product
- Copy Price ID

## Getting Started (Clone and Config [BACKEND]) 
- Clone The Project
```bash
  git clone https://github.com/HomiCode/HomiPay.git
```
- Go to The Project Directory
```bash
  cd backend
```
- Install Virtual Environment
```bash
  python -m venv venv
 ```
 - Activate The Virtual Environment
#### Wndows 💻
```bash
  ./venv/scripts/activate
 ```
 #### MacOS 🍎
 ```bash
  source venv/bin/activate
 ```
 - Install Requirements
 ```bash
  pip install -r requirements.txt
 ```
 
 - Create '.env' File
 - Create Your Environment Variable
 ```bash
  STRIPE_SECRET_KEY = {YOUR STRIPE SECRET KEY}
  PRICE = {YOUR PRICE ID}
 ```
 
 - Migrate
 ```bash
  python manage.py migrate
 ```
 - Run Server
 ```bash
  python manage.py runserver
 ```
 
 ## Config [FRONTEND]
 
 - Open New Terminal and Navigate into frontend folder
 ```bash
  cd frontend/homipay
 ```
 - And Run:
 ```bash
  npm install
 ```
 - Then Run:
 ```bash
  npm run start
 ```
 **The Project is Working, Enjoy it ❤️**
