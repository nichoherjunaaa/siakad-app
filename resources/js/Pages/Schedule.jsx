// resources/js/Pages/Schedule.jsx
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import ScheduleView from '@/Components/Schedule/ScheduleView';
import ScheduleFilter from '@/Components/Schedule/ScheduleFilter';
import ScheduleCalendar from '@/Components/Schedule/ScheduleCalendar';
import ClassInformation from '@/Components/Schedule/ClassInformation';
import TeacherContacts from '@/Components/Schedule/TeacherContacts';
import { usePage } from '@inertiajs/react';

export default function Schedule({ auth }) {
    const userData = auth.user;

    const { schedules } = usePage().props;

    const academicYear = '2023/2024';
    const semester = 'Genap';

    return (
        <DashboardLayout
            user={userData}
            title="Jadwal Pelajaran"
        >
            <Head title="Jadwal" />

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                    Jadwal Pelajaran
                </h1>
                <p className="text-neutral-600">
                    Tahun Ajaran {academicYear} - Semester {semester}
                </p>
            </div>

            {/* Schedule Filter */}
            {userData?.role === 'admin' && <ScheduleFilter />}

            {/* Schedule View */}
            <ScheduleView user={userData} schedules={schedules} />

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <ScheduleCalendar />
                </div>
                <div className="space-y-6">
                    <ClassInformation user={userData} />
                    <TeacherContacts />
                </div>
            </div>
        </DashboardLayout>
    );
}