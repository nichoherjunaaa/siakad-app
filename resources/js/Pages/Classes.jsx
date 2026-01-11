// resources/js/Pages/Classes.jsx
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import ClassesHeader from '@/Components/Classes/ClassesHeader';
import ClassesSummary from '@/Components/Classes/ClassesSummary';
import ClassCards from '@/Components/Classes/ClassCards';
import UpcomingSessions from '@/Components/Classes/UpcomingSessions';
import TeacherDirectory from '@/Components/Classes/TeacherDirectory';
import ClassResources from '@/Components/Classes/ClassResources';

export default function Classes({ auth }) {
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
            title="Kelas & Mata Pelajaran"
        >
            <Head title="Kelas" />

            {/* Page Header */}
            <ClassesHeader user={userData} />

            {/* Classes Summary */}
            <ClassesSummary />

            {/* Main Content - Class Cards */}
            <div className="mb-6">
                <ClassCards />
            </div>

            {/* Additional Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <UpcomingSessions />
                        <ClassResources />
                    </div>
                </div>
                <div>
                    <TeacherDirectory />
                </div>
            </div>
        </DashboardLayout>
    );
}