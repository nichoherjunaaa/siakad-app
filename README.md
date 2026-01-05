# School Academic Information System (SIAKAD)

A modern web-based **Academic Information System** for schools built with **Laravel, React, Inertia.js, and TailwindCSS**.  
This system helps schools manage students, teachers, classes, schedules, grades, attendance, reports, and parent access in a centralized and user-friendly way.

---

## 🚀 Features

### Authentication & Roles
- Login system for **Admin, Teacher, Student, and Guardian**
- Role-based access control using **Spatie Permission**
- Password reset and secure authentication (Laravel Sanctum)

### Academic Master Data
- Manage **Students, Teachers, Guardians, Classes, Subjects**
- Manage **Academic Years** and semesters
- Assign teachers to classes and subjects

### Academic Operations
- Create **class schedules**
- Input **grades** (assignment, midterm, final)
- Upload **assignments** and track student submissions
- Generate **report cards** (PDF)
- Record **student and teacher attendance**

### Notifications & Announcements
- School announcements for specific roles
- User notifications with read/unread status
- Optional email or system notifications

### Dashboard & Analytics
- Dashboard for Admin and Teachers
- Attendance and grade statistics
- Ranking and performance tracking (optional)

### Optional Advanced Features
- Detect at-risk students (low grades or frequent absences)
- Archive student documents (diplomas, certificates)
- Export data to Excel or PDF
- Background job support using **queues and Redis**

---

## 🛠️ Technology Stack

- **Backend:** Laravel 12, Laravel Sanctum, Spatie Permission
- **Frontend:** React, Inertia.js, TailwindCSS
- **Database:** MySQL
- **Other Tools:** Recharts/Chart.js, Laravel Queues, PDF Generator, Faker for seeding

---