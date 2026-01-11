// resources/js/Pages/Assignments.jsx
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import AssignmentsHeader from '@/Components/Assignments/AssignmentsHeader';
import AssignmentsSummary from '@/Components/Assignments/AssignmentsSummary';
import AssignmentsList from '@/Components/Assignments/AssignmentsList';
import CalendarView from '@/Components/Assignments/CalendarView';
import ProgressOverview from '@/Components/Assignments/ProgressOverview';
import SubmissionStats from '@/Components/Assignments/SubmissionStats';

export default function Assignments({ auth }) {
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
            title="Tugas & Assignment"
        >
            <Head title="Tugas" />

            <AssignmentsHeader user={userData} />

            <AssignmentsSummary />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                    <AssignmentsList />
                </div>
                <div className="space-y-6">
                    <CalendarView />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <ProgressOverview />
                <SubmissionStats />
            </div>
        </DashboardLayout>
    );
}