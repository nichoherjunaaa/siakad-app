// resources/js/Pages/Materials.jsx
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import MaterialsHeader from '@/Components/Materials/MaterialsHeader';
import MaterialsFilter from '@/Components/Materials/MaterialsFilter';
import MaterialsGrid from '@/Components/Materials/MaterialsGrid';
import MaterialsList from '@/Components/Materials/MaterialsList';
import RecentDownloads from '@/Components/Materials/RecentDownloads';
import SubjectStats from '@/Components/Materials/SubjectStats';

export default function Materials({ auth }) {
    const userData = {
        role: 'siswa', // Bisa diubah: 'guru', 'orangtua'
        name: 'Ahmad Rizki',
        id: 'SM2024001',
        class: 'XII IPA 1',
        totalMaterials: 48,
        downloaded: 32,
        subjects: ['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Bahasa Inggris']
    };

    return (
        <DashboardLayout
            user={userData}
            title="Materi Pembelajaran"
        >
            <Head title="Materi" />

            {/* Page Header */}
            <MaterialsHeader user={userData} />

            {/* Filter Section */}
            <MaterialsFilter />

            {/* Materials Grid View */}
            <MaterialsGrid />

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <MaterialsList />
                </div>
                <div className="space-y-6">
                    <RecentDownloads />
                    <SubjectStats />
                </div>
            </div>
        </DashboardLayout>
    );
}