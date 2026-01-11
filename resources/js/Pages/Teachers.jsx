// resources/js/Pages/Teachers.jsx
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import TeachersHeader from '@/Components/Teachers/TeachersHeader';
import TeachersTable from '@/Components/Teachers/TeachersTable';
import TeacherStats from '@/Components/Teachers/TeacherStats';
import SubjectDistribution from '@/Components/Teachers/SubjectDistribution';

export default function Teachers({ auth }) {
    const userData = {
        role: 'admin', // Bisa diubah: 'guru', 'kepsek'
        name: 'Admin Sekolah',
        id: 'ADM2024001',
        department: 'Administrasi',
        academicYear: '2023/2024'
    };

    return (
        <DashboardLayout
            user={userData}
            title="Data Guru & Staff"
        >
            <Head title="Guru" />

            {/* Page Header */}
            <TeachersHeader user={userData} />

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2">
                    <TeachersTable />
                </div>
                <div className="space-y-6">
                    <TeacherStats />
                    <SubjectDistribution />
                </div>
            </div>
        </DashboardLayout>
    );
}