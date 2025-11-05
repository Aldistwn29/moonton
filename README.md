# 🎬 Moonton - Streaming Platform

Aplikasi streaming video berbasis web yang dibangun sebagai MVP untuk tujuan pembelajaran. Memungkinkan pengguna menonton film secara online dengan sistem subscription.

## 📚 Tujuan Pembelajaran

Mempelajari integrasi antara **Laravel**, **React.js**, **Inertia.js**, dan **Laravel Breeze** untuk authentication.

## 🛠️ Teknologi

- **Backend**: Laravel 10.x, MySQL
- **Frontend**: React.js 18.x, Tailwind CSS
- **Bridge**: Inertia.js
- **Auth**: Laravel Breeze
- **Build Tool**: Vite

## ✨ Fitur

- **Home**: Daftar film populer dan preview
- **Movie**: Detail film dan video player untuk streaming
- **Subscription**: Paket berlangganan dan akses konten premium

## 📋 Prasyarat

- PHP >= 8.1
- Composer >= 2.0
- Node.js >= 18.x & NPM >= 9.x
- MySQL >= 8.0

## 🚀 Instalasi

```bash
# Clone repository
git clone https://github.com/Aldistwn29/moonton.git
cd moonton

# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Konfigurasi database di file .env
# DB_DATABASE=moonton
# DB_USERNAME=root
# DB_PASSWORD=

# Migrasi database
php artisan migrate
php artisan db:seed

# Create storage link
php artisan storage:link
```

## 🎯 Menjalankan Aplikasi

Buka 2 terminal:

```bash
# Terminal 1 - Laravel
php artisan serve

# Terminal 2 - Vite
npm run dev
```

Akses: `http://localhost:8000`

## 📁 Struktur Direktori

```
moonton/
├── app/Http/Controllers/     # Controllers
├── app/Models/               # Models
├── resources/js/
│   ├── Components/           # React components
│   └── Pages/                # Inertia pages
│       ├── Auth/             # Authentication
│       ├── Home/             # Home page
│       ├── Movie/            # Movie pages
│       └── Subscription/     # Subscription pages
└── routes/web.php            # Routes
```

## 🔗 Resources

- [Laravel Breeze](https://laravel.com/docs/starter-kits)
- [Inertia.js](https://inertiajs.com/)
- [React](https://react.dev/)

## 👨‍💻 Developer

**GitHub**: [@Aldistwn29](https://github.com/Aldistwn29)

---

Made with ❤️ for learning purposes
