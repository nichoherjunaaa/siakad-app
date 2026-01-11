// resources/js/Pages/Students.jsx
import { Head, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import StudentsHeader from '@/Components/Students/StudentsHeader';
import StudentsTable from '@/Components/Students/StudentsTable';
import StudentStats from '@/Components/Students/StudentStats';
import ClassDistribution from '@/Components/Students/ClassDistribution';

export default function Students({ auth }) {
    const { students } = usePage().props;
    
    const userData = {
        role: 'guru', // Bisa diubah: 'admin', 'orangtua'
        name: 'Bu Sari, S.Pd.',
        id: 'GRU2024001',
        class: 'XII IPA 1',
        academicYear: '2023/2024',
        semester: 'Genap'
    };

    return (
        <DashboardLayout
            user={userData}
            title="Data Siswa"
        >
            <Head title="Siswa" />

            {/* Page Header */}
            <StudentsHeader user={userData} />

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2">
                    <StudentsTable students={students} />
                </div>
                <div className="space-y-6">
                    <StudentStats />
                    <ClassDistribution />
                </div>
            </div>
        </DashboardLayout>
    );
}