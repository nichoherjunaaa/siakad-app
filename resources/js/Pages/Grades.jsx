// resources/js/Pages/Grades.jsx
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import GradesHeader from '@/Components/Grades/GradesHeader';
import GradesSummary from '@/Components/Grades/GradesSummary';
import GradesTable from '@/Components/Grades/GradesTable';
import SubjectPerformance from '@/Components/Grades/SubjectPerformance';
import ProgressChart from '@/Components/Grades/ProgressChart';
import GradeStatistics from '@/Components/Grades/GradeStatistics';

export default function Grades({ auth }) {
    const userData = {
        role: 'siswa', // Bisa diubah: 'guru', 'orangtua'
        name: 'Ahmad Rizki',
        id: 'SM2024001',
        class: 'XII IPA 1',
        academicYear: '2023/2024',
        semester: 'Genap',
        homeroomTeacher: 'Bu Sari, S.Pd.'
    };

    return (
        <DashboardLayout
            user={userData}
            title="Nilai Akademik"
        >
            <Head title="Nilai" />

            {/* Page Header */}
            <GradesHeader user={userData} />

            {/* Grades Summary */}
            <GradesSummary />

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                    <GradesTable />
                </div>
                <div className="space-y-6">
                    <SubjectPerformance />
                </div>
            </div>

            {/* Charts and Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <ProgressChart />
                <GradeStatistics />
            </div>
        </DashboardLayout>
    );
}